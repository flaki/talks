#!/bin/sh

if [ -z "$CONTAINER_INIT" ]
then

if [ -z "$2" ]
then
    echo "Usage: proxmox_create.sh <container-id> <container-hostname>[ <cores> <ram> ]"
    exit 1
fi

# From the ENV
DEFAULTOS=${PCT_OS:-alpine}
DEFAULTSTORAGE=${PCT_STORAGE:-local}
DEFAULTROOTSIZE=${PCT_ROOTFSGB:-1}
DEFAULTSSH=${PCT_SSH:-$HOME/.ssh/id_rsa.pub}

CTID=$1
CTNAME=$2
CTOS=$(pveam list local | grep -om1 "[a-zA-Z0-9:._-]*/$DEFAULTOS[^ ]*")
CTCORES=${4:-2}
CTMEM=${5:-1024}

CMD="pct create $CTID $CTOS\
    -storage $DEFAULTSTORAGE\
    -hostname $CTNAME\
    -cores $CTCORES\
    -memory $CTMEM\
    -net0 name=eth0,bridge=vmbr0,ip=dhcp\
    -rootfs $DEFAULTSTORAGE:$DEFAULTROOTSIZE\
    -ssh-public-keys $DEFAULTSSH\
    -start 1"

echo "$CMD"

/bin/sh -c "$CMD"

# The rest of the script executes inside the container
sleep 2
echo "Running initialization script inside the container..."

pct push 506 proxmox_create.sh /init.sh -perms 700
pct exec 506 /bin/sh -- -c "CONTAINER_INIT=1 /init.sh && rm /init.sh"

exit 0

fi

apk update
apk upgrade
apk add nginx nginx-openrc git

cd /tmp
git clone https://github.com/flaki/talks.git --branch main --single-branch

mv ./talks/.nginx/config/*.conf /etc/nginx/http.d/
mv ./talks/www /var/www/talks
cd
rm -rf /tmp/talks

rc-update add nginx
/etc/init.d/nginx start

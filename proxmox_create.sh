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

if [ -z "$CONTAINER_REINIT" ]
then
    echo "$CMD"
    /bin/sh -c "$CMD"
else
    echo "Not recreating existing container"
fi

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

# Reuse existing repo if already checked out
if [ -e /tmp/talks ]
then
    cd /tmp/talks && git pull
else
    cd /tmp
    git clone https://github.com/flaki/talks.git --branch main --single-branch
fi

cp -fr /tmp/talks/.nginx/config/*.conf /etc/nginx/http.d/
cp -fr /tmp/talks/www /var/www/talks
cd

# Add the WebAssembly content type to the mime types served by Nginx
grep -c wasm /etc/nginx/mime.types || sed -i "s/}/\n    # WebAssembly\n    application\/wasm    wasm;\n}/" /etc/nginx/mime.types

# Start or restart nginx
rc-service -e nginx && rc-service nginx restart || ( rc-update add nginx && rc-service nginx start )

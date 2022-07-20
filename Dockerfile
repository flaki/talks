# maybe use nginx:alpine instead?
FROM alpine:latest
RUN apk add nginx bash

COPY www /var/www/talks
COPY .nginx/config/*.conf /etc/nginx/http.d/

EXPOSE 80
STOPSIGNAL SIGQUIT
CMD [ "nginx", "-g", "daemon off;" ]

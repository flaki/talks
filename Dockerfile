# maybe use nginx:alpine instead?
FROM alpine:latest
RUN apk add nginx bash

COPY www /var/www/talks
COPY .nginx/config/*.conf /etc/nginx/http.d/

# Add the WebAssembly content type to the mime types served by Nginx
RUN grep -c wasm /etc/nginx/mime.types || sed -i "s/}/\n    # WebAssembly\n    application\/wasm    wasm;\n}/" /etc/nginx/mime.types

EXPOSE 80
STOPSIGNAL SIGQUIT
CMD [ "nginx", "-g", "daemon off;" ]

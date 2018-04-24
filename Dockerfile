FROM alpine:3.7

WORKDIR /usr/src/app

COPY . .

RUN apk update && \
    apk add nodejs imagemagick && \
    rm -rf /var/cache/apk/* && \
    npm install -g http-server && \
    npm install --unsafe-perm

EXPOSE 8080

ENTRYPOINT ["http-server","/usr/src/app/"]

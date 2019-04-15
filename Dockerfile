FROM nginx:1.15.5-alpine
WORKDIR /home/app
RUN apk add nodejs npm git
COPY build/default.conf /etc/nginx/conf.d/default.conf
RUN mkdir /usr/share/nginx/html/callback
COPY . /home/app
RUN npm install
RUN npm run build
RUN cp -r dist/* /usr/share/nginx/html/callback
CMD nginx -g "daemon off;"

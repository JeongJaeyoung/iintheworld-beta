FROM nginx:1.23.3-alpine

RUN rm /etc/nginx/conf.d/default.conf #기존의 default.conf 삭제
COPY ./default.conf /etc/nginx/conf.d/default.conf
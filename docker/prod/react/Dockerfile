FROM node:21-alpine3.17 as build
WORKDIR /app
COPY ./frontend .
RUN npm install

#JavaScript heap out of memory 해결
ENV NODE_OPTIONS=--max-old-space-size=8192

CMD ["npm", "run", "build"]
CMD ["npm", "start"]
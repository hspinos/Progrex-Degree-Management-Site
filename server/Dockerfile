FROM node:17-alpine3.15

WORKDIR /usr/src/app

EXPOSE 8080

#RUN apt-get update
#RUN apt-get install -y python3
#RUN apt-get install -y make

RUN apk update
RUN apk add python3 make alpine-sdk
COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]
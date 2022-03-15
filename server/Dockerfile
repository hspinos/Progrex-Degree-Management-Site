FROM node:17-bullseye

WORKDIR /usr/src/app

EXPOSE 8080

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
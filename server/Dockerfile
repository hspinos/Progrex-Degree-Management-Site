FROM node:17-alpine3.14

WORKDIR /usr/src/app

EXPOSE 8080

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install

COPY . .

CMD ["npm", "run", "start"]
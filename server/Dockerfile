FROM node:17-alpine3.14

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 8080
CMD ["npm", "start"]
FROM node:17-bullseye

WORKDIR /usr/src/app

EXPOSE 8080

#RUN apt-get update
#RUN apt-get install -y python3
#RUN apt-get install -y make

COPY package*.json ./

RUN npm install && npm install -g nodemon

COPY . .

CMD ["npm", "start"]
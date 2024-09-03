FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000
EXPOSE 5001
EXPOSE 5002

CMD [ "npm", "run", "dev" ]
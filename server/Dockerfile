FROM node:18-alpine

WORKDIR /usr/app

COPY package.json ./

RUN npm install --force

COPY . . 

EXPOSE 3333

CMD ["npm","run","start:prod"]
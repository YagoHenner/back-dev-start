FROM node:20-alpine3.17

WORKDIR /usr/src/app

COPY .env ./
COPY ecosystem.config.js ./
COPY package*.json ./


RUN npm install
RUN npm install -g pm2

COPY . .

RUN npm run build
#flag-porta
EXPOSE 3000

CMD ["pm2-runtime", "start", "ecosystem.config.js"]

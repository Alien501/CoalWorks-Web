FROM node:lts

WORKDIR /app/gateway-1

COPY ./package*.json ./

ENV PORT=4001

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
FROM node:lts

WORKDIR /app/gateway-1

COPY ./package*.json ./

ENV PORT=4001

RUN npm ci

COPY . .

CMD ["npm", "run", "dev"]
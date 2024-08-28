FROM node:lts

WORKDIR /app

ENV PORT=3001

COPY ./package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
FROM node:24.19.0-alpine as base

RUN npm install -g bun

WORKDIR /app

COPY package*.json bun.lock ./

RUN bun install

COPY . .

EXPOSE 3000

CMD ["bun", "dev"]
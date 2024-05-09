FROM node:18-alpine as base

WORKDIR /app

COPY . .

RUN npm install

ENV PORT 3000

EXPOSE $PORT

VOLUME [ "/app/data" ]

CMD ["npm", "run", "dev"]
FROM node

WORKDIR /app

COPY package.json  /app

RUN npm instal

COPY . .

EXPOSE 5000

CMD ["node", "./dist/main.js"] 
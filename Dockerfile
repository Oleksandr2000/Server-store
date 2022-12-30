FROM node:14
WORKDIR /store/server/
ADD package.json package.json
RUN npm instal
ADD . .

RUN npm run build
RUN npm prun --production
CMD ["node", "./dist/main.js"] 
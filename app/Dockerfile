FROM node:18-alpine

WORKDIR /app

COPY sample-app/package.json ./
RUN npm install

COPY sample-app/ .

EXPOSE 3000

CMD ["npm", "start"]

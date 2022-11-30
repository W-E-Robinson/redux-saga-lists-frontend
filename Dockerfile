FROM alpine

WORKDIR /app

COPY package.json ./

COPY package-lock.json ./

RUN apk add --update nodejs npm

RUN npm install

COPY . ./

EXPOSE 3000

CMD ["npm", "start"]

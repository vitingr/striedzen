FROM node:18-alpine

WORKDIR /app

COPY package.json ./

RUN npm install 

# Here will copy and paste the package
COPY . .

RUN npm run build

COPY .next ./.next
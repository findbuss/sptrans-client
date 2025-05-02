FROM node:lts-alpine

WORKDIR /app

COPY ./yarn.lock ./
COPY ./.yarnrc.yml ./
COPY ./package.json ./

RUN corepack enable
RUN yarn

RUN rm -f ./node_modules/bus-promise/build/server/constants/api.js

COPY ./cole-isso-na-node-modules/bus-promise/build/server/constants/docker-api.js ./node_modules/bus-promise/build/server/constants/api.js

COPY . .



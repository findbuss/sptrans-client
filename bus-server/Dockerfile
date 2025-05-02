FROM node:lts-alpine

WORKDIR /app

COPY ./yarn.lock ./
COPY ./.yarnrc.yml ./
COPY ./package.json ./

RUN corepack enable
RUN yarn

COPY . .

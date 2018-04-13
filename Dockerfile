FROM node:8.11.1-alpine

WORKDIR /app

ADD package.json package.json

RUN yarn install --frozen-lockfile --production && yarn cache clean

ADD . /app


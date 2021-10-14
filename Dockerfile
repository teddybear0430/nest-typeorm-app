FROM node:15-alpine

RUN yarn global add @nestjs/cli

WORKDIR /app

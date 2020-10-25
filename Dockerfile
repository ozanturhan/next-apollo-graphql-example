FROM node:12.14.0 AS installer
WORKDIR /app

COPY ./package.json ./

RUN yarn install

COPY ./ ./

FROM installer
WORKDIR /app
COPY --from=installer /app ./

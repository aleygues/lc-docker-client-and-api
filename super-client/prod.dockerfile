FROM node:lts-alpine

WORKDIR /app

COPY ./package.json ./
RUN yarn

COPY ./public ./public
COPY ./src ./src
COPY ./tsconfig.json ./

RUN yarn build
# RUN rm -rf node_modules src

CMD npx serve ./build

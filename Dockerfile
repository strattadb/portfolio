FROM node:10.11.0 AS builder
ENV NODE_ENV=${NODE_ENV:-production}
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install --production=false
COPY . .
RUN yarn build:prod

FROM nginx:1.15.6-alpine
COPY --from=builder /usr/src/app/dist/ /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/sites-available/portfolio.conf

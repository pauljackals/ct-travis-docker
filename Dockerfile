FROM node:alpine AS builder
WORKDIR /opt/pizza
COPY ./pizza/package.json ./
RUN yarn
COPY ./pizza/ ./
RUN yarn build

FROM nginx
COPY --from=builder /opt/pizza/build /usr/share/nginx/html
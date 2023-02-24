# Build Stage
FROM node:lts-alpine as builder
WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
RUN npm run build

# Deploy Stage
FROM nginx:mainline-alpine-slim as production
ENV NODE_ENV production

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
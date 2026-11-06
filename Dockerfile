FROM node:24-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# The final image holds only the exported site at /site. A deploy copies /site into Caddy's volume.
FROM busybox:stable
COPY --from=build /app/out /site

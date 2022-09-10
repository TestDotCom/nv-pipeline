FROM node:18-bullseye-slim

COPY . .
RUN npm ci

EXPOSE 8888/tcp
CMD [ "node", "server.js" ]

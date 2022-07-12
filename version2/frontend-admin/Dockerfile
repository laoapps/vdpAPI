FROM node:16
ENV NODE_ENV $NODE_ENV
WORKDIR /app
COPY www /app/www
COPY static /app/
RUN npm i express
CMD ["node", "./static.js"]


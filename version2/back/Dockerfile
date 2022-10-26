FROM node:16
ENV NODE_ENV $NODE_ENV
WORKDIR /app
# COPY package.json /app

#COPY package-lock.json /app/package-lock.json
COPY . /app
RUN npm install
RUN npm install @types/node --save-dev typescript -g


CMD ["npm","start"]
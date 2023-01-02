FROM node:18
WORKDIR /app
COPY PACKAGE.json /app
RUN npm install
COPY ./app
CMD node index.js
EXPOSE 3000
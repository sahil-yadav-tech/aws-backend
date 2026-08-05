FROM node:24-alpine
WORKDIR /App
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 2720
# Use npm start or node command to actually run your app
CMD [ "npm", "start" ]
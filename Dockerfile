FROM node:14.18.1-alpine
WORKDIR /var/www
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "dev"]


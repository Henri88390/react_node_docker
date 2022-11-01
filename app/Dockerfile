FROM node:17-alpine

WORKDIR /react_node_docker/frontend

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
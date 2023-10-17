FROM node:14

WORKDIR /app/newsapp

COPY package*.json ./

RUN npm install

COPY . .

# RUN npm run build

# CMD [ "npm", "start" ]
CMD npm start
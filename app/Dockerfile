FROM node

WORKDIR /app

COPY . .

RUN npm i

RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "preview" ]


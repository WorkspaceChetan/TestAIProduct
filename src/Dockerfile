FROM node:14.17.6

# RUN mkdir -p /app/client/node_modules && chown -R node:node /app/client


WORKDIR /app/client

COPY ./package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

# RUN npm start

EXPOSE 3080

CMD [ "npm", "start"]
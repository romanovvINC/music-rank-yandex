FROM node

COPY package.json ./
COPY package-lock.json ./
COPY ./ ./

EXPOSE 5000
RUN npm i

CMD ["npm", "run", "dev"]
FROM node:18-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install --only=production

COPY . .

CMD ["node", "dist/server.js"]
EXPOSE 3000

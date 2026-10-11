FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV NODE_ENV=production
EXPOSE 3000
# Creates tables + sample data on first run (safe to repeat), then starts the site
CMD ["sh", "-c", "npm run db:setup && npm start"]

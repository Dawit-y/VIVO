FROM node:20.9.0-alpine3.18
RUN addgroup app && adduser -S -G app app
USER app
WORKDIR /app
RUN mkdir data
COPY package*.json .
RUN npm install
COPY . .
# ENV API_URL=something
EXPOSE 5173
CMD ["npm", "run", "dev"]

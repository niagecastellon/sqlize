# Prende l'immagine di node.js e la espande con il nostro codice
FROM node:latest
WORKDIR /app
COPY  ./app/package*.json ./ 
RUN npm install
COPY /app .
EXPOSE 3000  
# Espone la porta 3000, dice al container di esporsi su questa porta
CMD ["node", "index.js"]
# Dockerfile for API Gateway (Node.js)

# Étape 1: Utiliser une image Node.js de base
FROM node:16

# Étape 2: Créer un répertoire pour l'application
WORKDIR /usr/src/app

# Étape 3: Copier le package.json et installer les dépendances
COPY package*.json ./
RUN npm install

# Étape 4: Copier le reste de l'application
COPY . .

# Étape 5: Définir la variable d'environnement (tu peux aussi les placer dans un fichier .env)
ENV PORT=3001
ENV USER_SERVICE_URL=http://localhost:3002
ENV PRODUCT_SERVICE_URL=http://localhost:3003

# Étape 6: Exposer le port
EXPOSE 3001

# Étape 7: Lancer l'application
CMD ["node", "app.js"]

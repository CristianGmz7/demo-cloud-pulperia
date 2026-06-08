# Usar una versión ligera de Node (Alpine)
FROM node:18-alpine

# Crear el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar primero el package.json e instalamos dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código (server.js)
COPY . .

# Exponer el puerto que usa Render
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
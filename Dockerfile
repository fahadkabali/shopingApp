FROM node:18-alpine

WORKDIR /app

# Install system dependencies for React Native
RUN apk add --no-cache git \
    openssh \
    python3 \
    make \
    g++

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the React Native app
RUN npm run build

# Expose the default React Native dev server port
EXPOSE 8081

CMD ["npm", "start"]
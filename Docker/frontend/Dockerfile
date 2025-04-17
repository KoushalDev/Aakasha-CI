# Stage 1: Build
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies first for caching
COPY package*.json ./
RUN npm install

# Copy all source code and build the app
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

WORKDIR /app

# Copy only built files & package.json for runtime
COPY --from=build /app/.next .next
COPY --from=build /app/public public
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]


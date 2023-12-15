FROM node:20

WORKDIR /usr/src/app

COPY package.json .
COPY pnpm-lock.yaml .

RUN npm install -g pnpm

RUN pnpm install

COPY . .

EXPOSE 3005

# Start the Next.js app
CMD ["pnpm", "run", "start"]


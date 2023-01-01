FROM node:14

WORKDIR /home/app

COPY package.json /home/app
RUN npm i

COPY . /home/app
#docker build -t app .
CMD ["node", "index.js"]

#Remember, to build a docker image using Dockerfile.dev, use...
#docker build -f Dockerfile.dev .
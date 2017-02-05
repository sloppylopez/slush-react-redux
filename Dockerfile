# Change latest to your desired node version (https://hub.docker.com/r/library/node/tags/)
FROM node:6.9.1
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN ls -thrall; pwd
COPY package.json /usr/src/app/
COPY app.json /usr/src/app/
COPY config.json /usr/src/app/
RUN ls -thrall; pwd
RUN npm install --silent
RUN ls -thrall; pwd
RUN ./node_modules/.bin/jspm i
COPY . /usr/src/app
RUN ls -thrall; pwd
RUN echo "FINISHING!!!!!!!!!!!!!!!"
CMD [ "npm", "start" ]
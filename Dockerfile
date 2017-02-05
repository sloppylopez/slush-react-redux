# Change latest to your desired node version (https://hub.docker.com/r/library/node/tags/)
FROM node:6.9.1
RUN mkdir -p /usr/src/app
RUN mkdir -p /usr/src/app/jspm_packages
WORKDIR /usr/src/app
VOLUME /usr/src/app/jspm_packages
COPY package.json /usr/src/app/
RUN npm i -g  firebase-tools --silent
RUN npm install --silent
RUN npm rebuild node-sass
COPY . /usr/src/app
RUN ls -thrall; pwd
CMD [ "npm", "start" ]
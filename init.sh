#!/usr/bin/env bash
./node_modules/.bin/jspm config registries.github.auth $JSPM_GITHUB_AUTH_TOKEN
./node_modules/.bin/jspm i
#In case you need to increase the number of watchers in your OS
#echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
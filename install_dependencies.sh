#!/usr/bin/env bash
sudo apt-get install python-livereload
npm install -g lite-server
#In case you need to increase the number of watchers in your OS
#echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
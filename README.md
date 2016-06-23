# slush-react-redux
    Slush instead of Yeoman, React instead Of Angular and Redux to have some logic

# For live-reload in dev time
    You need `Ruby` installed in case you want to use this feature and `Guard`

## Goodies working Out-of-the-box
	NEW! LiveReload your browser with Guard and LiveReload Chrome plugin
	
	http://stackoverflow.com/questions/16730473/livereload-chrome-extention-unable-to-connect-to-guard-server-on-ubuntu-13-04-64
	
## Common Pitfalls
	1) If you don't want to or can;t install livereload plug-in for whichever reason, you can always do ```npm start:noreload``` and 
	
	2) echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p to solve 'Error: watch ENOSPC' when running the server

# For generating a Token 
    To be able to deploy to Firebase in a CI pipeline
    `firebase login:ci`

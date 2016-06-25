# slush-react-redux
    Slush instead of Yeoman, React instead Of Angular and Redux to have some logic

## Goodies working Out-of-the-box
	NEW! LiveReload your browser with lite-server
	
## Common Pitfalls
	In case you need to increase the number of watchers in the system
	1) echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p to solve 'Error: watch ENOSPC' when running the server

# For generating a Token 
    To be able to deploy to Firebase in a CI pipeline
    `firebase login:ci`

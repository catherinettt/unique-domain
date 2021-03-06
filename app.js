var fs = require('fs');



var express = require('express');

var routes = require('./routes/routes.js');
var app = module.exports = express.createServer();

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.set('view options', { layout: false });
	app.use(express.methodOverride());
	app.use(express.static(__dirname + "/public"));
	app.use(express.bodyParser())
	app.use(app.router);

});

app.configure('development', function(){
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
	app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.post('/', routes.check_url);


exports.server = app;
// listening
app.listen(process.env.DEPLOY_PORT || 8000, function(){
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
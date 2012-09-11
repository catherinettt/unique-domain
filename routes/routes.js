var http = require('http');
var lookup = require('../getdomain.js');


exports.index = function (req, res) {
	res.render("index", {
					title:"Hello World",
				}, function (err, rendered) {
					res.writeHead(200, {'Content-Type':'text/html'});
					res.end(rendered);
					})
					}

exports.check_url = function (req, res) {
	console.log(req.body);
	var name = req.body["input_name"]
	console.log(name);
	var result = lookup.get_urls(name);
	res.render("show", {
					title:"Hello World",
					result : result
				}, function (err, rendered) {
					res.writeHead(200, {'Content-Type':'text/html'});
					res.end(rendered);
					})
					}
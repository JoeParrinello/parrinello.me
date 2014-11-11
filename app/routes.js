module.exports = function(app){
	app.get('*', function(req,res){
		res.sendFile(app.dirname+'/public/index.html');


	});


};

module.exports = function(app){
	app.get('*', function(req,res){
		res.sendfile(app.dirname+'/public/index.html');


	});


}

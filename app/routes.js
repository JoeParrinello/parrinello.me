module.exports = function(app){

	app.get('/resume', function(req,res){
		console.log("sending resume");
		res.sendFile(app.dirname+'/public/assets/documents/Joseph_A_Parrinello_Resume_02-15-2015_Websafe.pdf');
	});

	app.get('*', function(req,res){
		res.sendFile(app.dirname+'/public/index.html');


	});


};

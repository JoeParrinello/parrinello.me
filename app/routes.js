module.exports = function(app){

	app.get('/resume', function(req,res){
		console.log("sending resume");
		res.sendFile(app.dirname+'/public/assets/documents/Resume_Joseph_A_Parrinello_11-21-14.pdf');
	});

	app.get('*', function(req,res){
		res.sendFile(app.dirname+'/public/index.html');


	});


};

module.exports = function (app) {

    app.get('/resume', function (req, res) {
        console.log("sending resume");
        res.sendFile(app.dirname + '/public/assets/documents/Joseph A Parrinello Resume WebSafe 05-02-16.pdf');
    });

    app.get('*', function (req, res) {
        res.sendFile(app.dirname + '/public/index.html');


    });


};

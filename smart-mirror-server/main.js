var restify = require('restify');
var wifiName = require('wifi-name');

function getWifiName(req, res, next) {
    wifiName().then(name => {
        res.send({
            "wifiName": name
        });
        next();
    });
}

var server = restify.createServer();

server.use(
    function crossOrigin(req,res,next){
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);

server.get('/api/wifi', getWifiName);

server.listen(8080, function() {
   console.log("%s server listening at %s", server.name, server.url);
});

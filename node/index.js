var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){

    fs.readFile('index.html',
    
        function(err, data){
            
            res.writeHead(200, {'Content-type' : 'text/Html'});
            res.write(data)
            return res.end()

        }
    )
    console.log('servidor rodando')

}).listen(8080)
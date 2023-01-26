var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  fs.readFile('fileSystem/test.html', function(err, data) {
    if(err)
        throw err;
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });

    // fs.appendFile('fileSystem/append.txt', '\nThis is a new line of text.', function(err) {
    //     if(err) {
    //         throw err;
    //     }
    // });

    fs.unlink('fileSystem/append.txt', function(err) {
        if(err) throw err;
        console.log('File Deleted');
    })
}).listen(8080);
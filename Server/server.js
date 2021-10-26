var http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req.url , req.method);

    //set header content type
    res.setHeader('Content-Type','text/html');

    res.write('<head><link rel="stylesheet" href="#"></head>');
    res.write('<p>hello,murat how are you</p>');
    res.write('<p>hello,yunus naber </p>');
    res.end();


});

server.listen(3000,'localhost',()=>{
    console.log('listenin for requests on port 3000');
});




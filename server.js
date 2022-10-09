const http = require("http");
const fs = require("fs");

//create a new server instance and attach a callback function to it which gets called whenever a request is coming to it
const server = http.createServer((req, res) => {
    // console.log(`------------------------request object----------------------------`)
    // console.log(req);
    // console.log(`------------------------response object----------------------------`)
    // console.log(res);

    // ----------Sending plain text------------------
    // res.setHeader('content-type', 'text/plain');
    // res.write('Hello World is ours to rule!');
    // res.end();

    // -------------Sending html tags--------------
    // res.setHeader('content-type', 'text/html');
    // res.write('<h1>Hello Welcome to world of backend <h1>');
    // res.write('<h2>You are gonna love it <h2>');
    // res.end();

    // --------------Serving html files----------------
    // fs.readFile('./views/index.html', (err, fileData) => {
    //     res.setHeader('content-type', 'text/html');
    //     res.write(fileData);
    //     res.end();
    // })
    res.setHeader('content-type', 'text/html')
    let relFilePath = './views'
    switch(req.url){
        case '/':
            relFilePath += '/index.html';
            break;
        case '/about':
            relFilePath += '/aboutUs.html';
            break;
        default:
            relFilePath += '/404.html';
            break;
    }
    fs.readFile(relFilePath, (err, filData) => {
        res.write(filData);
        res.end();
    })
})

//above code has created server and made the reaction callback but it has not started yet. 

//listen method takes port number, hostname(domain name), and a callback method which gets called when server is online
server.listen(3000, 'localhost', () => {
    console.log("server is up darling")
})


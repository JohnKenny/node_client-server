const http = require('http');
const fs = require('fs');
const _ = require('lodash');

// stores server in a variable for later use i.e. websockets
const server = http.createServer((req, res) => {
    // lodash
    const num = _.random(0, 10);
    console.log(num);

    const greet = _.once(() => {
        console.log('ola');
    });

    greet();
    greet();

    // set header content type
    res.setHeader('Content-Type', 'text/html');
    // res.write('<p>Ola</p>');
    // res.write('<p>Ola tambien</p>');
    // res.end(); // sends code back to the browser

    // path routing
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':               
                res.statusCode = 301;
                res.setHeader('Location', '/about'); // redirect to /about
                res.end();
                break;    
        default:
            path += '404.html';
            res.statusCode = 404;
            break;        
    }

    // path variable used here
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        } else {
            //res.write(data);
            res.end(data); // may be passed directly to end if write used once only
        }
    } ) 
    
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port 3000');
})


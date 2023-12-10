const http = require('http');
const server = http.createServer((req, res) => {
        if (req.url === '/') {
            res.end('This is our home page')
        }
        if (req.url === '/about') {
            res.end('This is our about page');
        }
        res.end(`<h1>ooh ohh!</h1>`)

})
server.listen(8080)



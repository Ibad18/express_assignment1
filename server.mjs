import { createServer } from 'node:http'
const PORT = 3000;
const myServer = createServer((req, res) => {
    if (req.url === '/'|| req.url === '/home') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end("This is Home Page")
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end("This is About Page")
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end("This is a Contact Page")
    }
    else {
        res.writeHead(404, { 'content-type': 'text/plain' })
        res.end("Page Not Found")
    }
})
myServer.listen(PORT, () => {
    console.log(`server is running on https://localhost:${PORT}`)
})
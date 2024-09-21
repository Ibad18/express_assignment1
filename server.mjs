import { createServer } from 'node:http'
const PORT = 3000;
const myServer = createServer((req, res) => {
    if (req.url === '/'|| req.url === '/home') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end("Home Page")
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end("About Page")
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end("Contact Page")
    }
    else if (req.url === '/section') {
        res.writeHead(200, { 'content-type': 'text/plain' })
        res.end("Section Page")
    }
    else {
        res.writeHead(404, { 'content-type': 'text/plain' })
        res.end("Page Not Found")
    }
})
myServer.listen(PORT, () => {
    console.log(`server is running on https://localhost:${PORT}`)
})
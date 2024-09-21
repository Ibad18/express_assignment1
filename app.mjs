import {createServer} from 'node:http'
const PORT = 3000
const server = createServer((req, res)=>{
    const {method, url} = req
    const parsedUrl = new URL (url, `http://${req.headers.host}`)
    res.setHeader('Content-Type', 'Application/json')
    if (method === 'GET' && parsedUrl.pathname === '/api/items'){
        res.statusCode = 200
        res.end(JSON.stringify({message:'GET Request - Fetching all items'}))
    }
    else{
        res.statusCode = 404
        res.end(JSON.stringify({message: 'Route Not Found'}))
    }
});
server.listen(PORT, ()=>console.log(`Server is listening on http://localhost:${PORT}`))

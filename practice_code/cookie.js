const http = require('http')

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie)
    res.writeHead(200, { 'Set-Cookie' : 'mycookie=1234qwe' })
    res.end('Hello. Welcome to our service...')
})
    .listen(8003, () => {
        console.log("8003번 포트에서 웹서버가 실행이 됩니다..")
})
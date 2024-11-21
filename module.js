const http=require('http');

const server=http.createServer((req,res)=>{
// res.statusCode=200;
res.setHeader("Content-Type",'text/plain');
res.end("My name is Farhan Hye!");
})

server.listen(7000,()=>{
    console.log('Server is running on PORT 7000')
})
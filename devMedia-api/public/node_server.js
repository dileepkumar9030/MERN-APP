var http = require('http')
var fs = require('fs')
var server = http.createServer();
var path = require('path')

server.on('request', (request, response)=>{
    var body = []
    const {headers, url, method} = request;
    //const responseBody = {headers, url, method, body}

    response.on('error', err=>{
        console.log(err)
        response.statusCode=400
        response.end()
    })
    response.on('error', err=>{
        console.log(err);
    })

    // request.on('data', chunk=>{
    //     body.push(chunk)
    // })

    // request.on('end', ()=>{
    //     body=body.concat().toString()
    // }).on('error', ()=>{
    //     response.statusCode = 400;
    //     response.end()
    // })

    
    if(request){
        response.writeHead(200, {
            "Content-Type": "application/json"
        })

        // GET METHODS

        if(request.url==='/'){
            // response.write("Hello World!!")
            // response.end()
            fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data)=>{
                response.writeHead(200, {'Content-Type': 'text/html'})
                response.end(data)
            })
        }else if(request.url==='/about'){
            //response.write("About page")
            response.write(JSON.stringify(responseBody))
            response.end()
        }else if(request.url==='/contact'){
            response.write("Contact page")
            response.end()
        }else if(request.url==='/users'){
            const users = [
                {name: "dileep", age: 24},
                {name: "vegeta", age: 45}
            ]
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write("Users page")
            response.end(JSON.stringify(users))
        }
        else if(request.method==='POST' && request.url==='/echo'){    //POST METHOD
            let body = []
            request.on('data', chunk=>{
                body.push(chunk)
            }).on('end', ()=>{
                body = Buffer.concat(body).toString()
                const responseBody = {headers, url, method, body}
                response.end(JSON.stringify(responseBody))
            })
        } else {
            response.write(`Cannot get ${request.url}`)
            response.statusCode=404
            response.end()
        }
       
    }

   
    
})

server.listen(8080, ()=>{
    console.log("Server is listening on port 8080: ");
})


const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res)=>{
    //build file path
    let filePath = path.join(__dirname, 'public', req.url==='/' ? 'index.html': req.url) 

    //extension of the file
    let extname = path.extname(filePath)

    //initial content type
    let contentType = "text/html"

    //check ext name and set content type
    switch(extname){
        case ".js":
            contentType = 'text/javascript';
            break
        case ".css":
            contentType = 'text/css'
            break
        case ".json":
            contentType = 'application/json'
            break
        case ".png":
            contentType = 'image/png'
            break
        case ".jpg":
            contentType = 'image/jpg'
            break
    }

    if(contentType==="text/html" && extname=='') filePath += '.html'

    console.log(filePath)
    console.log(extname);

    fs.readFile(filePath, (err, data)=>{
        if(err){
            if(err.code==='ENOENT'){
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data)=>{
                    res.writeHead(200,{"Content-Type": "text/html"})
                    res.end(data, "utf-8")
                })
            } else{
                //some server error
                res.writeHead(500)
                res.end(`Server error : ${err.code}`)
            }
        } else{
            //success
            res.writeHead(200, {"Content-Type": contentType})
            res.end(data, "utf-8")
        }
    })
    

})


server.listen(8080, ()=>console.log("Runnning on 8080: "))
const EventEmitter = require('events')
//const Logger = require('./logger')

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

// myEmitter.on('event', ()=>console.log('Event occurred'))
// myEmitter.emit('event')
// const logger = new Logger()
// logger.on('message', function(data){
//     console.log('Called listener: ', data, this )
// } )
// logger.loge('HEllo world')

// myEmitter.on('event', (a,b)=>{
//     setImmediate(()=>{
//         console.log('this happens immediately');
        
//     })
// })

// myEmitter.emit('event', 'a', 'b')


// myEmitter.once('newListener', (event, listener)=>{
//     if(event==='event'){
//         myEmitter.on('event', ()=>console.log('B'))
//     }
// })

// myEmitter.on('event', ()=>console.log('A'))
// myEmitter.emit('event') 

myEmitter.emit('event', 'tech', 'office')
myEmitter.on('event', (a,b)=>{
    setImmediate(()=>console.log('this happens asynchronously'))
    function cb(){
        console.log('this happens second', a, b);
    }
    process.nextTick(cb)
    console.log('this happens first', a, b);
    
})
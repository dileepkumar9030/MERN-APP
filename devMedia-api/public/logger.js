const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter{

    loge(msg){
        this.emit('message', {id: uuid.v4(), msg})
    }
    
}

const logger = new Logger()
logger.on('message', function(data){console.log(data, this)
})
logger.loge('Hello world')
console.log(this);



module.exports=Logger
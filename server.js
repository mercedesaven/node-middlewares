const express = require('express')
const server = express() 
const logger = require('morgan')
const router = require('./modules/router')
//traigo express con requiere y luego lo ejecuto a dentro de una variable. Para que actue express como un servidor. Y es importante declarar cual es el local host. (puerto)
const port = 3000
//hay que decirle que escuhe el servidor. Con listen que es un metodo de express. Recibe dos parametros (el puerto y que va a hacer (con una funcion))


server.use(logger('dev'))
server.use(express.static('public'))
server.use(router)
// cada vez que hago cambio en el proyecto, en el proceso de node, hay que matar el proceso actual con ctrl c y volver a hacer npm run
//hay que especificar al server que hacer cuando se quiera ir a una ruta. 

server.listen(port, () =>{
    console.log(`running ${port}`)
})
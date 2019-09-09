const express = require('express') 
const path = require('path')


const users = require('./users')
//router es una propiedad de express, al ejecutarla, la convierte en router. 
const router = express.Router();




//antes hacia esta funcion en server, ahora la hago con router (como variable) para que sepa que tiene que ejecutrar.
 
router.get('/index', (req, res)=>{
    res.sendFile(path.join(__dirname,'../pages/index.html'))
  })
  
router.get('/componentes', (req, res)=>{
    res.sendFile(path.join(__dirname,'../pages/componentes.html'))
  })
  
router.get('/api/users', (users) )

router.use((req, res)=>{
  res.status(404).send('pifiaste wache')
})

//quiero exportar la variable que genero. 
module.exports = router 

//es recomendable poner en orden alfabetico
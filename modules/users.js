const users = [{name:"calixta", emial:"calix@calix.com"}]

const middleWare = (req, res, next) => {
    console.log('pidiendo usuarios')
    res.json({users})
    next()
}

module.exports = middleWare
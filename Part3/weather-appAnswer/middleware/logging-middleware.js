const logging = (req, res, next) => {
    console.log(`IP: ${req.ip}, Path: ${req.path}, Query Params: ${JSON.stringify(req.query)}, Body: ${JSON.stringify(req.body)}`)
    
    next()
}

module.exports = { logging }
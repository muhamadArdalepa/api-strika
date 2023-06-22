const logRequest = (res, req, next) =>{
    console.log('Terjadi request ke PATH:',req.path);
    next();
}

module.exports = logRequest;
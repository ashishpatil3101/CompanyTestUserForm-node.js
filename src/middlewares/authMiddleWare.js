const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;

const verifyToken =( req, res ,next ) =>{

    try {
       
        const response  = jwt.verify( req.headers.authorization  , ''+JWT_KEY);
        next();
        
    } 
    catch (error) {
        console.log("something is wrong  auth middle ware  ");
        throw new Error("not able to verify the token");    
    }
}

module.exports = verifyToken ;
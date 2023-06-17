const jwt = require("jsonwebtoken");
const secretKey = "quadir123#";


// This is a middleware function, called before accessing protected routes

const verifyToken = (req, res, next) => {  

    const token = req.headers.authorization;
    
    if(!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if(err) {
            res.status(403).json({ message: "Invalid token" });
        }
        // else attach the decoded value to the req object and call next()
        console.log('decoded value', decoded)
        req.user = decoded;
        next();
    })
}

module.exports = {
  verifyToken,
};

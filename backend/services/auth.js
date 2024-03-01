const jwt = require("jsonwebtoken");

const GenerateJWT =  (user) =>{
    const token = jwt.sign(user,'apikey');
    return token;
}

const VerifyJWt = (req,res,next) =>{
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, 'apikey', (err, decoded) => {
        if (err) return res.status(401).json({ message: 'Failed to authenticate token' });

        req.user = decoded;
        next();
    });
}

module.exports = {
    GenerateJWT, VerifyJWt
}


const jwt = require('jsonwebtoken');
const ensureAuthentication =(req,res,next)=>{
    const auth = req.headers['authorization'];
    if(!auth){
        return res.status(401).json({message:"unauthorized,jwt token is required"})
    }
    try {
        const decoded = jwt.verify(auth,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
       
            return res.status(401).json({message:"unauthorized,jwt token is wrong or expires"})
        
        
    }
}

module.exports = ensureAuthentication
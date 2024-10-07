import jwt from 'jsonwebtoken';
const secret = "Aryan";
const Auth = async (req, res, next) => {
    const x = req.headers.authorization;
    const token = x.split(" ")[1];

if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {

        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                console.log("Error in authorization:", err);
                return res.status(401).json({ message: "Unauthorized access" });
            }

            req.user = decoded; 
            next();
        });
    } catch (err) {
        console.log("Error during token verification:", err);
        return res.status(401).json({ message: "Token verification failed" });
    }
};
export {Auth,secret}

    

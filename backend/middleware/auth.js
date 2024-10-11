import jwt from 'jsonwebtoken';
const secret = "Aryan";

const auth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: "Token not provided" });
    }

    try {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                console.log("Error in authorization", err);
                return res.status(401).json({ message: "Invalid token" });
            }
            req.user = decoded; 
            next();
        });
    } catch (err) {
        console.log("Error in the catch block", err);
        return res.status(401).json({ message: "Unauthorized access" });
    }
};
export {secret,auth}


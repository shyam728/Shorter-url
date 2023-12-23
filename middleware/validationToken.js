const jwt = require("jsonwebtoken");

const validationToken = async (req, res, next) => {
    let token
    let authHeader = req.headers.Authorization || req.headers.authorization;
    token = authHeader.split(" ")[1];
    // token = authHeader;

    jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, decoded) => {
        if (err) {
            res.status(401).json({ error: "user is not Authorized" })
        }
        req.user = decoded.user;
        next();
    });

    if (!token) {
        return res.status(401).json({ error: "User is not authorized or token is missing" })
    }
}

module.exports = validationToken;
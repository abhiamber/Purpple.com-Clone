const jwt = require("jsonwebtoken")

require("dotenv").config()

const authuser = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.token_password)
            if (decoded) {
                const userID= decoded.id;
                req.body.userID =userID ;
                next()
            }
            else {
                res.send("Please Login to continue")
            }
        }
        catch (err) {
            console.log(err)
            console.log("You have the wrong token")
        }
    }
}

module.exports = { authuser }
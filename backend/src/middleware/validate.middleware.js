const validate = (req, res, next) => {
    const { email } = req.headers;
    if (email === "pushpendra1697@gmail.com") {
        next();
    } else {
        res.send({"status": "NO", "msg": "You are not Admin" });
    }
}

module.exports = { validate };
module.exports = function Token(req, res, next) {
    console.log("Create Token...");

    req.token = true;
    next();
};

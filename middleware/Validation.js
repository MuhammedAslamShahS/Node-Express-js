module.exports = function Validation(req, res, next) {
    if (req.token) {
        console.log("Token Approved");
        next();
    }
};

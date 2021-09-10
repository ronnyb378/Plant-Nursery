
function checkAuth(req, res, next) {
    if (req.session.user) {
        next()
    } else if (req.path === '/users/login') {
        next()
    } else {
        res.status(401).json({error: "not logged in"})
    }
}

module.exports = checkAuth
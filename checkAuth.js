
function checkAuth(req, res, next) {
    if (req.session.user) {
        next()
    } else if (req.path === '/login' || req.path === '/signup') {
        next()
    } else {
        res.status(401).json({error: "not logged in"})
        
    }
}

module.exports = checkAuth
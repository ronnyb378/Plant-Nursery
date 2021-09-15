const { validationResult } = require('express-validator');

function validate(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
    }

    return next();
}

module.exports = validate;
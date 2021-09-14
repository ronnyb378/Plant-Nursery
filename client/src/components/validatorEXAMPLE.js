// body('name')
//     .notEmpty()
//     .withMessage('field is required')
//     .isLength({ max: 255 })
//     .withMessage('must be less than 255 characters')
//     .trim()
//     .escape(),
//     body('image').default('').isLength({ max: 255 }).trim().escape(),
//     body('description').default('').trim().escape(),
//     body('price').default(0).isInt().withMessage('must be an integer').toInt(),
//     body('quantity').default(0).isInt().withMessage('must be an integer').toInt(),
//     body('categoryId')
//         .optional()
//         .isInt()
//         .withMessage('must be an integer')
//         .toInt(),
//     body('publishedAt')
//         .optional()
//         .isDate()
//         .withMessage('must be a valid date')
//         .default(new Date())
//         .toDate(),
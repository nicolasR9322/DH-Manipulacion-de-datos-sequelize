const {check} = require("express-validator");

module.exports = [
    check("title")
        .notEmpty().withMessage("introduzca un titulo"),
    check("rating")
        .notEmpty().withMessage("introduzca el rating"),
    check("awards")
        .notEmpty().withMessage("introduzca un premio"),
    check("release_date")
        .notEmpty().withMessage("introduzca una fecha"),
]
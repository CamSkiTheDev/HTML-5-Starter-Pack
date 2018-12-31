module.exports = {
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "prettier/prettier" : [
        "error",
        {
            "trailingComma": "es5",
            "singleQuote": true,
            "printWidth": 120
        }
    ],
    "plugins": [
        "prettier"
    ]
};
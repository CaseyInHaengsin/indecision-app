//You have to communicate where entry point is and then the output file

const path = require('path');



module.exports = {
    entry: "./src/app.js",
    "output": {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
}
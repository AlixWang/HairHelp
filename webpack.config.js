const path = require('path');

module.exports = {
    mode: "production",
    entry: "./src/app.jsx",
    output: {
        path: path.resolve(__dirname,'build'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    module: {
        rules: [ 
            {
                test: /.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
  ]
    }
}
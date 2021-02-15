const path = require("path")


module.exports = {

    entry: "./src/index.js",
    output: {
        path: path.join(__dirname,"public"),
        filename:'bundle.js'
    },
    
    module: {
        rules: [
            {
                loader:'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
               
            },
            {
                test: /\.scss$/,
                use: [
                      'sass-loader',
                    'sass',
                    'style-loader',
                      'css-loader'
                  
                    
                  
                ]
            }
        ]
            
        
    },


   
devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
     watchOptions: {
        poll: true
    }
  }
}

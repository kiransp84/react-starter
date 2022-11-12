const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'src/index.js'),
    output :{
        filename: 'bundle.js',
        path : path.resolve(__dirname,'dist')
    },
    devtool : 'source-map',
    mode:'development',
    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use:['babel-loader']
            }
        ]
    },
    devServer:{
        static: path.join(__dirname, 'public/'),
        devMiddleware : {            
            publicPath : '/dist/'
        },
        port:3000,
        hot:"only"
    }
}
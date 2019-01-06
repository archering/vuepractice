var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry:"./src/js/index.js",
    output:{
        filename:"js/bundle.js",
        publicPath: '/dist/',
        path:path.resolve(__dirname,'./dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:"babel-loader",
                exclude:/node_modules/                            
            },        
            {
                test:/\.vue$/,
                loader:"vue-loader" //简单的这样引入就可以了，vue-loader会把vue单文件直接转成js。
            }
        ]
    },
    resolve:{
        alias: {
            'vue$': 'vue/dist/vue.common.js'
          }    
    },
    optimization:{
        minimizer: true
    }  
}


    module.exports.devtool = '#source-map'

    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ])
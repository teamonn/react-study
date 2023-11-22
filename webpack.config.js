const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        // filename: 'bundle.js',
        //添加hash可以防止文件缓存,每次都会生成4位hash串
        filename: 'bundle.[hash:4].js',
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/'		// 配置引入便宜后的文件的路径，这里配置为服务器下的根路径
    },
    /*----本地起服务的配置代码----*/
    devServer: {
        static: "./dist",      // 本地服务器所加载的页面所在的目录
        // historyApiFallback: true,   // 不跳转
        // inline: true,               // 实时刷新
        port: 3000,                 // 项目所使用的端口
        // open: true,                 // 自动打开浏览器
    },
    /*----编译 html 模板的配置代码----*/
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            hash: true,         //会在打包好的bundle.js后面加上hash串
        })
    ],
    module:{
        rules:[
            {
                test: /\.(jsx|js)$/,
                exclude: /(node_modules)/,  //排除掉nod_modules,优化打包速度
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules)/,  //排除掉nod_modules,优化打包速度
                use: ["style-loader", "css-loader"],
            }
        ]
    }
};

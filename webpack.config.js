var path = require('path');

module.exports = {
    entry: {
        index: './src/main/js/index.js'
    },
    output: {
        path: './grails-app/assets/javascripts',
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src/main/js'),
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
        ]
    },
	sassLoader: {
		includePaths: [path.resolve(__dirname, "src/main/sass")]
	}
};
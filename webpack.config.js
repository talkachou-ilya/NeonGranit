const path = require("path");

module.exports = {
	target: 'web',
    entry: {
        main: "./src/js/index.js",
    },

    output: {
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },
	//
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {rh
    //             vendor: {
    //                 test: /node_modules/,
    //                 chunks: "initial",
    //                 name: "vendor",
    //                 enforce: false
    //             }
    //         }
    //     }
    // },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "node_modules"),
                use: {
                    loader: require.resolve("babel-loader"),
                    query: {
                        presets: [
                            ["@babel/preset-env", { modules: 'commonjs' }]
                        ]
                    }
                }
            }
        ]
    },

	resolveLoader: {
		modules: [
			path.join(__dirname, 'node_modules')
		]
	},

    resolve: {
		modules: [
			path.join(__dirname, 'node_modules')
		],
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules"),
            "%node_libs%": path.resolve(__dirname, "node_modules/")
        },
		extensions: ['.js']
    },
    node: {
		console : true,
		'fs': 'empty'
	}
};
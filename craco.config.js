// const CracoAntDesignPlugin = require('craco-antd');
const path = require('path');
const childProcess = require('child_process');
const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
// import or custom memory modification plugin
const CracoForkTSCheckerPlugin = require('./craco-fork-ts-checker-plugin');

const commitHash = childProcess.execSync('git rev-parse --short HEAD').toString().trim();

const isProd = process ? process.env.NODE_ENV === 'production' : false;

module.exports = {
    eslint: {
        // currently disabled for build, because too much errors
        enable: true,
    },
    webpack: {
        plugins: [
            new webpack.DefinePlugin({
                __COMMIT_HASH__: JSON.stringify(commitHash),
            }),
            isProd && new CompressionPlugin(),
        ].filter(Boolean),
        alias: {
            '@': path.resolve(__dirname, 'src/'),       
            '@components': path.resolve(__dirname, 'src/components'),
            '@mixins': path.resolve(__dirname, 'src/Styles'),
            '@variables': path.resolve(__dirname, 'src/Styles'),
           
        },  
        configure: {
            resolve: {
                fallback: {
                    path: require.resolve('path-browserify'),
                    crypto: require.resolve('crypto-browserify'),
                    buffer: require.resolve('buffer'),
                    stream: require.resolve("stream-browserify"),
                },
            },
        },
    },
    // devServer: (devServerConfig) => {
        //previous config with local server
        // devServerConfig.proxy = {
        //     'http://localhost:5002/api': {
        //         target: 'https://localhost:5001',
        //         changeOrigin: true,
        //         secure: false,
        //         logLevel: 'debug',
        //     },
        // };
        // devServerConfig.proxy = {
        //     'http://localhost:3000/api': {
        //         target: 'https://app-sg-ea-prod-archon-prod-service.azurewebsites.net',
        //         changeOrigin: true,
        //         secure: false,
        //         logLevel: 'debug',
        //     },
        // };
        // return devServerConfig;
    // },
    plugins: [
        {
            plugin: CracoForkTSCheckerPlugin,
            options: {
                memoryLimit: 6144 // set memory usage in MB, in this example 6GB
            },
        },
    ],
};

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/backend.js',
    output: {
        // Requires absolute path
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
};

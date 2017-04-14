const loaderMerge = require('neutrino-middleware-loader-merge');

module.exports = (neutrino) => {
    neutrino.use(loaderMerge('compile', 'babel'), {
        presets: [require.resolve('babel-preset-stage-0')]
    });
}

const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    //publicPath: '././',
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            new StyleLintPlugin({
                files: ['**/*.{vue,scss}'],
            }),
        ],
    },
    chainWebpack: (config) => {
        // setup svg sprites
        const svgRule = config.module.rule('svg');
        svgRule.uses.clear();
        svgRule
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .end()
            .use('svgo-loader')
            .loader('svgo-loader');
    },
    css: {
        loaderOptions: {
            sass: {
                data: `
                    @import "@/styles/core/_variables.scss";
                    @import "@/styles/core/_mixins.scss";
                `,
            },
        },
    },
};

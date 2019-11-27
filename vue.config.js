const StyleLintPlugin = require('stylelint-webpack-plugin')

module.exports = {
    lintOnSave: true,
    publicPath: './',
    chainWebpack: config => {
        config
            .plugin('stylelint')
            .use(StyleLintPlugin)
            .tap(args => {
                return [
                    {
                        files: ['src/**/*.{vue,htm,html,css,sss,less,scss,sass}']
                    }
                ]
            })
    }
}

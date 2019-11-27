module.exports = {
    "processor": [
        [
            "stylelint-processor-arbitrary-tags", {
                startTag: '[^`\'"]<style[\\s\\S]*?>',
                endTag: '</\\s*?style>',
            }
        ]
    ],
    "rules": {
        "block-no-empty": true,
        "color-no-invalid-hex": true,
        "comment-empty-line-before": ["always", {
            "ignore": ["stylelint-commands", "after-comment"]
        }],
        "declaration-colon-space-after": "always",
        "indentation": [4, {
            "except": ["value"]
        }],
        "max-empty-lines": 2,
        "rule-empty-line-before": ["always", {
            "except": ["first-nested"],
            "ignore": ["after-comment"]
        }],
        "declaration-block-semicolon-space-before": ["never"],
        "declaration-block-single-line-max-declarations": [1],
        "unit-whitelist": ["vw", "vh", "em", "rem", "%", "px", "ms", "s", "deg"]
    },
    "ignoreFiles": [
        "node_modules/normalize.css/normalize.css",
        "**/iconfont.css",
        ".stylelintrc"
    ]
}

module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true,
    },
    extends: ['eslint:recommended', 'prettier'],
    rules: {
        'comma-spacing': [2, { before: false, after: true }],
        indent: ['warn', 4],
        semi: ['warn', 'never'],
        quotes: ['error', 'single'],
        'eol-last': ['error', 'always'],
        'space-before-function-paren': [
            'warn',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'ignore',
            },
        ],
        'operator-linebreak': 'warn',
        'no-const-assign': 'warn',
        'no-this-before-super': 'warn',
        'no-undef': 'warn',
        'no-unreachable': 'warn',
        'constructor-super': 'warn',
        'valid-typeof': 'warn',
        'space-before-blocks': 'warn',
        'keyword-spacing': 'warn',
        'space-in-parens': 'warn',
        camelcase: 0,
        'no-console': 'warn',
        'require-atomic-updates': 'warn',
        'no-multiple-empty-lines': ['warn', { max: 2 }],
        'no-prototype-builtins': 'warn',
        'no-async-promise-executor': 'warn',
        'no-multi-spaces': 'error',
        'no-trailing-spaces': 'error',
    },
    globals: {
        $nuxt: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
}

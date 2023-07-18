const WARNING = 'warn';
const ERROR = 'error';

module.exports = {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:svelte/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        extraFileExtensions: ['.svelte']
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    overrides: [
        {
            files: ['*.svelte'],
            parser: 'svelte-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser'
            }
        }
    ],
    rules: {
        eqeqeq: [ERROR],
        camelcase: [ERROR, { properties: 'always' }],
        curly: [ERROR, 'all'],
        'no-var': [WARNING],
        'prefer-const': [WARNING],
        'prefer-regex-literals': [WARNING],
        'prefer-template': [ERROR],
        'spaced-comment': [ERROR, 'always'],
        'arrow-parens': [ERROR, 'always'],
        'arrow-spacing': [
            ERROR,
            {
                before: true,
                after: true
            }
        ],
        'block-spacing': [ERROR, 'always'],
        'brace-style': [ERROR, '1tbs'],
        'comma-dangle': [ERROR, 'never'],
        'function-call-argument-newline': [WARNING, 'consistent'],
        'max-len': [ERROR, { code: 100 }],
        'padded-blocks': [ERROR, 'never'],
        quotes: [ERROR, 'single'],
        semi: [ERROR, 'always']
    }
};

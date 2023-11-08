module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        parser: '@typescript-eslint/parser',
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:nuxt/recommended',
        'plugin:vue/vue3-recommended',
    ],
    plugins:[
        '@typescript-eslint'
    ],
    rules: {
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        indent: [2, 4],
        'comma-dangle': ['error', 'only-multiline'],
        'vue/no-v-html': 'off',
        'vue/html-indent': ['error', 4],
        'node/no-path-concat': 'off',
        'vue/html-self-closing': ['error', {
            html: {
                void: 'any',
                normal: 'any',
                component: 'any'
            },
            svg: 'any',
            math: 'any'
        }],
        'vue/multi-word-component-names': 'off',
        'vue/script-setup-no-uses-vars': 'off',
        'vue/max-attributes-per-line': ['error', {
            'singleline': {
                'max': 2
            },      
        }],
        'vue/max-attributes-per-line': ['error', {
            'singleline': {
                'max': 6
            },      
            'multiline': {
                'max': 1
            }
        }]
    },
};

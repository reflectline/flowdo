import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

import { defineConfig, globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'

export default defineConfig([
    globalIgnores(['dist']),

    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            import: importPlugin,
        },
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,

        ],
        rules: {
            quotes: ['error', 'single', { avoidEscape: true }],
            'no-multi-spaces': 'off',
            'no-multiple-empty-lines': 'off',
            'react/jsx-tag-spacing': 'off',

            'react/jsx-self-closing-comp': 'off',
            '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/consistent-type-imports': 'error',

            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',

            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    ts: 'never',
                    tsx: 'never',
                    js: 'never',
                    jsx: 'never',
                },
            ],
        },
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import/resolver': {
                typescript: {},
            },
        },
    },
])

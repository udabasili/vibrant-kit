module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	plugins: ['prettier', 'react', '@typescript-eslint'],
	extends: [
		'plugin:react/recommended',
		'eslint:recommended',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
		'plugin:jsx-a11y/recommended',
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	overrides: [
		{
			files: ['.ts', '.tsx'],
			parserOptions: {
				parser: '@typescript-eslint/parser',
				project: './tsconfig.json',
			},
		},
	],
	rules: {
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
				'newlines-between': 'always',
				alphabetize: { order: 'asc', caseInsensitive: true },
			},
		],
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-unused-vars': 'warn',
		'import/default': 'off',
		'react/no-unknown-property': [0],
		'import/no-named-as-default-member': 'off',
		'import/no-named-as-default': 'off',
	},
	settings: {
		'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
		'import/resolver': {
			typescript: {},
		},
	},
};

module.exports = {
	extends: ['plugin:react/recommended', 'prettier', 'prettier/react'],
	env: { browser: true },
	parserOptions: {
		ecmaFeatures: { jsx: true },
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['react', 'react-hooks'],
	rules: {
		// 'react/prefer-stateless-function': 2,
		'react/jsx-boolean-value': 2,
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.tsx'] }],
		'react/jsx-handler-names': 2,
		'react/prefer-es6-class': [2, 'always'],

		'react-hooks/rules-of-hooks': 'error',
		'react/prop-types': 'off',
	},
}

import babel from '@rollup/plugin-babel'

export default {
	external: ['prettier/parser-html', 'prettier/parser-flow', 'prettier/parser-babel'],
	input: 'src/index.js',
	output: {
		file: './index.js',
		format: 'cjs'
	},
	sourceMap: 'inline',
	plugins: [
		babel({
			exclude: 'node_modules/**',
			presets: [['@babel/preset-env', { modules: false }]]
		})
	]
}

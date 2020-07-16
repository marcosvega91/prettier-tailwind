import babel from '@rollup/plugin-babel'
import copy from 'rollup-plugin-copy'

export default {
	external: ['prettier/parser-html', 'prettier/parser-flow', 'prettier/parser-babel'],
	input: 'src/index.js',
	output: {
		file: './dist/index.js',
		format: 'cjs'
	},
	sourceMap: 'inline',
	plugins: [
		copy({
			targets: [
				{ src: 'src/sorter.json', dest: 'dist/' },
				{ src: 'src/regex.json', dest: 'dist/' }
			]
		}),
		babel({
			exclude: 'node_modules/**',
			presets: [['@babel/preset-env', { modules: false }]]
		})
	]
}

import prettierParserHTML from 'prettier/parser-html'
import prettierParserFlow from 'prettier/parser-flow'
import prettierParserTypescript from 'prettier/parser-typescript'
import prettierParserBabel from 'prettier/parser-babel'
import { getParse } from './parser'
import { options } from './options'

const languages = [
	{
		name: 'Tailwind JS/JSX',
		extensions: ['.jsx', '.js'],
		parsers: ['flow']
	},
	{
		name: 'Tailwind TS/TSX',
		extensions: ['.tsx', '.ts'],
		parsers: ['typescript']
	},
	{
		name: 'Tailwind HTML',
		extensions: ['.html'],
		parsers: ['html']
	},
	{
		name: 'Tailwind Vue',
		extensions: ['.vue'],
		parsers: ['vue']
	}
]
const parsers = {
	html: {
		...prettierParserHTML.parsers.html,
		parse: getParse('html', prettierParserHTML.parsers.html.parse)
	},
	flow: {
		...prettierParserFlow.parsers.flow,
		parse: getParse('javascriptreact', prettierParserFlow.parsers.flow.parse)
	},
	typescript: {
		...prettierParserTypescript.parsers.typescript,
		parse: getParse('typescriptreact', prettierParserTypescript.parsers.typescript.parse)
	},
	babel: {
		...prettierParserBabel.parsers.babel,
		parse: getParse('javascriptreact', prettierParserBabel.parsers.babel.parse)
	},
	vue: {
		...prettierParserHTML.parsers.vue,
		parse: getParse('html', prettierParserHTML.parsers.vue.parse)
	}
}

const plugin = {
	languages,
	parsers,
	options
}
export default plugin

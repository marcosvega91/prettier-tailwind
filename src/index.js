import prettierParserHTML from 'prettier/parser-html'
import prettierParserFlow from 'prettier/parser-flow'
import prettierParserBabel from 'prettier/parser-babel'
import parserHtml from './parsers/parserHtml'
import parserJSX from './parsers/parserJSX'
import { options } from './options'

const languages = [
	{
		name: 'Tailwind JS/JSX',
		extensions: ['.jsx', '.js'],
		parsers: ['flow']
	},
	{
		name: 'Tailwind HTML',
		extensions: ['.html'],
		parsers: ['html']
	}
]
const parsers = {
	html: {
		...prettierParserHTML.parsers.html,
		parse: parserHtml.parse
	},
	flow: {
		...prettierParserFlow.parsers.flow,
		parse: parserJSX.parse
	},
	babel: {
		...prettierParserBabel.parsers.babel,
		parse: parserJSX.parse
	}
}

const plugin = {
	languages,
	parsers,
	options
}
module.exports = plugin

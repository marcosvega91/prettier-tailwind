import prettierParserHTML from 'prettier/parser-html'
import prettierParserFlow from 'prettier/parser-flow'
import parserHtml from './parsers/parserHtml'
import parserJSX from './parsers/parserJSX'

const languages = [
	{
		name: 'Tailwind JSX',
		extensions: ['.jsx', '.js'],
		parsers: ['tailwind-jsx']
	},
	{
		name: 'Tailwind HTML',
		extensions: ['.html'],
		parsers: ['tailwind-html']
	}
]

const parsers = {
	'tailwind-html': {
		...prettierParserHTML.parsers.html,
		parse: parserHtml.parse
	},
	'tailwind-jsx': {
		...prettierParserFlow.parsers.flow,
		parse: parserJSX.parse
	}
}

module.exports = {
	languages,
	parsers
}

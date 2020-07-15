import prettierParserHTML from 'prettier/parser-html'
import { sortClassInText } from '../utils/sort'
import { classRegex } from '../options'

export function parse(text, parsers, options) {
	const classWrapperRegex = new RegExp(classRegex['html'], 'gi')
	const sortedText = sortClassInText(text, classWrapperRegex)
	const result = prettierParserHTML.parsers.html.parse(sortedText, parsers, options)

	return result
}

export default {
	parse
}

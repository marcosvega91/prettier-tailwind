import prettierParserFlow from 'prettier/parser-flow'
import { classRegex } from '../options'
import { sortClassInText } from '../utils/sort'

export function parse(text, parsers, options) {
	const classWrapperRegex = new RegExp(classRegex['javascriptreact'], 'gi')
	const sortedText = sortClassInText(text, classWrapperRegex)
	const result = prettierParserFlow.parsers.flow.parse(sortedText, parsers, options)
	return result
}

export default {
	parse
}

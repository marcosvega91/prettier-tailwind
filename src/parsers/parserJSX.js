import prettierParserFlow from 'prettier/parser-flow'
import { sortClassInText } from '../utils/sort'
import fs from 'fs'

export function parse(text, parsers, options) {
	const classRegex = JSON.parse(fs.readFileSync(options.classRegex, 'utf8'))
	const classSorter = JSON.parse(fs.readFileSync(options.classSorter, 'utf8'))

	const classWrapperRegex = new RegExp(classRegex['javascriptreact'], 'gi')
	const sortedText = sortClassInText(text, classWrapperRegex, classSorter, {
		removeDuplicates: options.removeDuplicatesClasses
	})
	const result = prettierParserFlow.parsers.flow.parse(sortedText, parsers, options)
	return result
}

export default {
	parse
}

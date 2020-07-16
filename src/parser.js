import { sortClassInText } from './utils/sort'
import fs from 'fs'

export function getParse(language, defaultParse) {
	return (text, parsers, options) => {
		const classRegex = JSON.parse(fs.readFileSync(options.classRegex, 'utf8'))
		const classSorter = JSON.parse(fs.readFileSync(options.classSorter, 'utf8'))

		const classWrapperRegex = new RegExp(classRegex[language], 'gi')
		const sortedText = sortClassInText(text, classWrapperRegex, classSorter, {
			removeDuplicates: options.removeDuplicatesClasses
		})
		const result = defaultParse(sortedText, parsers, options)

		return result
	}
}

export default {
	getParse
}

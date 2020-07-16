import { sortClassInText } from './utils/sort'
import fs from 'fs'

export function getParse(language, defaultParse) {
	return (text, parsers, options) => {
		let sortedText = text
		if (fs.existsSync(options.classRegex) && fs.existsSync(options.classSorter)) {
			const classRegex = JSON.parse(fs.readFileSync(options.classRegex, 'utf8'))
			const classSorter = JSON.parse(fs.readFileSync(options.classSorter, 'utf8'))

			if (language in classRegex && Array.isArray(classSorter)) {
				const classWrapperRegex = new RegExp(classRegex[language], 'gi')
				sortedText = sortClassInText(text, classWrapperRegex, classSorter, {
					removeDuplicates: options.removeDuplicatesClasses
				})
			}
		}

		const result = defaultParse(sortedText, parsers, options)

		return result
	}
}

export default {
	getParse
}

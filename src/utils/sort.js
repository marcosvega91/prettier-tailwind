const sortClassArray = (classArray, sortOrder) => [
	...classArray.filter((el) => sortOrder.indexOf(el) === -1),
	...classArray
		.filter((el) => sortOrder.indexOf(el) !== -1)
		.sort((a, b) => sortOrder.indexOf(a) - sortOrder.indexOf(b))
]

const removeDuplicates = (classArray) => [...new Set(classArray)]

export const sortClassString = (classString, sortOrder, { shouldRemoveDuplicates = false } = {}) => {
	let classArray = classString.split(/\s+/g)

	if (shouldRemoveDuplicates) {
		classArray = removeDuplicates(classArray)
	}

	classArray = sortClassArray(classArray, sortOrder)
	return classArray.join(' ')
}

export const sortClassInText = (text, regex, classSorter, { removeDuplicates = true } = {}) => {
	let classWrapper
	while ((classWrapper = regex.exec(text)) !== null) {
		const wrapperMatch = classWrapper[0]
		const valueMatchIndex = classWrapper.findIndex((match, idx) => idx !== 0 && match)
		const valueMatch = classWrapper[valueMatchIndex]

		const startPosition = classWrapper.index + wrapperMatch.lastIndexOf(valueMatch)
		const endPosition = startPosition + valueMatch.length

		const sortedClasses = sortClassString(text.substring(startPosition, endPosition), classSorter, {
			shouldRemoveDuplicates: removeDuplicates
		})

		const beforeClass = text.substring(0, startPosition)
		const afterClass = text.substring(endPosition)
		text = `${beforeClass}${sortedClasses}${afterClass}`
	}

	return text
}

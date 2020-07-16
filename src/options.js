export const options = {
	removeDuplicatesClasses: {
		type: 'boolean',
		default: true,
		description: 'remove duplicates classes'
	},
	classRegex: {
		type: 'path',
		default: `${__dirname}/regex.json`,
		description: 'regex expression to find classes'
	},
	classSorter: {
		type: 'path',
		default: `${__dirname}/sorter.json`,
		description: 'order of the classes'
	}
}

export default options

import prettier from 'prettier'
import plugin from '../src/'
import fs from 'fs'
import prettierOptions from '../.prettierrc.json'

function testOnLanguage(identifier, language, parser, options = {}) {
	const unformatted = fs.readFileSync(`${__dirname}/mocks/${parser}/${identifier}_unformatted.${language}`, 'utf8')
	const formatted = fs.readFileSync(`${__dirname}/mocks/${parser}/${identifier}_formatted.${language}`, 'utf8')
	const output = prettier.format(unformatted, {
		parser,
		plugins: [plugin],
		...prettierOptions,
		...options
	})
	expect(output).toEqual(formatted)
}

it('should sort classes correcly', () => {
	testOnLanguage('default_behaviour', 'html', 'html')
	testOnLanguage('default_behaviour', 'js', 'babel')
	testOnLanguage('default_behaviour', 'js', 'flow')
})

it('should remove duplicate classes by default', () => {
	testOnLanguage('remove_duplicate', 'html', 'html')
	testOnLanguage('remove_duplicate', 'js', 'babel')
	testOnLanguage('remove_duplicate', 'js', 'flow')
})

it('should not duplicate classes when are unknown', () => {
	testOnLanguage('no_duplicate_unknown', 'html', 'html')
	testOnLanguage('no_duplicate_unknown', 'js', 'babel')
	testOnLanguage('no_duplicate_unknown', 'js', 'flow')
})

it('should not remove duplicates if options i set to false', () => {
	testOnLanguage('no_remove_duplicate', 'html', 'html', {
		removeDuplicatesClasses: false
	})
	testOnLanguage('no_remove_duplicate', 'js', 'babel', {
		removeDuplicatesClasses: false
	})
	testOnLanguage('no_remove_duplicate', 'js', 'flow', {
		removeDuplicatesClasses: false
	})
})

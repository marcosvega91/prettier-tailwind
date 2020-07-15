import prettier from 'prettier'
import plugin from '../../src/'

it('should sort classes correcly', () => {
	const unformatted = `
	<div class="mx-auto flex justify-between items-center max-w-6xl h-16"></div>
	`
	const output = prettier.format(unformatted, {
		parser: 'tailwind-html',
		plugins: [plugin]
	})
	expect(output).toMatchInlineSnapshot(`
		"<div class=\\"flex items-center justify-between h-16 max-w-6xl mx-auto\\"></div>
		"
	`)
})

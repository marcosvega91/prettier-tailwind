import prettier from 'prettier'
import plugin from '../../src/'

it('should sort classes correcly', () => {
	const unformatted = `
    function App(){

      render (
        <div className="mx-auto flex justify-between items-center max-w-6xl h-16"></div>
      )

    }
	`
	const output = prettier.format(unformatted, {
		parser: 'tailwind-jsx',
		plugins: [plugin]
	})
	expect(output).toMatchInlineSnapshot(`
		"function App() {
		  render(
		    <div className=\\"flex items-center justify-between h-16 max-w-6xl mx-auto\\"></div>
		  );
		}
		"
	`)
})

it('should remove duplicate classes', () => {
	const unformatted = `
    function App(){

      render (
        <div className="mx-auto h-16 ml-0 ml-0"></div>
      )

    }
	`
	const output = prettier.format(unformatted, {
		parser: 'tailwind-jsx',
		plugins: [plugin]
	})
	expect(output).toMatchInlineSnapshot(`
		"function App() {
		  render(<div className=\\"h-16 mx-auto ml-0\\"></div>);
		}
		"
	`)
})

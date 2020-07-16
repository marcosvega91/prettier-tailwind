module.exports = {
	testEnvironment: 'node',
	rootDir: '.',
	testMatch: ['<rootDir>/test/**/*.js'],
	moduleFileExtensions: ['js'],
	collectCoverage: false,
	collectCoverageFrom: ['src/**/*.js'],
	transformIgnorePatterns: ['<rootDir>/test/mocks'],
	testPathIgnorePatterns: ['<rootDir>/test/mocks']
}

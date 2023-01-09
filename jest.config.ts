export default {
	moduleFileExtensions: ['ts', 'tsx', 'js'],
	testPathIgnorePatterns: ['node_modules/'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	testMatch: ['**/*.test.(ts|tsx)'],
	roots: ['<rootDir>/src'],
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'@/(.*)': '<rootDir>/src/$1',
		// Mocks out all these file formats when tests are run.
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'identity-obj-proxy',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	testEnvironment: 'jest-environment-jsdom',
};

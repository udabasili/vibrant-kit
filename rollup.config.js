import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';

const packageJson = require('./package.json');

export default {
	input: 'src/index.ts',
	output: [
		{
			file: packageJson.main,
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: packageJson.module,
			format: 'esm',
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve({
			browser: true,
		}),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true, exclude: ['**/__tests__', '**/*.test.tsx', '**/*.test.ts'] }),
		postcss(),
		image(),
		copy({
			targets: [
				{
					src: 'src/index.css',
					dest: 'build',
					rename: 'index.css',
				},
			],
		}),
	],
};

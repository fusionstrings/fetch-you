import babelRollup from 'rollup-plugin-babel';
import jspmRollup from 'rollup-plugin-jspm';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

const MODE = process.env.NODE_ENV;
const DEV = MODE === 'development';

export default [
	{
		input: [
			'./lib/main.mjs',
			'./lib/fetch-you.mjs',
			'./lib/fetch-you-ducks.mjs'
		],
		plugins: [
			replace({
				'process.env.NODE_ENV': JSON.stringify(MODE || 'production')
			}),
			// babelRollup({
			// 	exclude: [
			// 		'node_modules/@babel/**'
			// 		// 'node_modules/core-js/**',
			// 		// 'node_modules/regenerator-runtime/**',
			// 		// 'node_modules/whatwg-fetch/**/*.*'
			// 	]
			// }),
			jspmRollup()
			// !DEV && terser()
		],
		output: [
			{
				dir: 'dist/system',
				format: 'system',
				name: 'fetch-you',
				sourcemap: true
			},
			{
				dir: 'dist/cjs',
				format: 'cjs',
				name: 'fetch-you',
				sourcemap: true
			},
			{
				dir: 'dist/esm',
				format: 'esm',
				sourcemap: true
			}
		]
	}
];

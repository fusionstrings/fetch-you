import jspmRollup from 'rollup-plugin-jspm';
import { terser } from 'rollup-plugin-terser';
import replace from 'rollup-plugin-replace';

const MODE = process.env.NODE_ENV;
const DEV = MODE === 'development';

export default [
	{
		input: [
			'./lib/browser.mjs',
			'./lib/fetch-you-browser.mjs',
			'./lib/fetch-you-ducks-browser.mjs'
		],
		plugins: [
			replace({
				'process.env.NODE_ENV': JSON.stringify(
					MODE || 'production'
				)
			}),
			// babelRollup({ exclude: ['node_modules/@babel/**', 'node_modules/core-js/**', 'node_modules/regenerator-runtime/**'] }),
			jspmRollup(),
			// !DEV && terser()
		],
		output: [
			{
				dir: 'dist/browser/system',
				format: 'system',
				name: 'fetch-you',
				sourcemap: true
			},
			{
				dir: 'dist/browser/esm',
				format: 'esm',
				sourcemap: true
			}
		]
	},
	{
		input: [
			'./lib/main.mjs',
			'./lib/fetch-you-server.mjs',
			'./lib/fetch-you-ducks-server.mjs'
		],
		plugins: [
			replace({
				'process.env.NODE_ENV': JSON.stringify(
					MODE || 'production'
				)
			}),
			// babelRollup({ exclude: ['node_modules/@babel/**', 'node_modules/core-js/**', 'node_modules/regenerator-runtime/**'] }),
			jspmRollup({node: true}),
			// !DEV && terser()
		],
		output: [
			{
				dir: 'dist/server/cjs',
				format: 'cjs',
				name: 'fetch-you',
				sourcemap: true
			},
			{
				dir: 'dist/server/esm',
				format: 'esm',
				sourcemap: true
			}
		]
	}
];

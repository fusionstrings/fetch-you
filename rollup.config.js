import babelRollup from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import minify from 'rollup-plugin-babel-minify';

export default [
	{
		input: ['./lib/fetch-you.js', './lib/fetch-you-ducks.js'],
		plugins: [
			resolve({ jsnext: true, browser: true }),
			commonjs(),
			babelRollup({ exclude: 'node_modules/**' }),
			replace({
				'process.env.NODE_ENV': JSON.stringify(
					process.env.NODE_ENV || 'production'
				)
			}),
			process.env.NODE_ENV === 'production' && minify()
		],
		experimentalDynamicImport: true,
		experimentalCodeSplitting: true,
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
				dir: 'dist/es',
				format: 'es',
				sourcemap: true
			}
		]
	}
];

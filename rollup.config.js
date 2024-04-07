// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
	input: 'index.ts',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
  plugins: [
		json(),
		commonjs(),
		nodeResolve({
			moduleDirectories: ['node_modules'],
			// extensions: ['.js', '.json', '.ts', '.tsx']
		}),
		alias({
      entries: [
        { find: '@', replacement: './src' },
      ]
    }),
		typescript({
			tsconfig: './tsconfig.json',
			exclude: ['node_modules'],
		}),
		
	]
};
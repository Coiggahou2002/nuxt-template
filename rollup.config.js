// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
import { nodeResolve } from '@rollup/plugin-node-resolve';
export default {
	input: 'index.ts',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
  plugins: [
		nodeResolve(),
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
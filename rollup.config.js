// rollup.config.js
import typescript from '@rollup/plugin-typescript';
export default {
	input: 'index.ts',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
  plugins: [typescript()]
};
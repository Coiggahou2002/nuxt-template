// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import alias from '@rollup/plugin-alias';
export default {
	input: 'index.ts',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
  plugins: [
		typescript({
			tsconfig: './tsconfig.json',
			exclude: ['node_modules'],
		}),
		alias({
      entries: [
        { find: '@', replacement: './src' },
      ]
    })
	]
};
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    emptyOutDir: true /** Clears the output directory before building. **/,
    lib: {
      entry: ['src/index.js'] /** Specifies the entry file for the library. */,
      formats: ['es', 'cjs'] /** Specifies the output formats (CommonJS and ES modules). */,
    },
    rollupOptions: {
      external: [
        'eslint-config-prettier',
        'eslint-plugin-unused-imports',
        '@typescript-eslint/eslint-plugin',
        'eslint-plugin-promise',
        'eslint-plugin-perfectionist',
        'eslint-plugin-react-hooks',
        '@typescript-eslint/parser',
        'globals',
        '@eslint/eslintrc',
        'url',
        'path',
      ],
    },
  },

  plugins: [dts() /** Plugin for generating TypeScript declaration files (d.ts). */,],
})

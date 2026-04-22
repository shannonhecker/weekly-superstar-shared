import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/tokens/index.ts',
    'src/themes.ts',
    'src/week.ts',
    'src/auth-errors.ts',
    'src/codes.ts',
    'src/achievements.ts',
  ],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  target: 'es2022',
  splitting: false,
})

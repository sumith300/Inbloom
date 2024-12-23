// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react'
import resolve from '@rollup/plugin-node-resolve';

export default defineConfig({
  plugins: [react(),resolve()],
extensions: ['.js', '.jsx', '.ts', '.tsx'],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
});

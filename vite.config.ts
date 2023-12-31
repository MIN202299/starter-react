import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import AutoImport from 'unplugin-auto-import/vite'

// unocss
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src/assets')}/`,
    },
  },
  plugins: [
    react(),
    AutoImport({
      imports: [
        'react',
      ],
      dts: 'auto-imports.d.ts',
    }),
    Unocss(),
  ],
})

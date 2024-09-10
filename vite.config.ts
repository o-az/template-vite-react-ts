import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import reactPlugin from '@vitejs/plugin-react-swc'

export default defineConfig(config => {
  const {
    PORT = process.env.PORT,
    NODE_ENV = process.env.NODE_ENV,
    NODE_OPTIONS = process.env.NODE_OPTIONS
  } = loadEnv(config.mode, process.cwd(), '')

  console.info(`Running in ${NODE_ENV} mode`)

  return {
    server: {
      port: Number(PORT)
    },
    plugins: [
      reactPlugin({ tsDecorators: true }),
      tailwindcss(),
      tsconfigPaths()
    ],
    test: {
      silent: NODE_OPTIONS?.includes('--no-warnings')
    }
  }
})

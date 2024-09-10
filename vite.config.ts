import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

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
    plugins: [react({ tsDecorators: true }), tailwindcss(), tsconfigPaths()],
    test: {
      silent: NODE_OPTIONS?.includes('--no-warnings')
    }
  }
})

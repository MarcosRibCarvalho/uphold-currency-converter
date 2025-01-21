import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import viteTsconfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxImportSource: '@emotion/react'
		}),
		viteTsconfigPaths()
	],
	server: {
		proxy: {
			'/api': {
				target: 'https://api.uphold.com/v0/',
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
})

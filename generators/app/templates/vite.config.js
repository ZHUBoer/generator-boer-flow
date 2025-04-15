import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,  // 与Feflow不同的端口
        proxy: {
            '/api': {
                target: 'http://a.b.com',
                changeOrigin: true
            }
        }
    },
    build: {
        outDir: 'dist-vite',  // 与Feflow不同的输出目录
        assetsInlineLimit: 4096
    }
})
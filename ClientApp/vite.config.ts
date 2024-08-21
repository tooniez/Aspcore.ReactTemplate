import {defineConfig, loadEnv, UserConfigExport} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd(), '')

    const config: UserConfigExport = {
        plugins: [react()],
        build: {
            sourcemap: true
        },
        server: {
            port: parseInt(env['PORT']),
            https: {
                cert: env['SSL_CRT_FILE'],
                key: env['SSL_KEY_FILE']
            },
            proxy: {
                '/api': {target: 'https://localhost:7193', secure: false},
                '/swagger': {target: 'https://localhost:7193', secure: false},
            }
        }
    }

    return config;
})

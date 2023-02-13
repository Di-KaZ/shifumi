import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import {VitePWA} from 'vite-plugin-pwa'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte(), VitePWA({
        registerType: 'autoUpdate',
        manifest: {
            "theme_color": "#f6cc35",
            "background_color": "#f69435",
            "display": "fullscreen",
            "scope": "/",
            "start_url": "/",
            "name": "Shifumi",
            "short_name": "Shifumi",
            "description": "play shifumi",
            "icons": [
                {
                    "src": "/icon-192x192.png",
                    "sizes": "192x192",
                    "type": "image/png"
                },
                {
                    "src": "/icon-256x256.png",
                    "sizes": "256x256",
                    "type": "image/png"
                },
                {
                    "src": "/icon-384x384.png",
                    "sizes": "384x384",
                    "type": "image/png"
                },
                {
                    "src": "/icon-512x512.png",
                    "sizes": "512x512",
                    "type": "image/png"
                }
            ]
        },
        devOptions: {
            enabled: true
        }
    })],
})

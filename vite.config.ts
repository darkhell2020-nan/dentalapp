import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
export default defineConfig({plugins:[VitePWA({registerType:'autoUpdate',includeAssets:['icons/*.svg'],manifest:{name:'DentVisual',short_name:'DentVisual',description:'Clear dental explanations in seconds',theme_color:'#0f766e',background_color:'#f8fafc',display:'standalone',orientation:'any',icons:[{src:'/icons/icon.svg',sizes:'any',type:'image/svg+xml'}]},workbox:{globPatterns:['**/*.{js,css,html,svg,png,ico}']}})],test:{environment:'jsdom',globals:true,setupFiles:'./src/tests/setup.ts'}});

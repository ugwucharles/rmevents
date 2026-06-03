import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// Middleware plugin to serve Decap CMS admin dashboard locally
// Directly sends the file instead of rewriting URL, so Vite's SPA fallback can't intercept it
const adminRoutePlugin = () => ({
  name: 'admin-route',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = req.url ? req.url.split('?')[0] : '';
      if (url === '/admin') {
        res.writeHead(301, { Location: '/admin/' });
        res.end();
        return;
      }
      if (url === '/admin/') {
        try {
          const adminHtml = readFileSync(
            resolve(__dirname, 'public/admin/index.html'),
            'utf-8'
          );
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.statusCode = 200;
          res.end(adminHtml);
        } catch (e) {
          console.error('[admin-route] Could not read public/admin/index.html', e);
          next();
        }
        return;
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), adminRoutePlugin()],
})

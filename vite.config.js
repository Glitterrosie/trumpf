import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function apiDevPlugin() {
  return {
    name: 'api-dev',
    configureServer(server) {
      server.middlewares.use('/api', async (req, res) => {
        /* Load .env.local into process.env */
        const env = loadEnv('development', process.cwd(), '')
        Object.assign(process.env, env)

        /* Route to the right handler */
        const route = (req.url ?? '').split('?')[0].replace(/^\//, '')
        const moduleMap = {
          'chat':      new URL('./api/chat.js',      import.meta.url),
          'questions': new URL('./api/questions.js', import.meta.url),
          'analytics': new URL('./api/analytics.js', import.meta.url),
        }

        const moduleUrl = moduleMap[route]
        if (!moduleUrl) {
          res.statusCode = 404
          res.end('API route not found')
          return
        }

        /* Add Express-compatible helpers */
        res.status = (code) => { res.statusCode = code; return res }
        res.json   = (data) => {
          if (!res.headersSent) res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(data))
        }
        res.send = (data) => res.end(String(data))

        /* Parse JSON body for POST requests */
        if (req.method === 'POST' || req.method === 'PUT') {
          await new Promise((resolve) => {
            let raw = ''
            req.on('data', (chunk) => { raw += chunk })
            req.on('end', () => {
              try { req.body = JSON.parse(raw) } catch { req.body = {} }
              resolve()
            })
          })
        }

        try {
          const { default: handler } = await import(moduleUrl.href + `?t=${Date.now()}`)
          handler(req, res)
        } catch (err) {
          console.error('[api-dev]', err)
          res.statusCode = 500
          res.json({ error: err.message })
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), apiDevPlugin()],
})

import * as express from 'express'

import config from './config'
import * as Routes from './routes'

const app = express()
app.use(express.json())

const start = async () => {
  // Register all the routes here
  Routes.register(app)

  app.listen(config.port, () => {
    console.debug(`Listening on port: http://localhost:${config.port}`)
  })
}

start()

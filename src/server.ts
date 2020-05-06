import * as bodyParser from 'body-parser'
import * as express from 'express'

import config from './config'

import { DefaultRoutes } from './routes/default'

const app = express()

// tslint:disable-next-line: deprecation
app.use(bodyParser.json())

async function start () {
  // Register all the routes here
  DefaultRoutes.register(app)

  app.listen(config.port, (err: Error) => {
    if (err) {
      throw err
    }
    console.debug(`Listening on port: ${config.port}`)
  })
}

// tslint:disable-next-line
start()

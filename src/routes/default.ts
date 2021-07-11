import * as express from 'express'
import * as iotsReporters from 'io-ts-reporters'

import {
  IHelloRequest,
  HelloRequest,
  parseData,
  isParseError
} from '../lib/types'

import { authenticationMiddleware } from './authorization'

export const DefaultRoutes = {
  register: (app: express.Application) => {
    app.get('/ping', (req, res) => {
      res.sendStatus(200)
    })

    app.post('/hello', authenticationMiddleware, (req, res) => {
      const data = parseData<HelloRequest>(req.body, IHelloRequest)

      if (isParseError(data)) {
        return res.status(400).json({
          errors: iotsReporters.default.report(data)
        })
      }
      return res.json({ message: `Hello, ${data.name}!` })
    })
  }
}

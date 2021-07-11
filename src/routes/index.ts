import * as express from 'express'

import { DefaultRoutes } from './default'

export const register = (app: express.Express) => {
  DefaultRoutes.register(app)
}

import * as express from 'express'

export const DefaultRoutes = {
  register: (app: express.Application) => {
    app.get('/ping', (req, res) => {
      res.sendStatus(200)
    })
  }
}

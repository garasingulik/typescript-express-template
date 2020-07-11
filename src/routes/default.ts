import * as express from 'express'

export const registerDefault = (app: express.Application) => {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'OK' })
  })

  app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'PONG' })
  })
}

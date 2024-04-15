import { Request, Response } from 'express'
import CreatePropertieServer from './CreatePropertieServer'

export function createPropertie(req: Request, res: Response) {
  CreatePropertieServer.create({
    name: 'Casa de Praia',
    description:
      'Casa grande, localizada de frente ao mar! Ideal para suas férias.',
  })
  return res.send()
}

import { Router } from 'express'
import { SpecificationRepository } from '../modules/cars/repositories/SpecificationsRepository'
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService'

export const specificationRoutes = Router()

const specificationsRepository = new SpecificationRepository()

specificationRoutes.post('/', (req, res) => {
  const { name, description } = req.body
  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository,
  )

  createSpecificationService.execute({ name, description })

  return res.status(201).send()
})

import { Router } from 'express'
import { categoryRoutes } from './category.routes'
import { specificationRoutes } from './specification.route'

export const router = Router()
router.use('/categories', categoryRoutes)
router.use('/specifications', specificationRoutes)

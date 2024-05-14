import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'

export const categoryRoutes = Router()

categoryRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

categoryRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res)
})

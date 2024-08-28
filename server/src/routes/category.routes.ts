import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'
import multer from 'multer'
import { importCategoryController } from '../modules/cars/useCases/importCategory'

export const categoryRoutes = Router()

const upload = multer({
  dest: './tmp',
})

categoryRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

categoryRoutes.get('/', async (req, res) => {
  return await listCategoriesController.handle(req, res)
})

categoryRoutes.post('/import', upload.single('file'), (req, res) => {
  return importCategoryController.handle(req, res)
})

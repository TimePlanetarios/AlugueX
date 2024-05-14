import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'
import multer from 'multer'

export const categoryRoutes = Router()

const upload = multer({
  dest: './tmp',
})

categoryRoutes.post('/', (req, res) => {
  return createCategoryController.handle(req, res)
})

categoryRoutes.get('/', (req, res) => {
  return listCategoriesController.handle(req, res)
})

categoryRoutes.post('/import', upload.single('file'), (req, res) => {
  const { file } = req
  console.log(file)
  return res.send()
})

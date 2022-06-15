import express from 'express'
import articleController from '../controllers/articleController'

const router = express.Router()

router.post('/submit', articleController.submit)
router.get('/get_all', articleController.getAll)

export default router

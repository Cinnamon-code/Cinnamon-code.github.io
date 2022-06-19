import express from 'express'
import articleController from '../controllers/articleController'

const router = express.Router()

router.post('/submit', articleController.submit)
router.get('/get_all', articleController.getAll)
router.get('/get_latest', articleController.getLatest)
router.get('/get/:_id', articleController.get)
router.post('/like')
router.post('/comment')

export default router

import express from 'express'
import likeController from '../controllers/likeController'

const router = express.Router()

router.get('/get', likeController.get)
router.post('/like', likeController.like)
router.post('/dislike', likeController.dislike)

export default router

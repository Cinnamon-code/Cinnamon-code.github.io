import express from 'express'
import postController from '../controllers/postController'

const router = express.Router()

router.post('/upload', postController.upload)

export default router

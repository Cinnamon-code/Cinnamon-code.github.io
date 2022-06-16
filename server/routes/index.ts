import express from 'express'
import article from './article'
import user from './user'

const router = express.Router()

router.use('/article', article)
router.use('/user', user)

export default router

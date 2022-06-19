import express from 'express'
import article from './article'
import user from './user'
import post from './post'
import like from './like'

const router = express.Router()

router.use('/article', article)
router.use('/user', user)
router.use('/post', post)
router.use('/like', like)

export default router

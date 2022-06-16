import express from 'express'
import userController from '../controllers/userController'

const router = express.Router()

router.post('/login', userController.login)
router.post('/register', userController.register)
router.post('/check_username', userController.checkUsername)

export default router

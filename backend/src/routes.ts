import express from 'express'
import { authController } from './controllers/authController'

const router = express.Router()

// @ts-ignore
router.post('/auth/login', authController.login)

export { router }
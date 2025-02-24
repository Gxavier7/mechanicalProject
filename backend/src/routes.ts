// @ts-nocheck
import express from 'express'
import { authController } from './controllers/authController'
import { worksController } from './controllers/worksController'

const router = express.Router()

router.post('/auth/login', authController.login)

router.get('/works', worksController.getAllWorks)
router.get('/works/active', worksController.getActiveServices)

export { router }
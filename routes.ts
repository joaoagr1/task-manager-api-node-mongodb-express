import { Router } from 'express'
import userController from './user-controller'

const routes = Router()
routes.post('/user', userController.create)
routes.get('/user/:id', userController.findByID)



export {
    routes
}
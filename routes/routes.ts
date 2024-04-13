import { Router } from 'express'
import userController from '../controller/user-controller'
import taskController from '../controller/task-controller'
import categoryController from '../controller/category-controller'

const routes = Router()
routes.post('/user', userController.create)
routes.get('/user/:id', userController.findByID)
routes.post('/task', taskController.createTask)
routes.post('/category', categoryController.create.bind(categoryController))
routes.get('/login', userController.userLogin.bind(userController))
routes.get('/task-detail/:id', taskController.findById)
routes.delete('/task-delete/:id', taskController.delete)
routes.get('/task/all-from-user/:id', taskController.getAllByUser)
routes.get('/category/all-from-user/:id', categoryController.getAllCategoryByUser)
routes.delete('/category-delete/:id', categoryController.delete)
routes.put('/task-update', taskController.update)
routes.get('/pending-tasks', taskController.findPendingTasks)
routes.get('/completed-tasks', taskController.findCompletedTasks)
routes.get('/count-tasks/:id', taskController.countAllByUser)
routes.get('/most-recent-task/:id', taskController.findMostRecentTaskByUser)
routes.get('/task-completed-average', taskController.taskCompletedAverage)
routes.get('/group-tasks-by-category/:id', taskController.findByCategory)
routes.get('/most-old-task/:id', taskController.findMostOldTaskByUser)
routes.get('bigger-descption-task', taskController.findBiggestDescription)

export {
    routes
}
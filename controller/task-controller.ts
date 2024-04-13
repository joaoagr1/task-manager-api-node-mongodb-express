import { Response, Request } from 'express'
import TaskService from '../services/task-service'

class TaskController {


    async createTask(req: Request, res: Response) {
        const createdTask = await new TaskService().create(req.body)
        return res.json(createdTask)
    }

    async findById(req: Request, res: Response) {
        const findedTask = await new TaskService().findById(req.params.id)
        return res.json(findedTask);
    }

    async delete(req: Request, res: Response) {
        const deletedTask = await new TaskService().delete(req.params.id)
        return res.json(deletedTask);
    }

    async getAllByUser(req: Request, res: Response) {
        const findedTasks = await new TaskService().findAllByUserId(req.params.id)
        return res.status(200).json(findedTasks);
    }

    async update(req: Request, res: Response) {
        const updatedTask = await new TaskService().update(req.body)
        return res.status(200).json(updatedTask);
    }

    async findByCategory(req: Request, res: Response) {
        const tasksByCategory = await new TaskService().findAllByCategory(req.params.id)
        return res.status(200).json(tasksByCategory)
    }

    async findPendingTasks(req: Request, res: Response) {
        const pendingTasks = await new TaskService().findPendingTasks(req.params.id)
        return res.status(200).json(pendingTasks)
    }

    async findCompletedTasks(req: Request, res: Response) {
        const completedTasks = await new TaskService().findCompletedTasks(req.params.id)
        return res.status(200).json(completedTasks)
    }

    async countAllByUser(req: Request, res: Response) {
        const count = await new TaskService().countAllByUserId(req.params.id)
        return res.status(200).json(count)
    }

    async findMostRecentTaskByUser(req: Request, res: Response) {
        const mostRecentTask = await new TaskService().findMostRecentTaskByUser(req.params.id)
        return res.status(200).json(mostRecentTask)
    }

    async findMostOldTaskByUser(req: Request, res: Response) {
        const mostOldTask = await new TaskService().findMostOldTaskByUser(req.params.id)
        return res.status(200).json(mostOldTask)
    }


    async taskCompletedAverage(req: Request, res: Response) {
        const average = await new TaskService().tasksCompletedAvarege()
        return res.status(200).json(average)
    }

    async groupByCategory(req: Request, res: Response) {
        const group = await new TaskService().groupByCategory()
        return res.status(200).json(group)
    }

    async findBiggestDescription(req: Request, res: Response) {
        const biggestDescription = await new TaskService().findBiggerDescription()
        return res.status(200).json(biggestDescription)
    }




}

export default new TaskController()
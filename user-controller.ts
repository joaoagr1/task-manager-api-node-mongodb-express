import { Request, Response } from 'express'
import UserService from './services/user-service'

class UserController{

    async create(req: Request, res: Response){
        const createdUser = await new UserService().create(req.body)
        return res.json(createdUser);

    } 


}

export default new UserController()
import { Response, Request } from 'express'
import CategoryService from '../services/category-service'

class CategoryController {
    async create(request: Request, response: Response) {

        const createdCategory = await new CategoryService().create(request.body)
        response.json(createdCategory)
    }

    async getAllCategoryByUser(request: Request, response: Response) {
        const categorys = await new CategoryService().findAllCategoryByUser(request.params.id);
        console.log("categorias controller: " + categorys + "teste")
        return response.json(categorys);


    }

    async delete(request: Request, response: Response) {
        const deletedCategory = await new CategoryService().delete(request.params.id)
        response.json(deletedCategory)
    }

    async update(request: Request, response: Response) {
        const updatedCategory = await new CategoryService().update(request.body)
        response.json(updatedCategory)
    }





}

export default new CategoryController()
import Userinterface from "../entity/user"
import { Task } from "../entity/task"
import Category from "../entity/category"
import taskModel from "../entity/task"
import UserService from "../services/user-service";
import CategoryService from "../services/category-service";

export default class TaskService {
    async create(task: Task) {
        const findedResponsibleUser = await new UserService().findById(task.responsibleUser);
        const findedCategory = await new CategoryService().findById(task.category);

        if (!findedCategory) {
            throw new Error('Category not found');
        }


        task.responsibleUser = findedResponsibleUser;
        task.category = findedCategory;

        const createdTask = await taskModel.create(task);
        return createdTask;
    }


    async findBiggerDescription() {
        const findedTask = await taskModel.find().sort({ description: -1 }).limit(1);
        return findedTask;
    }

    async findById(id: Task["_id"]) {
        const findedBook = await taskModel.findById(id);
        return findedBook;
    }

    async delete(id: Task["_id"]) {
        const deletedTask = await taskModel.findByIdAndDelete(id);
        console.log("task deletada: ", deletedTask);
        return deletedTask;
    }


    async findAllByUserId(id: Userinterface["_id"]) {
        const tasks = await taskModel.find({ responsibleUser: id });
        return tasks;
    }

    async countAllByUserId(id: Userinterface["_id"]) {
        const tasks = await taskModel.find({ responsibleUser: id });
        return tasks.length;
    }



    async update(task: Task) {
        const updatedTask = await taskModel.findByIdAndUpdate(task._id, task, { new: true });
        return updatedTask;
    }

    async findAllByCategory(id: Category["_id"]) {
        const tasksByCategory = await taskModel.find({ "category": id });
        return tasksByCategory;

    }

    async findPendingTasks(id: Task["_id"]) {
        const pendingTasks = await taskModel.find({ status: "pending" });
        return pendingTasks;
    }

    async findCompletedTasks(id: Task["_id"]) {
        const completedTasks = await taskModel.find({ status: "completed" });
        return completedTasks;
    }


    async findMostRecentTaskByUser(id: Userinterface["_id"]) {
        const task = await taskModel.findOne({ responsibleUser: id }).sort({ createdAt: -1 });
        return task;
    }

    async findMostOldTaskByUser(id: Userinterface["_id"]) {
        const task = await taskModel.findOne({ responsibleUser: id }).sort({ createdAt: 1 });
        return task;
    }

    async tasksCompletedAvarege() {
        const completedTasks = await taskModel.find({ status: "completed" });
        const totalTasks = await taskModel.find();
        return (completedTasks.length / totalTasks.length) * 100;
    }


    async groupByCategory() {
        const tasks = await taskModel.aggregate([
            {
                $group: {
                    _id: "$category",
                    total: { $sum: 1 }
                }
            }
        ]);

        return tasks;
    }

}

import { Schema, model, Document } from "mongoose";
import { User } from "./user";
import { Category } from "./category";

export interface Task extends Document {
    title: string;
    description: string;
    finishedAt?: Date;
    type?: string;
    status: string;
    category: typeof Category;
    responsibleUser: typeof User;
    expiration?: Date;

}

enum TaskStatus {
    Pending = 'pending',
    InProgress = 'in-progress',
    Completed = 'completed',
}

const taskSchema = new Schema<Task>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    finishedAt: { type: Date },
    type: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: false },
    status: { type: String, required: true, enum: Object.values(TaskStatus) },
    responsibleUser: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    expiration: { type: Date }
}, { timestamps: true });


const TaskModel = model<Task>('Task', taskSchema);

export default TaskModel;

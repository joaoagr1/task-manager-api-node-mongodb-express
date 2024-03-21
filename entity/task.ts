import { Schema, model, Document } from "mongoose";
import  User  from "./user"; // Importando a interface User do arquivo User.ts

// Definindo a interface para o modelo de tarefa
interface Task extends Document {
    title: string;
    description: string;
    finishedAt?: Date;
    type?: string;
    category: string;
    status: string;
    responsibleUser: typeof User;
}

// Esquema para o modelo de tarefa
const taskSchema = new Schema<Task>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    finishedAt: { type: Date },
    type: { type: String },
    category: { type: String, required: true },
    status: { type: String, required: true },
    responsibleUser: { type: Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

// Modelo para a tarefa
const TaskModel = model<Task>('Task', taskSchema);

export default TaskModel;

import { Schema, model, Document } from "mongoose";

interface User extends Document {
    username: string;
    weight: number;
    password: string;
    email: string;
}

const userSchema = new Schema<User>({
    username: String,
    weight: Number,
    password: String,
    email: String
}, {
    versionKey: false
});

export default model<User>('User', userSchema);
 

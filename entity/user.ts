import mongoose, { model, Document } from "mongoose";

export default interface Userinterface extends Document {
    username: string;
    weight: number;
    password: string;
    email: string;
}

const userSchema = new mongoose.Schema<Userinterface>({
    username: {
        type: String,
        required: true // Define o campo como obrigatório
    },
    weight: Number,
    password: String,
    email: String
}, {
    versionKey: false,
    timestamps: true
});

const User = mongoose.models.user || model<Userinterface>('User', userSchema);

export  {User} ;

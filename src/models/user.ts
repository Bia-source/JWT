import { Schema, Document, model} from 'mongoose';
import crypto from 'crypto';

interface User extends Document {
    nome: string;
    email: string;
    senha:string;
}

const UserSchemas = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    senha: {
        type:String,
        required: true,
        set: value => crypto.createHash('md5')
        .update(value)
        .digest('hex')
    }
});

export default model<User>('User', UserSchemas);
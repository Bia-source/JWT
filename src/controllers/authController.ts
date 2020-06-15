import User from '../models/user';
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

class authController{

    public async criarUser(req:Request, res:Response){
        try {
            const user = await User.create(req.body);
            const token = jwt.sing({user: user.id})
            user.senha = undefined;
            return res.json({user, token});
        } catch (error) {
            return res.json({mensagem: 'não foi possivel criar um novo usuario'});
        }
       
    }

}

export default new authController;
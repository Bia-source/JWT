import User from '../models/user';
import { Request, Response } from 'express';

class authController{

    public async criarUser(req:Request, res:Response){
        try {
            const user = await User.create(req.body);
            user.senha = undefined;
            return res.json(user);
        } catch (error) {
            return res.json({mensagem: 'não foi possivel criar um novo usuario'});
        }
       
    }

}

export default new authController;
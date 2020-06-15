import express from 'express';
import cors from 'cors';
import routes from '../routes';
import authController from '../controllers/authController';
 
class Application {
 
     public app: express.Application;

     constructor(){
         this.app = express();
         this.middlewares();
         this.routes();    
     }

     private routes(){
         this.app.use(routes);
     }

     private middlewares(){
         this.app.use(express.json());
         this.app.use(express.urlencoded({ extended: true }));
         this.app.use(cors());
         
     }

     listen(){
         try {
            this.app.listen(3001, ()=>{
                this.app.post('/', (req,res)=>{
                    
                    return res.json({ mensagem: ' Conectado a porta 3001 '});
                });
            });
         } catch (error) {
             console.log('não foi possivel conectar a porta 3001');
         }
        
     }
}
export default Application;
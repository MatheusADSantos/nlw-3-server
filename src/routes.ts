import { Router } from 'express';
import OrpohanagesController from './controllers/OrphanagesControllers'

const routes = Router();

//index(listagem) / show / create / delete

routes.get('/orphanages', OrpohanagesController.index);
routes.post('/orphanages', OrpohanagesController.create);


export default routes;

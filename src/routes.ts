import { Router } from 'express';
import OrpohanagesController from './controllers/OrphanagesControllers'

const routes = Router();

//index(listagem) / show / create / delete

routes.get('/orphanages', OrpohanagesController.index);
routes.get('/orphanages/:id', OrpohanagesController.show);
routes.post('/orphanages', OrpohanagesController.create);


export default routes;

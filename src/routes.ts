import { Router } from 'express';
import OrpohanagesController from './controllers/OrphanagesControllers'

const routes = Router();


routes.post('/orphanages', OrpohanagesController.create);


export default routes;

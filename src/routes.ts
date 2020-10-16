import { Router } from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrpohanagesController from './controllers/OrphanagesControllers'

const routes = Router();
const upload = multer(uploadConfig);

//index(listagem) / show / create / delete

routes.get('/orphanages', OrpohanagesController.index);
routes.get('/orphanages/:id', OrpohanagesController.show);
routes.post('/orphanages', upload.array('images'), OrpohanagesController.create);


export default routes;

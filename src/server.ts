import express, { json } from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors';

import './database/connection';
import errorHandler from './errors/handler';

import routes from './routes';
const app = express();

//qual a origem do frontend que nossa api permitiria acessar
// app.use(cors({
//   origin: 'localhost://3000/'
// }));

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

app.listen(3333);


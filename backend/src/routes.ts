import { Router } from 'express';
import { TeamController } from './controllers/TeamController';

const router = Router();
const teamController = new TeamController();

router.post('/team/create', teamController.create);

export { router };
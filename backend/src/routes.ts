import { Router } from 'express';
import { TeamController } from './controllers/TeamController';
import { BindController } from './controllers/BindController';
import { PlayerController } from './controllers/PlayerController';

const router = Router();

const teamController = new TeamController();
router.get('/teams', teamController.showAllTeams);
router.post('/team/create', teamController.create);
router.get('/team/players/:team_id', teamController.showPlayers);

const playerController = new PlayerController();
router.get('/players', playerController.showAllPlayers);
router.post('/player/create', playerController.create);

const bindController = new BindController();
router.post('/bind/player/team/create', bindController.bindPlayerToTeam);
router.post('/bind/player/team/delete', bindController.unbindPlayerToTeam);

export { router };
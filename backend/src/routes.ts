import { Router } from 'express';
import { TeamController } from './controllers/TeamController';
import { BindController } from './controllers/BindController';
import { PlayerController } from './controllers/PlayerController';
import { StadiumController } from './controllers/StadiumController';

const router = Router();

const teamController = new TeamController();
router.get('/teams', teamController.showAllTeams);
router.post('/team/create', teamController.create);
router.post('/team/show', teamController.showTeamByID);

const playerController = new PlayerController();
router.get('/players', playerController.showAllPlayers);
router.post('/player/create', playerController.create);
router.post('/player/show', playerController.showPlayerByID);

const bindController = new BindController();
router.post('/bind/player/team/create', bindController.bindPlayerToTeam);
router.post('/bind/player/team/delete', bindController.unbindPlayerToTeam);

const stadiumController = new StadiumController();
router.get('/stadiums', stadiumController.showAllStadiums);
router.post('/stadium/create', stadiumController.create);

export { router };
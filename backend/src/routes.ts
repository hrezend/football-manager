import { Router } from 'express';
import { TeamController } from './controllers/TeamController';
import { ManagerController } from './controllers/ManagerController';
import { PlayerController } from './controllers/PlayerController';
import { ChangelogController } from './controllers/ChangelogController';
import { TeamPlayerController } from './controllers/TeamPlayerController';

const router = Router();

const teamController = new TeamController();
router.post('/team/create', teamController.create);
router.get('/team/list/all', teamController.showAllTeams);

const playerController = new PlayerController();
router.post('/player/create', playerController.create);

const teamPlayerController = new TeamPlayerController();
router.post('/teamplayer/create', teamPlayerController.create);
router.post('/teamplayer/unbind', teamPlayerController.unbindTeamPlayer);

const managerController = new ManagerController();
router.post('/manager/create', managerController.create);

const changelogController = new ChangelogController();
router.get('/changelogs', changelogController.showAllChangelogs);

export { router };
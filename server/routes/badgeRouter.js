const express = require('express');
const badgeRouter = express.Router();

const badge_controller = require('../controllers/badgeController');

badgeRouter.get('/test', badge_controller.test_document_endpoint);
badgeRouter.delete('/delete', badge_controller.deleteAllBadges);

badgeRouter.get('/list', badge_controller.getAllBadges);

badgeRouter.get('/list/common', badge_controller.getCommonBadges);

badgeRouter.post('/create', badge_controller.createBadge);
badgeRouter.post('/badgeswithuid', badge_controller.getAllWithUserId);
badgeRouter.post('/badges', badge_controller.getBadgesByIds);

badgeRouter.get("/find", badge_controller.getBadgeById);
badgeRouter.put("/approve", badge_controller.approveBadge);
badgeRouter.put("/decline", badge_controller.declineBadge);



module.exports = badgeRouter;
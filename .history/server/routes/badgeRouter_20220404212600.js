const express = require('express');
const badgeRouter = express.Router();

const badge_controller = require('../controllers/badgeController');

badgeRouter.get('/test', badge_controller.test_document_endpoint);
badgeRouter.delete('/delete', badge_controller.deleteAllBadges);

badgeRouter.get('/list', badge_controller.getAllBadges);

badgeRouter.post('/create', badge_controller.createBadge);
badgeRouter.post('/badges', badge_controller.getBadgesByIds);

badgeRouter.get("/find/:id", badge_controller.getBadgeById);



module.exports = badgeRouter;
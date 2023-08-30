const express = require('express');

const { myApplicationController } = require('../controllers');
const { loginRequired } = require('../utils/auth');

const router = express.Router();
router.get('/all', loginRequired, myApplicationController.getAllApplications);
router.get('/getAllEdits', loginRequired, myApplicationController.getAllEdits);
router.get('/getAllPostApplications', loginRequired, myApplicationController.getAllPostApplications);
router.get('/getAllApprovedApplications', loginRequired, myApplicationController.getAllApprovedApplications);

router.get('/passedApplications', loginRequired, myApplicationController.passedApplications);
router.get('/failedApplications', loginRequired, myApplicationController.failedApplications);

router.get('', loginRequired, myApplicationController.getPosts);
router.post('', loginRequired, myApplicationController.createApplication);
router.post('', loginRequired, myApplicationController.createScrap);
router.patch('/:postId', loginRequired, myApplicationController.updateApplication);
router.delete('/:postId', loginRequired, myApplicationController.deletePost);

module.exports = router;
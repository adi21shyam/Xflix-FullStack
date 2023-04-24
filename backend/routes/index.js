const router = require('express').Router();
const videoRoutes = require('./video.route');

router.use('/videos', videoRoutes);

module.exports = router;
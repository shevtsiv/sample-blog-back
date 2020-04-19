let router = require('express').Router();

router.get('/about', (req, res, _next) => res.json(req.app.get("aboutMetadata")));

router.get('/donate', (req, res, _next) => res.json(req.app.get("donateMetadata")));

module.exports = router;
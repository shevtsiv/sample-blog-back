let router = require('express').Router();

router.get('/', (req, res, _next) => {
    res.json(req.app.get("posts"));
});

router.get('/:id', (req, res, _next) => {
    let cache = req.app.get("cache");
    let postId = req.params.id;
    if (cache[postId]) {
        res.json(cache[postId]);
    } else {
        let fs = require('fs');
        fs.readFile("./public/posts/content/" + postId + ".md", 'UTF-8', (err, data) => {
            if (err) {
                // res.redirect('back');
                return;
            }
            let postDefinitions = req.app.get("posts");
            let fullPost = Object.assign(postDefinitions[postDefinitions.length - postId], {content: data});
            cache[postId] = fullPost;
            res.json(fullPost);
        });
    }
});

module.exports = router;

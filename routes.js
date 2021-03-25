const express = require('express');

const router = express.Router();

const app = express();

app.set('view engine', 'pug');

app.use(routes);

router.get('/', (req, res) => {
    res.render('index', {title: 'Home'});
});

module.exports = router;
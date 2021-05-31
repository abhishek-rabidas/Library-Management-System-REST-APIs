const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const home = require('../controllers/home');

router.get('/', home.home);

router.get('/:id', home.delete);



const add_book = require('../controllers/add_book');

router.get('/add/new', add_book.display);


router.post('/add', add_book.send);

const edit = require('../controllers/edit');

router.get('/edit/:id', edit.display);

router.post('/edit/:id', edit.update);


module.exports = router;
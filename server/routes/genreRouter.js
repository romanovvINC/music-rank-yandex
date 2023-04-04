const Router = require('express')
const router = new Router()
const genreController = require('../controllers/genreController');

router.post('/', genreController.postGenre) 
router.get('/', genreController.getGenres)

module.exports = router
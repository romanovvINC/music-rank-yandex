const Router = require('express')
const router = new Router()
const artistRouter = require('../controllers/artistController');

router.post('/', artistRouter.createArtist)
router.get('/', artistRouter.getAll)
router.get('/:id')

module.exports = router
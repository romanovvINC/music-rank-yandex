const Router = require('express')
const router = new Router()
const albumController = require('../controllers/albumController')

router.post('/', albumController.createAlbum)
router.get('/', albumController.getAll)
router.get('/:id', albumController.getAll)
router.post('/rating', albumController.postRate)
router.delete('/:id', albumController.deleteById)

module.exports = router
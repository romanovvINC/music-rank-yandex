const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const songRouter = require('./songRouter')
const genreRouter = require('./genreRouter')
const artistRouter = require('./artistRouter')
const reviewRouter = require('./reviewRouter')
const albumRoter = require('./albumRouter')

router.use('/user', userRouter)
router.use('/album', albumRoter)
router.use('/song', songRouter)
router.use('/genre', genreRouter)
router.use('/review', reviewRouter)
router.use('/artist', artistRouter)

module.exports = router
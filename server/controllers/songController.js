const uuid = require('uuid')
const path = require('path')
const {Album, Rating, Artist} = require('../models/models')
const ApiError = require('../error/apiError')

class SongController {
  async getAll(req, res) {
    const {id} = req.query;
    let albums;
    if (!id) {
      albums = await Album.findAll()
    }
    if (id) {
      albums = await Album.findAll({where: {id: id}})
    }
    return res.json(albums);
  }

  async createAlbum(req, res, next) {
    try {
      const {title, releaseDate, artistId, songs } = req.body
      const {coverBig, coverSmall} = req.files
      let fileNameSmall = uuid.v4() + ".jpg"
      let fileNameBig = uuid.v4() + ".jpg"
      coverBig.mv(path.resolve(__dirname, '..', 'static', fileNameBig))
      coverSmall.mv(path.resolve(__dirname, '..', 'static', fileNameSmall))

      const dataAlbum = await Album.create({title: title, release_date: releaseDate, cover_big: fileNameBig, cover_small: fileNameSmall})
      const artist = await Artist.findOne({where: {id: artistId}})
      const rating = await Rating.findAll({where: {id}})

      return res.json(album)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new SongController();
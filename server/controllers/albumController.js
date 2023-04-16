const uuid = require('uuid')
const path = require('path')
const {Album, Rating} = require('../models/models')
const ApiError = require('../error/apiError')

class AlbumController {
  async getPromoAlbum(req, res) {

  }

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

  async getByArtist(req, res) {
    
  }

  async postRate(req, res) {
    const {rate, userId, albumId} = req.query;
    const rating = await Rating.create({rating: rate, userId: userId, albumId: albumId});
    return res.json(rating);
  }

  async createAlbum(req, res, next) {
    try {
      const {title, releaseDate } = req.body
      const {coverBig, coverSmall} = req.files
      let fileNameSmall = uuid.v4() + ".jpg"
      let fileNameBig = uuid.v4() + ".jpg"
      coverBig.mv(path.resolve(__dirname, '..', 'static', fileNameBig))
      coverSmall.mv(path.resolve(__dirname, '..', 'static', fileNameSmall))

      const album = await Album.create({title: title, release_date: releaseDate, cover_big: fileNameBig, cover_small: fileNameSmall})

      return res.json(album)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new AlbumController();
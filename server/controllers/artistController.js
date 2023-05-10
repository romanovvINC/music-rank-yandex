const uuid = require('uuid')
const path = require('path')
const {Artist} = require('../models/models')
const ApiError = require('../error/apiError')

class ArtistController {
  async createArtist(req, res, next) {
    try {
      const {name, birthday } = req.body
      const {photo} = req.files
      let fileNamePhoto = uuid.v4() + ".jpg"
      photo.mv(path.resolve(__dirname, '..', 'static', fileNamePhoto))

      const artist = await Artist.create({name: name, birthday: birthday, photo: fileNamePhoto})

      const serializedArtist = {
        id: artist.id,
        name: artist.name,
        realName: artist.realName,
        photo: artist.photo,
        birthday: artist.birthday
      }

      return res.json(serializedArtist);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    let artists = await Artist.findAll();

    let result = artists.map(artist => {
      return {
        id: artist.id,
	      name: artist.name,
	      realName: artist.real_name,
        photo: artist.photo,
	      birthday: artist.birthday 
      }
    });
    return res.json(result);
  }

  async getById(req, res) {
    const id = req.query;
    let artists = await Artist.findAll({where: {id: id}})
    let result = artists.map(artist => {
      return {
        id: artist.id,
	      name: artist.name,
	      realName: artist.real_name,
        photo: artist.photo,
	      birthday: artist.birthday 
      }
    });
    return res.json(result);
  }
}

module.exports = new ArtistController();
const {Genre} = require('../models/models')

class GenreController {
  async getGenres(req, res) {
    const genres = await Genre.findAll()
    return res.json(genres)
  }

  async getGenresByRealease(req, res) {
  }

  async postGenre(req, res) {
    const {name} = req.body
    const genre = await Genre.create({name})
    return res.json(genre)
  }
}

module.exports = new GenreController();
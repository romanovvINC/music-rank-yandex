const uuid = require('uuid')
const path = require('path')
const {Album, Rating, Artist, Genre} = require('../models/models')
const ApiError = require('../error/apiError')
const fs = require('fs');
const {Song} = require("../models/models");
const {ArtistRelease} = require("../models/models");
const {AlbumSong} = require("../models/models");
const {GenreRelease} = require("../models/models");

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
    let editedALbums = []
    for (let i = 0; i < albums.length; i++) {
      const album = albums[i];
      const artistRelease = await ArtistRelease.findOne({where: {albumId: album.id}});
      const artist = await Artist.findOne({where: {id: artistRelease.artistId}})
      const genreReleases = await GenreRelease.findAll({where: {albumId: album.id}})
      const albumSongs = await AlbumSong.findAll({where: {albumId: album.id}})
      let genres = [];
      let songs = [];
      for (let j = 0; j < genreReleases.length; j++) {
        const genre = await Genre.findOne({where: {id: genreReleases[j].genreId}})
        genres.push(genre.name)
      }
      for (let j = 0; j < albumSongs.length; j++) {
        const song = await Song.findOne({where: {id: albumSongs[j].songId}})
        songs.push({
          id: song.id,
          title: song.title,
          duration: song.duration,
          rating: {
            siteScore: null,
            yearPlace: null,
            totalPlace: null,
            numOfScores: null
          },
          side: albumSongs[j].side
        })
      }
      editedALbums.push({
        id: album.id,
        title: album.title,
        artist: {
          id: artist.id,
          name: artist.name
        },
        releaseDate: album.release_date,
        coverSmall: album.cover_small,
        coverBig: album.cover_big,
        genres,
        rating: {
          siteScore: null,
          yearPlace: null,
          totalPlace: null,
          numOfScores: null
        },
        songs: songs,
        reviews: [],
        numOfReviews: 0
      });
    }
    return res.json(editedALbums);
  }

  async deleteById(req, res) {
    const id = req.params.id;
    const album = await Album.findOne({where: {id: id}})
    const albumSongs = await AlbumSong.findAll({where: {albumId: id}})
    const bigFilePath = path.resolve(__dirname, '..', 'static', album.cover_big)
    const smallFilePath = path.resolve(__dirname, '..', 'static', album.cover_small)
    fs.unlink(bigFilePath, () => {console.log("Ошибка")})
    fs.unlink(smallFilePath, () => {console.log("Ошибка")})
    for (let i = 0; i < albumSongs.length; i++) {
      await Song.destroy({where: {id: albumSongs[i].songId}})
      await GenreRelease.destroy({where: {songId: albumSongs[i].songId}})
      await ArtistRelease.destroy({where: {songId: albumSongs[i].songId}})
    }
    await Album.destroy({where: {id: id}})
    await GenreRelease.destroy({where: {albumId: id}})
    await AlbumSong.destroy({where: {albumId: id}})

    return res.json(album);
  }

  async postRate(req, res) {
    const {rate, userId, albumId} = req.query;
    const rating = await Rating.create({rating: rate, userId: userId, albumId: albumId});
    return res.json(rating);
  }

  async createAlbum(req, res, next) {
    try {
      const {title, releaseDate, artistId, songs, genres, side } = req.body
      const {coverBig, coverSmall} = req.files

      let fileNameSmall = uuid.v4() + ".jpg"
      let fileNameBig = uuid.v4() + ".jpg"
      coverBig.mv(path.resolve(__dirname, '..', 'static', fileNameBig))
      coverSmall.mv(path.resolve(__dirname, '..', 'static', fileNameSmall))

      const dataAlbum = await Album.create({title: title, release_date: releaseDate, cover_big: fileNameBig, cover_small: fileNameSmall})
      const artist = await Artist.findOne({where: {id: artistId}});

      let parsedSongs = JSON.parse(songs);
      let parsedGenres = JSON.parse(genres);
      let newSongs = []

      for (let i = 0; i < parsedSongs.length; i++) {
        const newSong = await Song.create({
          title: parsedSongs[i].title,
          release_date: dataAlbum.release_date,
          duration: parsedSongs[i].duration,
          cover: dataAlbum.cover_big,
          albumId: dataAlbum.id
        })
        newSongs.push(newSong);
        await parsedGenres.forEach((genre) => {
          GenreRelease.create({songId: newSong.id, genreId: genre.id})
        })
        await AlbumSong.create({side: side, position: i, albumId: dataAlbum.id, songId: newSong.id})
        await ArtistRelease.create({songId: newSong.id, artistId: artistId})
      }

      await parsedGenres.forEach((genre) => {
        GenreRelease.create({albumId: dataAlbum.id, genreId: genre.id})
      })
      await ArtistRelease.create({albumId: dataAlbum.id, artistId: artistId})

      const album = {
        id: dataAlbum.id,
        title: dataAlbum.title,
        artist: {
          id: artist.id,
          name: artist.name
        },
        releaseDate: dataAlbum.release_date,
        coverBig: dataAlbum.cover_big,
        coverSmall: dataAlbum.cover_small,
        genres: [],
        rating: {
          siteScore: null,
          yearPlace: null,
          totalPlace: null,
          numOfScores: null
        },
        songs: newSongs,
        numOfReviews: 0,
        reviews: [],
      }

      return res.json(album)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }

  async editAlbum(req, res, next) {
    try {
      const {id, title, releaseDate, artistId, songs, side } = req.body
      const {coverBig, coverSmall} = req.files

      let dataAlbum;
      if (coverBig && coverSmall) {
        const oldAlbum = await Album.findOne({where: {id: id}})
        const oldFileBig = path.resolve(__dirname, '..', 'static', oldAlbum.cover_big)
        const oldFileSmall = path.resolve(__dirname, '..', 'static', oldAlbum.cover_small)
        fs.unlink(oldFileBig, () => {console.log("Ошибка")})
        fs.unlink(oldFileSmall, () => {console.log("Ошибка")})
        let fileNameSmall = uuid.v4() + ".jpg"
        let fileNameBig = uuid.v4() + ".jpg"
        coverBig.mv(path.resolve(__dirname, '..', 'static', fileNameBig))
        coverSmall.mv(path.resolve(__dirname, '..', 'static', fileNameSmall))
        dataAlbum = await Album.update({
          title: title,
          release_date: releaseDate,
          cover_big: fileNameBig,
          cover_small: fileNameSmall}, {where: {id: id}})
      } else {
        dataAlbum = await Album.update({title: title, release_date: releaseDate})
      }

      let parsedSongs = JSON.parse(songs);
      let parsedGenres = JSON.parse(genres);
      let newSongs = []

      for (let i = 0; i < parsedSongs.length; i++) {
        if (parsedSongs[i].id) {
          const newSong = await Song.update({
            title: parsedSongs[i].title,
            release_date: dataAlbum.release_date,
            duration: parsedSongs[i].duration,
            cover: dataAlbum.cover_big,
            albumId: dataAlbum.id
          }, {where: {id: parsedSongs[i].id}})
          newSongs.push(newSong);
        } else {
          const newSong = await Song.update({
            title: parsedSongs[i].title,
            release_date: dataAlbum.release_date,
            duration: parsedSongs[i].duration,
            cover: dataAlbum.cover_big,
            albumId: dataAlbum.id
          })
          newSongs.push(newSong);
        }

        newSongs.push(newSong);
        await parsedGenres.forEach((genre) => {
          GenreRelease.create({songId: newSong.id, genreId: genre.id})
        })
        await AlbumSong.create({side: side, position: i, albumId: dataAlbum.id, songId: newSong.id})
        await ArtistRelease.create({songId: newSong.id, artistId: artistId})
      }

      await parsedGenres.forEach((genre) => {
        GenreRelease.create({albumId: dataAlbum.id, genreId: genre.id})
      })
      await ArtistRelease.create({albumId: dataAlbum.id, artistId: artistId})

      const album = {
        id: dataAlbum.id,
        title: dataAlbum.title,
        artist: {
          id: artist.id,
          name: artist.name
        },
        releaseDate: dataAlbum.release_date,
        coverBig: dataAlbum.cover_big,
        coverSmall: dataAlbum.cover_small,
        genres: [],
        rating: {
          siteScore: null,
          yearPlace: null,
          totalPlace: null,
          numOfScores: null
        },
        songs: newSongs,
        numOfReviews: 0,
        reviews: [],
      }

      return res.json(album)
    } catch (e) {
      next(ApiError.badRequest(e.message))
    }
  }
}

module.exports = new AlbumController();
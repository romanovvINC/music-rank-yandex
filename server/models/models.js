const sequelize = require('../db')
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  email: {type: DataTypes.STRING, unique: true},
  login: {type: DataTypes.STRING },
  password: {type: DataTypes.STRING },
  role: {type: DataTypes.STRING, defaultValue: "USER" },
})

const UserStore = sequelize.define('user_store', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const UserItem = sequelize.define('user_item', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  is_favorite: {type: DataTypes.BOOLEAN},
})

const Album = sequelize.define('album', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  release_date: {type: DataTypes.STRING},
  cover_big: {type: DataTypes.STRING },
  cover_small: {type: DataTypes.STRING },
  num_of_scores: {type: DataTypes.INTEGER, defaultValue: 0},
  rating: {type: DataTypes.DOUBLE, defaultValue: 0},
})

const AlbumSong = sequelize.define('album_song', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  position: {type: DataTypes.INTEGER, allowNull: false},
  side: {type: DataTypes.STRING, defaultValue: 'A'}
})

const Review = sequelize.define('review', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  text: {type: DataTypes.STRING, allowNull: false},
  pub_date: {type: DataTypes.STRING},
  num_of_scores: {type: DataTypes.INTEGER, defaultValue: 0},
  num_of_views: {type: DataTypes.INTEGER, defaultValue: 0},
  rating: {type: DataTypes.INTEGER, defaultValue: 0},
})

const Song = sequelize.define('song', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  title: {type: DataTypes.STRING, allowNull: false},
  release_date: {type: DataTypes.STRING},
  duration: {type: DataTypes.INTEGER },
  cover: {type: DataTypes.STRING },
  num_of_scores: {type: DataTypes.INTEGER, defaultValue: 0},
  rating: {type: DataTypes.DOUBLE, defaultValue: 0},
})

const Artist = sequelize.define('artist', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
  real_name: {type: DataTypes.STRING},
  birthday: {type: DataTypes.STRING},
  photo: {type: DataTypes.STRING },
})

const ArtistRelease = sequelize.define('artist_release', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const GenreRelease = sequelize.define('genre_release', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Genre = sequelize.define('genre', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, allowNull: false},
})

const Rating = sequelize.define('rating', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  rating: {type: DataTypes.INTEGER, allowNull: false},
})

User.hasOne(UserStore)
UserStore.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

User.hasMany(Review)
Review.belongsTo(User)


UserStore.hasMany(UserItem)
UserItem.belongsTo(UserStore)

//Альбом

Album.hasMany(Rating)
Rating.belongsTo(Album)

Album.hasMany(UserItem)
UserItem.belongsTo(Album)

Album.hasMany(Review)
Review.belongsTo(Album)

Album.belongsToMany(Genre, {through: GenreRelease})
Genre.belongsToMany(Album, {through: GenreRelease}) 

Album.hasOne(ArtistRelease)
ArtistRelease.belongsTo(Album)

Album.belongsToMany(Song, {through: AlbumSong})
Song.belongsTo(Album, {through: AlbumSong})

//Песня

Song.hasMany(Rating)
Rating.belongsTo(Song)

Song.hasMany(UserItem)
UserItem.belongsTo(Song)

Song.hasMany(Review)
Review.belongsTo(Song)

Song.belongsToMany(Genre, {through: GenreRelease})
Genre.belongsToMany(Song, {through: GenreRelease})

Song.hasOne(ArtistRelease)
ArtistRelease.belongsTo(Song)

//Обзор

Review.hasMany(UserItem)
UserItem.belongsTo(Review)

//Артист

Artist.hasMany(GenreRelease)
GenreRelease.belongsTo(Artist)

Artist.hasMany(ArtistRelease)
ArtistRelease.belongsTo(Artist)

//Жанр

Genre.hasMany(GenreRelease)
GenreRelease.belongsTo(Genre)

module.exports = {
  User,
  UserItem,
  UserStore,
  Rating,
  Album,
  Song,
  AlbumSong,
  Genre,
  GenreRelease,
  Review,
  Artist,
  ArtistRelease,
}

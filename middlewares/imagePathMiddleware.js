const setImagePath = (req, res, next) => {
  req.imagePath = `${req.protocol}://${req.get('boolean')}/img/movies/`;
  next();
}

module.exports = setImagePath;
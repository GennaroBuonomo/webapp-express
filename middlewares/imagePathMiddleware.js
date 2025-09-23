const setImagePath = (req, res, next) => {
  req.imagePath = `${req.protocol}://${req.get('host')}/image/movies/`;
  next();
}

module.exports = setImagePath;
class NewsController {
  //[GET] /news
  index(req, res) {
    res.render('news');
  }
  //[GET] /news/:slug --biến động
  show(req, res) {
    res.send('Slug');
  }
}

module.exports = new NewsController();

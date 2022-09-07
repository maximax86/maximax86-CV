const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

/* GET Sobre Mi page. */
router.get('/sobremi', function(req, res, next) {
  res.render('sobremi', { title: 'Sobre Mi' });
});

/* GET Formacion page. */
router.get('/formacion', function(req, res, next) {
  res.render('formacion', { title: 'Formacion' });
});

/* GET Portfolio page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

/* GET Contacto page. */
router.get('/contacto', function(req, res, next) {
  res.render('contacto', { title: 'Contacto' });
});

module.exports = router;

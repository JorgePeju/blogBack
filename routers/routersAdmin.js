const express = require('express');
const router = express.Router();

const { validateInputs } = require('../middleware/inputValidator');
const { check } = require('express-validator');
const { createArticle, deleteArticle, editArticle, formCreateArticle , formEditArticle, getArticleAdmin, getArticlesAdmin} = require('../controllers/adminControllers');


router.get('/article', getArticleAdmin);
router.get('/article/title/:title', getArticlesAdmin);

router.post('/article/create-article', [
  validateInputs
],
  createArticle);

router.get('/article/create-form', formCreateArticle);

router.post('/article/edit-article/:id', [
  validateInputs
],
  editArticle);

router.get('/article/edit-form/:id', formEditArticle);


router.get('/article/remove-article/:id', deleteArticle);


module.exports = router;
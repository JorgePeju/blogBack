const express = require('express');
const router = express.Router();

//const { validateInputs } = require('../middleware/inputValidator');
const { createArticle, deleteArticle, editArticle, getArticleAdmin, getArticlesAdmin} = require('../controllers/adminControllers');


router.get('/', getArticlesAdmin);

router.get('/:id', getArticleAdmin);

router.post('/', createArticle);

router.post(':id', editArticle);

router.get('/:id', deleteArticle);


module.exports = router;
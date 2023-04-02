const Article = require('../models/movieModel');


const getArticlesAdmin = async (req, res) => {
    try {

        const article = await Article.find()

        if (!article) {

            return res.status(404).json({
                ok: false,
                msg: 'CUATROCIENTOS CUATRO NOOOOOO!'
            })

        } else {
            return res.render('admin/adminView', {
                article,
            })

        }


    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: "Error retrieving the movie",
        });

    }
}

const getArticleAdmin = async (req, res) => {

    try {

        const titulo = req.params.titulo;
        const article = await Article.findOne({ titulo: titulo });

        if (article) {

            return res.status(200).json({
                ok: true,
                msg: "Articulo encontrado",
                data: article,
            });

        } else {

            return res.status(404).json({
                ok: false,
                msg: "No existe el artículo",
            });

        }
    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "No se ha podido acceder al artículo",
        });

    }
};


const createArticle = async (req, res) => {

    const newArticle = new Article(req.body);

    try {

        if (!res.errors) {

            await newArticle.save();
            return res.redirect('/admin/articles');

        } else {

            const errors = res.errors;
            res.render('../views/admin/adminCreate.ejs', { errors });

        }

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al crear el artículo",
        });

    }
};


const formCreateArticle = async (req, res) => {

    res.render('../views/admin/adminCreate.ejs');


};

const editArticle = async (req, res) => {


    try {

        const id = req.params.id;
        const titulo = req.body.titulo;
        const extracto = req.body.extracto;
        const cuerpo = req.body.cuerpo;   

        const update = { 'titulo': titulo, 'extracto': extracto, 'cuerpo': cuerpo};

        if (!res.errors) {

            await Article.findOneAndUpdate({ _id: id }, { $set: update });
            return res.redirect('/admin/articles');

        } else {

            const movie = await Article.findById(req.params.id);
            const errors = res.errors;
            res.render('../views/admin/adminEdit.ejs', { movie, errors });
        }

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al editar el artículo",
        });

    };
};

const formEditArticle = async (req, res) => {

    const id = req.params.id;
    const article = await Article.findOne({ _id: id });
    res.render('../views/admin/adminEdit.ejs', {
        article,
    });

};


const deleteMovie = async (req, res) => {

    try {

        const id = req.params.id;
        await Article.findOneAndDelete({ _id: id });

        return res.redirect('/admin/article');

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'Error al borrar el artículo.'
        });
    }

};

module.exports = {

    getArticleAdmin,
    getArticlesAdmin,
    createArticle,
    formCreateArticle,
    editArticle,
    formEditArticle,
    deleteArticle,
}
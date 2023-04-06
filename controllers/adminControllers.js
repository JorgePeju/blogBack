const Article = require('../models/articleMode');


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

    const id = req.params.id;

    try {

        const article = await Article.findById(id);

            return res.status(200).json({
                ok: true,
                msg: "Articulo encontrado",
                data: article,
            });

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

        const article = await newArticle.save();

        return res.status(201).json({
            ok: true,
            msg: 'Artículo creado.',
            article
        });

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al crear el artículo",
        });

    }
};


const editArticle = async (req, res) => {

    try {

        const id = req.params.id;
        const body = req.body;

        const article = await Article.findOneAndUpdate({ _id: id }, { $set: body });

        return res.status(200).json({
            ok: true,
            msg: 'Articulo actualizado.',
            article
        });

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: "Error al editar el artículo",
        });

    };
};


const deleteArticle = async (req, res) => {

    try {

        const id = req.params.id;
        const article = await Article.findOneAndDelete({ _id: id });

        return res.status(200).json({
            ok: true,
            msg: 'Artículo eliminado correctamente.',
            article
        });
    

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
    editArticle,
    deleteArticle,
}
import validator from 'validator';
import { Article } from '../models/article.js';

const controller = {
    datosCurso: (req, res) => {
        const usuarioValue = req.body.hola;

        res.status(200).send({
            curso: 'Master en frameworks JS',
            autor: 'Carlos Martínez',
            url: '',
            usuarioValue,
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Acción de test del controlador',
        });
    },

    save: async (req, res) => {
        const params = req.body;

        try {
            const validateTitle = !validator.isEmpty(params.title);
            const validateContent = !validator.isEmpty(params.content);

            if (!validateTitle || !validateContent) {
                return res.status(400).send({
                    status: 'error',
                    message: 'Datos no válidos',
                });
            }

            const article = new Article({
                title: params.title,
                content: params.content,
                image: null,
            });

            const savedArticle = await article.save();

            return res.status(201).send({
                status: 'success',
                article: savedArticle,
            });
        } catch (error) {
            console.error('Error al guardar el artículo:', error);

            return res.status(500).send({
                status: 'error',
                message: 'Error al guardar el artículo',
            });
        }
    },

    getArticles: async (req, res) => {
        const last = req.params.last;
        const query = Article.find({});

        if (last) {
            query.limit(5);  // Asegúrate de que el límite sea correcto
        }

        try {
            const articles = await query.sort('id');

            if (articles.length === 0) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay artículos',
                });
            }

            return res.status(200).send({
                status: 'success',
                articles,  // Devuelve los artículos encontrados
            });
        } catch (err) {
            console.error('Error al devolver los artículos:', err);

            return res.status(500).send({
                status: 'error',
                message: 'Error al devolver los artículos',
            });
        }
    },

    getArticle: async (req, res) => {
        const id = req.params.id;

        if (!id) {
            return res.status(404).send({
                status: 'error',
                message: 'El ID no es válido',
            });
        }

        try {
            const article = await Article.findById(id);

            if (!article) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se encontró el artículo',
                });
            }

            return res.status(200).send({
                status: 'success',
                article,
            });
        } catch (err) {
            console.error('Error al buscar el artículo:', err);

            return res.status(500).send({
                status: 'error',
                message: 'Error al devolver el artículo',
            });
        }
    },

    update: async (req, res) => {
        // ID del artículo
        const id = req.params.id;

        // Datos del método
        const params = req.body;

        try {
            // Validar datos
            const validateTitle = !validator.isEmpty(params.title);
            const validateContent = !validator.isEmpty(params.content);

            if (!validateTitle || !validateContent) {
                return res.status(400).send({
                    status: 'error',
                    message: 'Validación fallida',
                });
            }

            // Intentar actualizar el artículo
            const articleUpdated = await Article.findOneAndUpdate(
                { _id: id },
                params,
                { new: true }
            );  // El flag 'new' devuelve el documento actualizado

            if (!articleUpdated) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe el artículo',
                });
            }

            // Devolver el artículo actualizado
            return res.status(200).send({
                status: 'success',
                article: articleUpdated,
            });
        } catch (err) {
            console.error('Error al actualizar el artículo:', err);  // Registro del error

            return res.status(500).send({
                status: 'error',
                message: 'Error al actualizar el artículo',
            });
        }
    },

    delete: async (req, res) => {
        const id = req.params.id

        try {
            const ArticleDelete = await Article.findOneAndDelete({ _id: id })

            if (!ArticleDelete) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Error al borrar'
                })
            }

            return res.status(200).send({
                status: 'succes',
                article: ArticleDelete
            })

        } catch (error) {
            return res.status(404).send({
                status: 'error',
                message: 'Error al borrar'
            })
        }
    },

    upload: (req, res) => {
        const fileDefault = 'Imagen no subida...';

        if (!req.files || !req.files.file0) {  // Verificar si 'file0' existe
            return res.status(404).send({
                status: 'error',
                message: fileDefault,
            });
        }

        const filePath = req.files.file0.path;

        if (!filePath) {  // Verificar si 'filePath' está disponible
            return res.status(404).send({
                status: 'error',
                message: 'No se pudo obtener la ruta del archivo',
            });
        }

        const fileSplit = filePath.split('/');  // Corregir la división del nombre del archivo

        const fileName = fileSplit[fileSplit.length - 1];  // Obtener el último elemento como nombre del archivo

        const extendSplit = fileName.split('.');  // Corregir la división para la extensión

        const fileExtend = extendSplit[extendSplit.length - 1];  // Último elemento es la extensión

        // Validar la extensión si es necesario
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];  // Ejemplo de extensiones permitidas
        if (!allowedExtensions.includes(fileExtend.toLowerCase())) {
            return res.status(400).send({
                status: 'error',
                message: 'Extensión de archivo no permitida',
            });
        }

        // Respuesta exitosa
        return res.status(200).send({
            fichero: req.files,
            split: fileSplit,
            fileName,
            fileExtend,
        });
    }

}

export { controller };
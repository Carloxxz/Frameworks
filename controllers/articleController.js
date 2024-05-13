import validator from 'validator';
import fs from 'fs'
import path from 'path';
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
    
            const articleData = {
                title: params.title,
                content: params.content,
                image: null, // No estás recibiendo la imagen en la solicitud, ajusta si es necesario
                date: new Date().toISOString() // O ajusta la fecha según tus necesidades
            };
    
            // Crea una nueva instancia de Article asignando las propiedades del objeto literal
            const article = new Article();
            Object.assign(article, articleData);
    
            // Guarda el artículo en la base de datos u otra operación necesaria
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

    upload: async (req, res) => {
        const fileDefault = 'Imagen no subida...';

        // Verificar si hay archivos en la solicitud
        if (!req.files || !req.files.file0) {
            return res.status(404).send({
                status: 'error',
                message: fileDefault,
            });
        }

        const file_path = req.files.file0.path;

        // Verificar si el archivo tiene un nombre correcto
        if (!file_path) {
            return res.status(404).send({
                status: 'error',
                message: 'No se pudo obtener la ruta del archivo',
            });
        }

        const file_split = path.normalize(file_path).split(path.sep);  // Normalizar y dividir la ruta
        const file_name = file_split[file_split.length - 1];  // Obtener el nombre del archivo
        const extension_split = file_name.split('.');  // Dividir para obtener la extensión
        const file_ext = extension_split[extension_split.length - 1].toLowerCase();  // Extensión en minúsculas

        const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];  // Extensiones permitidas

        if (!allowedExtensions.includes(file_ext)) {  // Verificar si la extensión es permitida
            try {
                await fs.unlink(file_path);  // Eliminar el archivo si no es permitido

                return res.status(400).send({
                    status: 'error',
                    message: 'La extensión de la imagen no es válida!!!',
                });
            } catch (err) {
                console.error('Error al eliminar el archivo:', err);

                return res.status(500).send({
                    status: 'error',
                    message: 'Error al eliminar archivo con extensión no permitida',
                });
            }
        }

        const articleId = req.params.id;

        if (articleId) {
            try {
                const articleUpdated = await Article.findOneAndUpdate(
                    { _id: articleId },
                    { image: file_name },
                    { new: true }
                );

                if (!articleUpdated) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'Error al guardar la imagen del artículo!!!',
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated,
                });
            } catch (err) {
                console.error('Error al actualizar el artículo:', err);

                return res.status(500).send({
                    status: 'error',
                    message: 'Error al intentar guardar la imagen del artículo',
                });
            }
        } else {
            return res.status(200).send({
                status: 'success',
                image: file_name,
            });
        }

    },

    getImage: async (req, res) => {
        const filePath = '/path/to/file.txt';

        try {
            // Verificar si el archivo es accesible
            await fs.access(filePath);

            // Enviar el archivo si existe
            return res.sendFile(path.resolve(filePath));
        } catch (err) {
            if (err.code === 'ENOENT') {
                return res.status(404).send({
                    status: 'error',
                    message: 'No existe',  // Error si el archivo no se encuentra
                });
            } else {
                console.error('Error al verificar el archivo:', err);  // Otros errores
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al intentar enviar el archivo',
                });
            }
        }

    },

    search: async (req, res) => {
        // string a buscar
        const searchString = req.params.search


        try {
            const articles = await Article.find({
                "$or": [
                    { "title": { "$regex": searchString, "$options": "i" } },
                    { "content": { "$regex": searchString, "$options": "i" } },
                ],
            })
                .sort([['date', 'descending']]);  // Ordenamos por fecha descendente

            if (!articles || articles.length === 0) {  // Verificamos si hay resultados
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay artículos',
                });
            }

            return res.status(200).send({
                status: 'success',
                articles,
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error en la petición',
            });
        }
    }
}

export { controller };
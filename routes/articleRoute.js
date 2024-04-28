import express, { Router } from "express";
import { controller } from "../controllers/articleController.js";
import multipart from "connect-multiparty";

const router = Router()

// middleware

const mdUpload = multipart({ upload: './upload/articles' })

router.post('/datos-curso', controller.datosCurso)
router.get('/test-de-controlador', controller.test)


// Rutas para articulos
router.post('/save', controller.save)
router.get('/articles/:last?', controller.getArticles)
router.get('/article/:id', controller.getArticle)
router.put('/article/:id', controller.update)
router.delete('/article/:id', controller.delete)
router.post('/upload-img/:id', mdUpload, controller.upload)
router.get('//get-img/:image', controller.getImage)
router.get('/search/:search', controller.search)

export { router }
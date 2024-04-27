import express, { Router } from "express";
import { controller } from "../controllers/articleController.js";

const router = Router()

router.post('/datos-curso', controller.datosCurso)
router.get('/test-de-controlador', controller.test)


// Rutas para articulos
router.post('/save', controller.save)
router.get('/articles/:last?', controller.getArticles)
router.get('/article/:id', controller.getArticle)
router.put('/article/:id', controller.update)

export { router }
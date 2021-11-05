import express from 'express';
const router = express.Router();

import * as videojuegosController from '../controllers/videojuegos.controller.js';

router.get('/', videojuegosController.getAll);
router.get('/:nombre', videojuegosController.getVideojuego);
router.post('/', videojuegosController.addVideojuego);
router.put('/:nombre', videojuegosController.updateVideojuego);
router.delete('/:nombre', videojuegosController.deleteVideojuego);

export {router}
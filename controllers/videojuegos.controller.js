import {videojuegos} from '../data/videojuegos.js'

const getAll = (req, res) => {
    return res.json(videojuegos);
}

const getVideojuego = (req, res) => {
    return res.json(videojuegos.find(videojuego => videojuego.nombre === req.params.nombre));
}

const addVideojuego = (req, res) => {
    const {nombre, categorias, precio} = req.body
    videojuegos.push({nombre, categorias, precio : Number(precio)})
    return res.json(videojuegos)
}

const updateVideojuego = (req, res) => {
    let nombre = req.params.nombre
    const {precio} = req.body
    let juego = videojuegos.find(videojuego => videojuego.nombre === nombre);
    let categorias = juego.categorias;
    let index = videojuegos.indexOf(juego);
    videojuegos.splice(index, 1, {nombre, categorias, precio : Number(precio)})
    return res.json(videojuegos)
}

const deleteVideojuego = (req,res) => {
    let nombre = req.params.nombre
    let juego = videojuegos.find(videojuego => videojuego.nombre === nombre);
    let index = videojuegos.indexOf(juego);
    videojuegos.splice(index, 1);
    return res.json(videojuegos)
}

export {getAll, getVideojuego, addVideojuego, updateVideojuego, deleteVideojuego}
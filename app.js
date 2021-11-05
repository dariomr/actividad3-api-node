import express from 'express'
const app = express()
const port = 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))

import { router as routerVideojuegos } from './routers/videojuegos.router.js';

app.use('/videojuegos', routerVideojuegos);

app.listen(port, () =>{
    console.log(`Server started at http://localhost:${port}`);
})
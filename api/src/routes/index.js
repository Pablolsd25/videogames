const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogame = require('./videogame');
const videogames = require('./videogames');
const genres = require('./genres');
const createVideogame = require('./createVideogame');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogame', videogame);
router.use('/videogames', videogames);
router.use('/genres', genres);
router.use('/videogame', createVideogame);


module.exports = router;

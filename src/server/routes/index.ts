import { Router } from 'express';
import { StatusCodes } from 'http-status-codes'

const router = Router();

router.get('/', (_, res) => {
    return res.send('Olá devs');
});

router.post('/teste', (req, res) => {
    // Para exibir os posts enviados pelo INSOMIA
    console.log(req);

    // Para retornar esse texto como padrão. 
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
});

export { router };
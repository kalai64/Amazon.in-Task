import express from 'express';
import ctr from '../controllers/ctr.js';

const router = express.Router()

router.post('/addproduct', ctr.addProduct)
router.get('/getproducts', ctr.getData)
router.get('/getiditem/:id', ctr.getById)
router.delete('/deletedata/:id', ctr.deleteById)

export default router;

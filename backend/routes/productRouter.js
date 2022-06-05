import  Express  from "express";
import { authToken } from "../authMiddleware.js/auth.js";
import { inputProduct,  getProducts, updateProduct, deleteProduct , productsList, deleteAllProducts , getProductById} from "../services/productService.js";


const productRouter = Express.Router();
productRouter.get('/products', productsList)
productRouter.get('/products/:id', getProductById)
productRouter.post('/myProducts', authToken, inputProduct);
productRouter.get('/myProducts',authToken, getProducts)
productRouter.put('/myProducts', authToken, updateProduct);
productRouter.delete('/deleteAll', authToken, deleteAllProducts);
productRouter.delete('/deleteProduct/:id', authToken, deleteProduct);



export default productRouter
import { addToCart, getCart } from '../controllers/cartController.js';
import { getProducts } from '../controllers/productController.js';
import { validateCartPayload } from '../middlewares/validateCartPayload.js';
import { handlePrismaOperations } from '../controllers/prismaController.js';

const initRoutes = (app) => {
  app.get('/', (req, res) => {
    res.json(
      [
        {
          endpoint: '/products',
          description: 'Get a list of products',
          method: 'GET',
          example: 'curl -X GET http://localhost:3000/products',
        },
        {
          endpoint: '/cart',
          description: 'Add a product to the cart',
          method: 'POST',
          example: 'curl -X POST http://localhost:3000/cart -d \'{"productId": 1, "quantity": 1}\'',
        }
      ]
    );
  });

  app.get('/products', getProducts);

  app.get('/cart', getCart);
  app.post('/cart', validateCartPayload, addToCart);

  app.get('/prisma', handlePrismaOperations);

  app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
  });
}

export { initRoutes };
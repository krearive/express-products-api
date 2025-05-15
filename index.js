import express from 'express';
import cors from 'cors';

const app = new express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
import fs from 'fs';
import path from 'path';

let cart = [];
const products = JSON.parse(fs.readFileSync(path.resolve('data/products.json'), 'utf-8'));

const getCart = (req, res) => {
  res.json(cart);
};

const addToCart = (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  if (quantity <= 0) {
    return res.status(400).json({ error: 'Quantity must be greater than 0' });
  }

  let item;
  const cartProduct = cart.find(cp => cp.id === productId);

  if (cartProduct) {
    cartProduct.quantity += quantity;
  } else {
    item = {
      id: product.id,
      name: product.name,
      quantity: quantity,
    };
    cart.push(item);
  }

  res.json(cartProduct || item);
};

export { addToCart, getCart };

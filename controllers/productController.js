import fs from 'fs';
import path from 'path';

const products = JSON.parse(fs.readFileSync(path.resolve('data/products.json'), 'utf-8'));

const getProducts = (req, res) => {
  res.json(products);
};

export { getProducts };
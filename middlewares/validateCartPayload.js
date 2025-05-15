const validateCartPayload = (req, res, next) => {
  const { productId, quantity } = req.body;

  if (!productId || typeof productId !== 'number') {
    return res.status(400).json({ error: 'Invalid or missing productId' });
  }

  if (!quantity || typeof quantity !== 'number' || quantity <= 0) {
    return res.status(400).json({ error: 'Invalid or missing quantity' });
  }

  next();
};

export { validateCartPayload };

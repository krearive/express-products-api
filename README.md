# Express JS

Backend Products Api

> DATABASE TABLE

```sql
CREATE TABLE users (
  id INT,
  name VARCHAR(100),
  email VARCHAR(100)
)

CREATE TABLE orders (
  id INT,
  user_id INT,
  total DECIMAL(10,2),
  status VARCHAR(20)
)
```

---
> SQL Query

```sql
-- Users who have placed orders greater than 1,000,000
SELECT DISTINCT u.*
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.total > 1000000;

-- Average order per user
SELECT user_id, AVG(total) AS avg_order
FROM orders
GROUP BY user_id;

-- Update status order to completed if total greater than 500,000
UPDATE orders
SET status = 'completed'
WHERE total > 500000;
```

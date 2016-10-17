SELECT orders.size, orders.quantity, shoes.id, shoes.img1, shoes.price, shoes.name FROM orders
JOIN cart ON orders.cartid = cart.cartid
JOIN shoes ON orders.shoeid = shoes.id
WHERE cart.cartid = $1;

SELECT * FROM orders
WHERE cartid = $1
AND shoeid = $2
AND size = $3;

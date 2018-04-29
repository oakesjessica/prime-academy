-- 01. Get all customers and their addresses.
  --  Match addresses.customer_id's with customer table's id's, add their addresses
SELECT addresses.street, addresses.state, addresses.city, addresses.zip, customers.first_name, customers.last_name
FROM addresses
JOIN customers ON addresses.customer_id = customers.id;


-- 02. Get all orders and their line items.
  --  SELECT orders id from orders table, and line items unit price/id for verification
  --  LEFT JOIN line_items where order id's are the same
SELECT orders.id, line_items.unit_price, line_items.id
FROM orders
LEFT JOIN line_items ON  orders.id = line_items.order_id;


-- 03. Which warehouses have cheetos?
--	products.id for cheetos = 5
--	warehouse has just id's
--	warehouse_product has product_id and warehouse_id
--	grab warehouse_product.warehouse_id from warehouse_product where warehouse_product.product_id = 5
SELECT warehouse_product.warehouse_id, products.description
FROM warehouse
JOIN warehouse_product ON warehouse.id = warehouse_product.warehouse_id
JOIN products ON warehouse_product.product_id = products.id AND products.id = 5;


-- 04. Which warehouses have diet pepsi?
--	products.id for diet pepsi = 6
--	warehouse has just id's
--	warehouse_product has product_id and warehouse_id
--	grab warehouse_product.warehouse_id from warehouse_product where warehouse_product.product_id = 6
SELECT warehouse_product.warehouse_id, products.description
FROM warehouse
JOIN warehouse_product ON warehouse.id = warehouse_product.warehouse_id
JOIN products ON warehouse_product.product_id = products.id AND products.id = 6;


-- 05. Get the number of orders for each customer. It is OK if those without orders are not included in results.
  --  COUNT orders.total from orders table
  --  JOIN orders and addresses where address id's are the same
  --  JOIN addresses and customers where customer id's are the same
  --  GROUP by cutomer's name
SELECT count(orders.total), customers.first_name, customers.last_name
FROM orders
JOIN addresses ON orders.address_id = addresses.id
JOIN customers ON addresses.customer_id = customers.id
GROUP BY customers.first_name ;


-- 06. How many customers do we have?
  --  COUNT all rows from customers table
SELECT COUNT(*) FROM customers


-- 07. How many products do we carry?
  --  COUNT all rows from products table
SELECT COUNT(*) FROM products


-- 08. What is the total available on-hand quantity of diet pepsi?
  --  Get SUM of on-hand quantity of diet pepsi (also get products description just to verify)
  --  From warehouse_product table, JOIN products table where the product id's are the same AND
  --  Where the product description is 'diet pepsi'
  --  GROUP BY the description
SELECT sum(warehouse_product.on_hand), products.description
FROM warehouse_product
JOIN products ON warehouse_product.product_id = products.id AND products.description = 'diet pepsi'
GROUP BY products.description;

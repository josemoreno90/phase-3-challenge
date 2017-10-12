DROP DATABASE IF EXISTS grocery_store;
CREATE DATABASE grocery_store;

\c grocery_store;

DROP TABLE IF EXISTS shoppers;
CREATE TABLE shoppers (
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS orders;
CREATE TABLE orders (
	id SERIAL PRIMARY KEY,
	order_date TIMESTAMP DEFAULT NOW(),
	shopper_id SERIAL REFERENCES shoppers(id)
);

DROP TABLE IF EXISTS items;
CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	price DECIMAL,
	section VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS order_items;
CREATE TABLE order_items (
	order_id SERIAL REFERENCES orders(id),
	item_id SERIAL REFERENCES items(id)
);

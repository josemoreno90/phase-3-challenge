COPY items(name, price, section)
FROM '/Users/josemoreno/Desktop/Projects/phase-3-challenge/part-2/grocery.csv' DELIMITER ',' CSV HEADER;

INSERT INTO shoppers
(first_name, last_name)
VALUES
('George', 'Washington'),
('2', 'Pac'),
('Kim', 'Jong Un'),
('Pancho', 'Villa'),
('Albert', 'Johnson');

INSERT INTO orders
(order_date, shopper_id)
VALUES
('2017-07-24 20:50:36.678066',1),
('2017-07-25 20:50:36.678066',3),
('2017-04-13 20:50:36.678066',2),
('2017-01-24 20:50:36.678066',4),
('2017-05-26 20:50:36.678066',1),
('2017-06-01 20:50:36.678066',2),
('2017-02-24 20:50:36.678066',5),
('2017-03-31 20:50:36.678066',1),
('2017-10-20 20:50:36.678066',5),
('2017-11-24 20:50:36.678066',3);

INSERT INTO order_items
(order_id, item_id)
VALUES
(1,20),
(1,23),
(1,37),
(2,24),
(2,12),
(3,38),
(4,31),
(5,21),
(5,29),
(5,41),
(6,1),
(6,4),
(6,6),
(7,28),
(7,16);

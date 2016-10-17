CREATE TABLE shoes
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(40),
  stock INT,
  description VARCHAR(1000),
  price INT,
  color VARCHAR(20),
  size VARCHAR(40),
  style VARCHAR(40),
  gender VARCHAR(2),
  img1 VARCHAR(200),
  img2 VARCHAR(200),
  img3 VARCHAR(200),
  img4 VARCHAR(200)
);

CREATE TABLE cart
(
  cartid TEXT PRIMARY KEY,
  cartquantity INT
);

CREATE TABLE orders
(
  id SERIAL PRIMARY KEY,
  cartid TEXT,
  shoeid INT,
  size VARCHAR(40),
  quantity INT
);





INSERT INTO shoes (id, name, stock, description, price, color, size, style, gender, img1, img2, img3, img4)  VALUES (1, 'LOW 5 BLACK DENIM', 100, 'Low-top denim textured leather sneaker in black. Tonal leather trim, lace-up closure and a white and black rubber cup sole unit. Full calf leather lining and insole. Comes in a branded box with a spare set of waxed laces.', 280.00, 'BLACK', 'EU 36 | US 03 | UK 02', 'LOW 5', 'M', 'img/shoes/ETQ-Amsterdam-Low-5-Black-Denim-Side.jpg', 'img/shoes/ETQ-Amsterdam-Low-5-Black-Denim-Front.jpg', 'img/shoes/ETQ-Amsterdam-Low-5-Black-Denim-Back.jpg', 'img/shoes/ETQ-Amsterdam-Low-5-Black-Denim-Side-800x0-c-default.jpg');

INSERT INTO shoes (id, name, stock, description, price, color, size, style, gender, img1, img2, img3, img4)  VALUES (2, 'LOW 1 RUBBERIZED ALLOY / GUM', 100, 'Low-top rubberized leather sneaker in Alloy. Tonal leather trim and lace-up closure. Dark chrome eyelets and a gum rugged rubber cup sole unit. Full calf leather lining and insole. Comes in a branded box with a spare set of waxed laces.', 273.00, 'GREY', 'EU 36 | US 03 | UK 02', 'LOW 1', 'M', 'img/shoes/ETQ-Amsterdam-Low-1-Rubberized-Alloy-Gum-Side.jpg', 'img/shoes/ETQ-Amsterdam-Low-1-Rubberized-Alloy-Gum-Front.jpg', 'img/shoes/ETQ-Amsterdam-Low-1-Rubberized-Alloy-Gum-Back.jpg', 'img/shoes/ETQ-Amsterdam-Low-1-Rubberized-Alloy-Gum-Side-800x0-c-default.jpg');

INSERT INTO shoes (id, name, stock, description, price, color, size, style, gender, img1, img2, img3, img4)  VALUES (3, 'LOW 4 WOOL CEMENT', 100, 'Low-top wool sneaker in Cement. Tonal leather trim, lace-up closure, eyelets and a white rubber cup sole unit. Full calf leather lining and insole. Comes in a branded box with a spare set of waxed laces.', 279.00, 'GREY', 'EU 36 | US 03 | UK 02', 'LOW 4', 'M', 'img/shoes/ETQ-Amsterdam-Low-4-Wool-Cement-Side.jpeg', 'img/shoes/ETQ-Amsterdam-Low-4-Wool-Cement-Front.jpeg', 'img/shoes/ETQ-Amsterdam-Low-4-Wool-Cement-Back.jpeg', 'img/shoes/ETQ-Amsterdam-Low-4-Wool-Cement-Side-800x0-c-default.jpeg');

INSERT INTO shoes (id, name, stock, description, price, color, size, style, gender, img1, img2, img3, img4)  VALUES (4, 'LOW 1 RUBBERIZED PORTO / MICROCHIP', 100, 'Low-top rubberized leather sneaker in Porto. Tonal leather trim and lace-up closure. Dark chrome eyelets and a Microchip rugged rubber cup sole unit. Full calf leather lining and insole. Comes in a branded box with a spare set of waxed laces.', 274.00, 'RED', 'EU 36 | US 03 | UK 02', 'LOW 1', 'M', 'img/shoes/ETQ-Amsterdam-Low-1-Rubberized-Porto-Light-Grey-Side.jpg', 'img/shoes/ETQ-Amsterdam-Low-1-Rubberized-Porto-Light-Grey-Front.jpg', 'img/shoes/ETQ-Amsterdam-Low-1-Rubberized-Porto-Light-Grey-Back.jpg', 'img/shoes/ETQ-Amsterdam-Low-1-Rubberized-Porto-Light-Grey-Side-800x0-c-default.jpg');

INSERT INTO shoes (id, name, stock, description, price, color, size, style, gender, img1, img2, img3, img4)  VALUES (5, '
CHELSEA BOOT ALLOY', 100, 'Chelsea boot made from a single piece of grained leather, in all black. Stitched down the back of the heel, set on a chunky lug sole. Finished with elasticated sides and pull-tabs.', 302.00, 'BLACK', 'EU 36 | US 03 | UK 02', 'CHELSEA BOOT', 'F', 'img/shoes/ETQ-Amsterdam-Chelsea-Boot-Black-Side.jpg', 'img/shoes/ETQ-Amsterdam-Chelsea-Boot-Black-Front.jpg', 'img/shoes/ETQ-Amsterdam-Chelsea-Boot-Black-Back.jpg', 'img/shoes/ETQ-Amsterdam-Chelsea-Boot-Black-Side-800x0-c-default.jpg');

INSERT INTO shoes (id, name, stock, description, price, color, size, style, gender, img1, img2, img3, img4)  VALUES (6, 'LOW 4 WHITE', 100, 'Low-top calf skin leather sneaker in White. Features a tonal leather trim, eyelets, lace-up closure and a tonal rubber cup sole unit. Full calf leather lining and insole. Comes in a branded box with a spare set of waxed laces.', 268.00, 'WHITE', 'EU 36 | US 03 | UK 02', 'LOW 4', 'M', 'img/shoes/etq-amsterdam-low-4-white-side.jpg', 'img/shoes/etq-amsterdam-low-4-white-front.jpg', 'img/shoes/etq-amsterdam-low-4-white-back.jpg', 'img/shoes/etq-amsterdam-low-4-white-side-800x0-c-default.jpg');

INSERT INTO shoes (id, name, stock, description, price, color, size, style, gender, img1, img2, img3, img4)  VALUES (7, 'LOW 2 IGUANA EMBOSSED BONE', 100, 'Low-top iguana embossed leather sneaker in Bone. Features a tonal leather trim and lace-up closure. Dark chrome eyelets and a white rugged rubber cup sole unit. Full calf leather lining and insole. Comes in a branded box with a spare set of waxed laces.', 268.00, 'GREY', 'EU 36 | US 03 | UK 02', 'LOW 2', 'F', 'img/shoes/etq-amsterdam-low-2-iguana-embossed-bone-side.jpg', 'img/shoes/etq-amsterdam-low-2-iguana-embossed-bone-front.jpg', 'img/shoes/etq-amsterdam-low-2-iguana-embossed-bone-back.jpg', 'img/shoes/etq-amsterdam-low-2-iguana-embossed-bone-side-800x0-c-default.jpg');

INSERT INTO shoes (id, name, stock, description, price, color, size, style, gender, img1, img2, img3, img4)  VALUES (8, 'LOW 3 GREEN CAMO', 100, 'Low-top rubberized leather sneaker with camo details on Green Camo. Features a tonal leather trim, lace-up closure and a white rugged rubber cup sole unit. Full calf leather lining and insole. Comes in a branded box with a spare set of waxed laces.', 280.00, 'GREEN', 'EU 36 | US 03 | UK 02', 'LOW 3', 'M', 'img/shoes/etq-amsterdam-low-3-green-camo-side.jpg', 'img/shoes/etq-amsterdam-low-3-green-camo-side.jpg', 'img/shoes/etq-amsterdam-low-3-green-camo-side.jpg', 'img/shoes/etq-amsterdam-low-3-green-camo-side-800x0-c-default.jpg');

INSERT INTO shoes (id, name, stock, description, price, color, size, style, gender, img1, img2, img3, img4)  VALUES (9, 'LOW 2 DATE RIBBED', 100, 'Low-top nubuck leather sneaker in Date. Features a tonal leather trim and lace-up closure as well as ribbed detailing. Dark chrome eyelets and a white rugged rubber cup sole unit. Full calf leather lining and insole. Comes in a branded box with a dust bag and a spare set of waxed laces.', 268.00, 'BROWN', 'EU 36 | US 03 | UK 02', 'LOW 2', 'M', 'img/shoes/etq-amsterdam-low-2-date-ribbed-side.jpg', 'img/shoes/etq-amsterdam-low-2-date-ribbed-front.jpg', 'img/shoes/etq-amsterdam-low-2-date-ribbed-back.jpg', 'img/shoes/etq-amsterdam-low-2-date-ribbed-side-800x0-c-default.jpg');

INSERT INTO shoes (id, name, stock, description, price, color, size, style, gender, img1, img2, img3, img4)  VALUES (10, 'LOW 2 CAPPUCCINO RIBBED', 100, 'Low-top nubuck leather sneaker in Capuccino. Features a tonal leather trim and lace-up closure as well as ribbed detailing. Dark chrome eyelets and a white rugged rubber cup sole unit. Full calf leather lining and insole. Comes in a branded box with a spare set of waxed laces.', 268.00, 'BROWN', 'EU 36 | US 03 | UK 02', 'LOW 2', 'F', 'img/shoes/etq-amsterdam-low-2-cappuchino-ribbed-side.jpg', 'img/shoes/etq-amsterdam-low-2-cappuchino-ribbed-front.jpg', 'img/shoes/etq-amsterdam-low-2-cappuchino-ribbed-back.jpg', 'img/shoes/etq-amsterdam-low-2-cappuchino-ribbed-side-800x0-c-default.jpg');




-- styles
----------------
-- CHELSEA BOOT
-- DERBY
-- HIGH 1
-- LOW 1
-- LOW 2
-- LOW 3
-- LOW 4
-- LOW 5
-- MID 1
-- MID 2

-- men's sizes
-- 6-15
--
-- womens sizes
-- 4-12

-- colors
--
-- GREEN
-- BLACK
-- BLUE
-- BROWN
-- GREY
-- RED
-- WHITE

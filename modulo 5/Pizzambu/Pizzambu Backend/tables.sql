-- Active: 1658093017990@@35.226.146.116@3306@silveira-21814397-joao-aguiar

CREATE TABLE Pizza (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    ingredients VARCHAR(1000) NOT NULL
);

CREATE TABLE PizzaOrders (
    orderID VARCHAR(255) PRIMARY KEY,
    itens VARCHAR (2000) NOT NULL
)
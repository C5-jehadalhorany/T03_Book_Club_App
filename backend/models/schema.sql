DROP DATABASE T03_Book_Club_App;

CREATE DATABASE T03_Book_Club_App;

USE T03_Book_Club_App;

CREATE TABLE roles(
    id INT AUTO_INCREMENT not null,
    role varchar(255)not null ,
    PRIMARY KEY (id)
);
CREATE DATABASE IF NOT EXISTS companybd;

USE companybd;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
    
)

DESCRIBE employee;

INSERT employee (name, salary) values ('Diana', 4000000);

SELECT * FROM employee WHERE id = 1

DELETE FROM employee WHERE id = 1
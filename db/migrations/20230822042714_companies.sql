-- migrate:up
CREATE TABLE companies (
  id integer PRIMARY KEY AUTO_INCREMENT,
  name varchar(100)
);

-- migrate:down
DROP TABLE companies;

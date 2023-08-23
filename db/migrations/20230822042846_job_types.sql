-- migrate:up
CREATE TABLE job_types (
  id integer PRIMARY KEY AUTO_INCREMENT,
  title varchar(50) NOT NULL
);

-- migrate:down
DROP TABLE job_types;

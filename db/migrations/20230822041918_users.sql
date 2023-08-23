-- migrate:up
CREATE TABLE users (
  id integer PRIMARY KEY AUTO_INCREMENT,
  email varchar(100) UNIQUE NOT NULL,
  username varchar(50) NOT NULL,
  password varchar(100) NOT NULL,
  phone_number varchar(50),
  birthday char(8),
  experience_year smallint,
  agreement1 tinyint,
  agreement2 tinyint,
  agreement3 tinyint,
  agreement4 tinyint,
  private_data_period char NOT NULL,
  withdraw tinyint NOT NULL DEFAULT false,
  created_at timestamp DEFAULT (current_timestamp),
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  withdraw_at timestamp NULL
);

-- migrate:down
DROP TABLE users;

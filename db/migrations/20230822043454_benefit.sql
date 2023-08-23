-- migrate:up
CREATE TABLE `benefit` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `job_posting_id` integer NOT NULL,
  `title` varchar(50) NOT NULL
);

-- migrate:down
DROP TABLE benefit;

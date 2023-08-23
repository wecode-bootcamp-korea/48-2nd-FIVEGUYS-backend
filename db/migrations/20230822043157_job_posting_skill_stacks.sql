-- migrate:up
CREATE TABLE job_posting_skill_stacks (
  id integer PRIMARY KEY AUTO_INCREMENT,
  job_posting_id integer NOT NULL,
  skill_stacks_id integer NOT NULL
);

-- migrate:down
DROP TABLE job_posting_skill_stacks;

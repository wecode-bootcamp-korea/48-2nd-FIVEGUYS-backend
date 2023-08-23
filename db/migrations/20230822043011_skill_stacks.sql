-- migrate:up
CREATE TABLE skill_stacks (
  id integer PRIMARY KEY,
  job_type_id integer NOT NULL,
  resume_id integer NOT NULL,
  title varchar(50) NOT NULL,
  image varchar(1000) NOT NULL
);

-- migrate:down
DROP TABLE skill_stacks;

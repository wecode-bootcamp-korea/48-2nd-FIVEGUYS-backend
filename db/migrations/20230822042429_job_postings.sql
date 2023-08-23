-- migrate:up
CREATE TABLE job_postings (
  id integer PRIMARY KEY AUTO_INCREMENT,
  company_id integer NOT NULL,
  role varchar(200) NOT NULL,
  qualifications varchar(1000) NOT NULL,
  preffered_skills varchar(1000) NOT NULL,
  benefits varchar(1000) NOT NULL,
  career varchar(200) NOT NULL,
  education varchar(200) NOT NULL,
  deadline varchar(200) NOT NULL,
  work_area varchar(200) NOT NULL,
  created_at timestamp NOT NULL DEFAULT (current_timestamp),
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- migrate:down
DROP TABLE job_postings;

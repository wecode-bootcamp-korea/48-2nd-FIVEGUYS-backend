-- migrate:up
ALTER TABLE job_posting_skill_stacks ADD (
  CONSTRAINT job_posting_skill_stacks_skill_stacks_fkey FOREIGN KEY (job_posting_id) REFERENCES skill_stacks (id)
);

-- migrate:down


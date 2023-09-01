const dataSource = require('./dataSource');

//all Applications 
const getAllApplications = async (userId) => {
  try {
    const [result] = await dataSource.query( 
      `
      SELECT
        u.username,
        c.name AS company_name,
        j.title,
        a.job_posting_id,
        a.resume_id,
        a.created_at,
        COUNT(job_posting_id)
      FROM
        users AS u
        LEFT JOIN applications AS a ON u.id = a.user_id
        LEFT JOIN job_postings AS j ON a.job_posting_id = j.id
        LEFT JOIN companies AS c ON j.company_id = c.id
      WHERE u.id = ? 
      GROUP BY u.id
      ORDER BY a.created_at DESC;
        `,
      [userId]
     );
    return result;
  } catch (err) {
    console.log(err)
    const error = new Error('dataSource Error');
    error.statusCode = 400;
    throw error;
  }
};

//Applications 
const getApplicationsByStatus = async (userId, status) => {
  try {
    const [result] = await dataSource.query( 
      `
      SELECT
        u.username,
        c.name AS company_name,
        j.title,
        a.job_posting_id,
        a.resume_id,
        a.created_at,
        COUNT(job_posting_id)
      FROM
        users AS u
        LEFT JOIN applications AS a ON u.id = a.user_id
        LEFT JOIN job_postings AS j ON a.job_posting_id = j.id
        LEFT JOIN companies AS c ON j.company_id = c.id
      WHERE status = ? AND u.id = ? 
      GROUP BY u.id
      ORDER BY a.created_at DESC;
        `,
      [status, userId]
     );
    return result;
  } catch (err) {
    console.log(err)
    const error = new Error('dataSource Error');
    error.statusCode = 400;
    throw error;
  }
};

const getApplicationsByPostId = async (userId, jobPostingId) => {
  try {
    const [result] = await dataSource.query( 
      `
      SELECT
        u.username,
        c.name AS company_name,
        j.title,
        a.job_posting_id,
        a.resume_id,
        a.created_at,
        COUNT(job_posting_id)
      FROM
        users AS u
        LEFT JOIN applications AS a ON u.id = a.user_id
        LEFT JOIN job_postings AS j ON a.job_posting_id = j.id
        LEFT JOIN companies AS c ON j.company_id = c.id
      WHERE j.id = ? AND u.id = ? 
      GROUP BY u.id
      ORDER BY a.created_at DESC;
        `,
      [jobPostingId, userId]
     );
    return result;
  } catch (err) {
    console.log(err)
    const error = new Error('dataSource Error');
    error.statusCode = 400;
    throw error;
  }
};

const createApplication = async (status, userId, jobPostingId) => {
    try {
      const result = await dataSource.query(
        `
          INSERT INTO applications (
            status,
            user_id,
            job_posting_id
          ) VALUES (
            ?,
            ?,
            ?
          )
        `,
        [ status, userId, jobPostingId ]
      );
  
      return result.insertId;
    } catch {
      const error = new Error('dataSource Error');
      error.statusCode = 400;
  
      throw error;
    }
  };

const updateApplication = async (status, userId, applicationId) => {
  try {
    const updatePost = await dataSource.query(
      `
        UPDATE applications
        SET 
          status=?
        WHERE id= ? AND user_id = ?
      `,
      [status, applicationId,  userId]
    );

    const updatedRows = updatePost.affectedRows;

    if (updatedRows !== 1)
      throw new Error('UNEXPECTED_NUMBER_OF_RECORDS_UPDATED');

    const [result] = await dataSource.query(
      `
      SELECT
        u.username,
        c.name AS company_name,
        j.title,
        a.job_posting_id,
        a.resume_id,
        a.created_at,
        COUNT(job_posting_id)
      FROM
        users AS u
        LEFT JOIN applications AS a ON u.id = a.user_id
        LEFT JOIN job_postings AS j ON a.job_posting_id = j.id
        LEFT JOIN companies AS c ON j.company_id = c.id
      WHERE status = ? AND u.id = ? AND a.id = ?
      GROUP BY u.id
      ORDER BY a.created_at DESC;
      `,
      [staus, userId, applicationId]
    );
    return result;
  } catch (err) {
    console.log(err)
    const error = new Error('dataSource Error');
    error.statusCode = 400;

    throw error;
  }
};

const createScrap = async (companyId, title, jobPostingId, prefferedSkills) => {
  try {
    const result = await dataSource.query(
      `
        INSERT INTO job_postings (
          companyId,
          title,
          jobPostingId,
          prefferedSkills
        ) VALUES (
          ?,
          ?,
          ?,
          ?
        )
      `,
      [companyId, title, jobPostingId, prefferedSkills]
    );

    return result.insertId;
  } catch {
    const error = new Error('dataSource Error');
    error.statusCode = 400;

    throw error;
  }
};


module.exports = {
  getAllApplications,
  getApplicationsByStatus,
  getApplicationsByPostId,
  updateApplication,
  createApplication,
  createScrap
};

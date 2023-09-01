const { myApplicationDao } = require('../models');
const { applicationStatus } = require('../enums')

//all application
const getAllApplications = async (user) => {
  return await myApplicationDao.getAllApplications(user.id);
};

//editing post
const getAllEdits= async (user) => {
  const status = applicationStatus.EDIT
  return await myApplicationDao.getApplicationsByStatus(user.id, status);
};

//applied done
const getAllPostApplications = async (user) => {
  const status = applicationStatus.APPLIED
  return await myApplicationDao.getApplicationsByStatus(user.id, status);
};
  
//approved application
const getAllApprovedApplications = async (user) => {
  const status = applicationStatus.APPROVED
  return await myApplicationDao.getApplicationsByStatus(user.id, status);
};

const updateApplication = async (status, userId, jobPostingId) => {
    const application = await myApplicationDao.getApplicationsByPostId(userId, jobPostingId);
    
      return await myApplicationDao.updateApplication(
        status ? status : application.status,
        userId,
        jobPostingId
      );
    };

//passed application
const passedApplications = async (user) => {
  const status = applicationStatus.PASSED
  return await myApplicationDao.getApplicationsByStatus(user.id, status);
};

//failed application
const failedApplications = async (user) => {
  const status = applicationStatus.FAILED
  return await myApplicationDao.getApplicationsByStatus(user.id, status);
};

const createApplication = async (status, userId, jobPostingId) => {
  return await myApplicationDao.createApplication(status, userId, jobPostingId);
};

const createScrap = async(companyId, title, jobPostingId, prefferedSkills) => {
  return await myApplicationDao.createScrap(companyId, title, jobPostingId, prefferedSkills)
};

module.exports = {
  getAllApplications,
  getAllEdits,
  getAllPostApplications,
  getAllApprovedApplications,
  passedApplications,
  failedApplications,
  updateApplication,
  createApplication,
  createScrap,
};

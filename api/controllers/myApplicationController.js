const { myApplicationService } = require('../services');
const { catchAsync } = require('../utils/error');

//all application
const getAllApplications = catchAsync(async (req, res) => {
  const user = req.user;
  const { jobPostingId } = req.params;
  const { status } = req.body;

  const edits = await myApplicationService.getAllApplications(user, jobPostingId, status);

  res.status(200).json({ data: edits });
});

//editing post
const getAllEdits = catchAsync(async (req, res) => {
  const user = req.user;
  const edits = await myApplicationService.getAllEdits(user);

  res.status(200).json({ data: edits });
});

//applied done
const getAllPostApplications = catchAsync(async (req, res) => {
    const user = req.user;
    const postApplication = await myApplicationService.getAllPostApplications(user);
  
    res.status(200).json({ data: postApplication });
  });

//approved application
const getAllApprovedApplications  = catchAsync(async (req, res) => {
    const user = req.user;
    const posts = await myApplicationService.getAllApprovedApplications(user);
  
    res.status(200).json({ data: posts });
  });

const updateApplication = catchAsync(async (req, res) => {
    const { status } = req.body;
    const { jobPostingId } = req.params;
    const userId = req.user.id;
  
    const post = await myApplicationService.updateApplication(status, userId, jobPostingId);
  
    res.status(200).json({ post });
  });

//passed application
const passedApplications  = catchAsync(async (req, res) => {
  const user = req.user;
  const posts = await myApplicationService.passedApplications(user);

  res.status(200).json({ data: posts });
});

//failed application
const failedApplications = catchAsync(async (req, res) => {
  const user = req.user;
  const posts = await myApplicationService.failedApplications(user);

  res.status(200).json({ data: posts });
});

// create application
const createApplication = catchAsync(async (req, res) => {
  const { status } = req.body;
  const userId = req.user.id;
  const jobPostingId = req.params;

  if ( !userId || !jobPostingId) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;

    throw error;
  }

  const insertId = await myApplicationService.createApplication(status, userId, jobPostingId);

  res.status(201).json({ insertId });
});

// create scrap
const createScrap = catchAsync(async (req, res) => {
  const { title } = req.body;
  const { prefferedSkills } = req.body;
  const {companyId} = req.params;
  const {jobPostingId} = req.params;

  if ( !companyId || !jobPostingId) {
    const error = new Error('KEY_ERROR');
    error.statusCode = 400;

    throw error;
  }

  const insertId = await myApplicationService.createScrap(companyId, title, jobPostingId, prefferedSkills);

  res.status(201).json({ insertId });
});

module.exports = {
  getAllApplications,
  getAllEdits,
  getAllPostApplications,
  getAllApprovedApplications,
  passedApplications,
  failedApplications,
  updateApplication,
  createApplication,
  createScrap
};

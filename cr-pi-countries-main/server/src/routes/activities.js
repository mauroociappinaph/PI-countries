const { Router } = require("express");
const {
  getActivities,
  postActivity,
} = require("../handlers/handlersActivities");

const { validatePostActivity } = require("../middleware/activitiesvalidate");

const activitiesRouter = Router();

activitiesRouter.post("/", validatePostActivity, postActivity);

activitiesRouter.get("/", getActivities);

module.exports = activitiesRouter;

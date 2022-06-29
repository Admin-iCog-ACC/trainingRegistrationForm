import { createApplication, getApplication } from './application.service.js';

export async function httpCreateApplication(req, res) {
  const response = await createApplication(req.body, req.user._id);
  console.log(response);
  return res.status(200).json(response);
}

export async function httpGetApplication(req, res) {
  const application = await getApplication(req.user._id);
  console.log(application);
  return res.status(200).jsn(application);
}

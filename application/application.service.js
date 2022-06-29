import { ErrorResponse } from '../_helpers/errorResponse.js';
import ApplicationModel from './application.model.js';

export async function createApplication(body, id) {
  await ApplicationModel.updateOne(
    { applicant: id },
    { ...body, applicant: id },
    { upsert: true }
  );
  return ApplicationModel.findOne({ applicant: id });
}

export async function getApplication(id) {
  const application = await ApplicationModel.findOne(
    { applicant: id },
    { _id: 0, __v: 0, createdAt: 0, updatedAt: 0, applicant: 0 }
  );
  if (!application) throw new ErrorResponse('Application not found', 404);
  return application;
}

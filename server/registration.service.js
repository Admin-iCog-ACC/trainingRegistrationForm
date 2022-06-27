import { ErrorResponse } from './errorResponse.js';
import UserModel from './registration.model.js';
import { sendEmail } from './mailSender.js';

export async function registerUser(body) {
  let user; 
  if (body.country === "International") {
    user= await UserModel.findOne({ email: body.email });
  }
  else{
    user =  await UserModel.findOne({ phone: body.phone});
  }
  
  if (user) throw new ErrorResponse('You have already registered', 400);
  if(body.country === "International"){
    const info = await sendEmail({
      subject: 'Registration Complete',
      email: body.email,
    });
    if (info.response.startsWith('250')){
      await UserModel.create({ ...body });
      return {
        message:
          'You have successfully registered. Please check you email for the next step.',
      };
    }
    else throw new ErrorResponse('Failed to register. Please try again later!', 400);
  }
  else{
    await UserModel.create({ ...body });
    return {
      message:
      'You have successfully registered. We will contact you for the next step!'
    }
  }
  }

 
  


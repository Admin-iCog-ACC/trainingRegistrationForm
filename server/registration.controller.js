import {registerUser} from './registration.service.js'

export async function httpRegisterUser(req, res) {
  console.log(req.body)
  res.status(200).json(await registerUser(req.body));
}
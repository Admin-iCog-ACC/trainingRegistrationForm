import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    country: {type:String,required: true},
    phone:  {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model('User', userSchema);

export default UserModel;
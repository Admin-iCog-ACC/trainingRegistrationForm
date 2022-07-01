import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect("mongodb+srv://root:FobBOLkAD7Mb4gfi@icogacc.lehlzdw.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Database connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

export default connectDatabase;

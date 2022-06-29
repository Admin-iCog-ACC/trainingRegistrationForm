
import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect('mongodb+srv://root:M2VUaNUJghUhOxvg@aysrhdatabase.oxbdbxm.mongodb.net/?retryWrites=true&w=majority',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected: $connect.connection.host");
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};

export default connectDatabase;









// const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
// mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
// mongoose.Promise = global.Promise;

// module.exports = {
//     User: require('../users/user.model')
// };


import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_DB_LOCAL,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected: ${connect.connection.host}");
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

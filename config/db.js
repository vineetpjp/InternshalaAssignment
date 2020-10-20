const mongoose = require('mongoose');

// const dbUrl = process.env.dbUrl || 'mongodb://localhost/internshala';
const dbUrl = `mongodb+srv://vineetpjp:kavitakavita@cluster0-ojy9m.mongodb.net/Internshala-assignment?retryWrites=true&w=majority`;

const connectDb = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log('database running.....');
  } catch (err) {
    console.log(err.message, "cann't connect to database");
    process.exit(1);
  }
};

mongoose.set('useFindAndModify', false);

module.exports = connectDb;

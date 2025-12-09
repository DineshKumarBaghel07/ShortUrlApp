import mongoose from "mongoose";


const connection = async (url) => {
  try {
    await mongoose.connect(url)
    console.log("DataBase is connected !");
  }
  catch (err) {
    console.log("Database  Not connect " + err);

  }

}

export default connection;
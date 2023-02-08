import { connect, set } from "mongoose";

export const connectDB = async () => {
  try {
    set("strictQuery", false);
    await connect("mongodb+srv://Sky032:Beatles032@cluster0.pgyhs8d.mongodb.net/?retryWrites=true&w=majority", { dbName: "ecommerce" });

    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

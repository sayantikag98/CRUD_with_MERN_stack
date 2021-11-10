import mongoose from "mongoose";
import dataSchema from "../data_schema/data.js";

const blogsSchema = mongoose.Schema(dataSchema);

export default mongoose.model("blog", blogsSchema);
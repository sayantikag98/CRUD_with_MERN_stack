import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/blogs.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;
const connectionString = process.env.CONNECTION_URI;

mongoose.connect(connectionString)
.then(() => {
    console.log("Connected to database");
    app.listen(PORT, () => {
        console.log(`Server starting at port ${PORT}`);
    });
})
.catch((err) => {
    console.log(err.message);
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors()); // without this line http request at "localhost:5000/blogs" from "localhost:3000" will be blocked by CORS policy
//  No 'Access-Control-Allow-Origin' header is present on the requested resource.

app.use("/", route);

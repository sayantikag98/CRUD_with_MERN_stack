import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/blogs.js";

const app = express();
const PORT = 5000;
const connectionString = `mongodb+srv://Sayantikag98:XXXXXXXXXXX@node-tutorial-yt.yawqt.mongodb.net/MERN-project-1?retryWrites=true&w=majority`;

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

app.use("/blogs", route);
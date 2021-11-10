import express from "express";
import {getAllBlogs, addBlog, getBlogById, deleteBlog, updateBlog} from "../controllers/blogs.js";

const route = express.Router();

route.get("/", getAllBlogs);

route.post("/", addBlog);

route.get("/:id", getBlogById);

route.delete("/:id", deleteBlog);

route.patch("/:id", updateBlog);

export default route;
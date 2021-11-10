import Blogs from "../models/blogs.js";

export const getAllBlogs = (req, res) => {
    Blogs.find()
    .then(response => {
        if(response.length === 0)
            res.send("No blog to display");
        else res.send(response);
    })
    .catch(err => {
        console.log(err.message);
    })
};

export const addBlog = (req, res) => {
    const blogs = new Blogs(req.body);
    blogs.save()
    .then(response => {
        res.send(`Blog with title ${response.title} added to the database`)
    })
    .catch(err => {
        console.log(err.message);
    })
};

export const getBlogById = (req, res) => {
    const id = req.params.id;
    Blogs.findById(id)
    .then(response => {
        if(!response)
            res.send(`No such blog with id ${id} exists in the database`);
        else 
            res.send(response);
    })
    .catch(err => {
        console.log(err.message);
    }) 
};

export const deleteBlog = (req, res) => {
    const id = req.params.id;
    Blogs.findByIdAndDelete(id)
    .then(response => {
        if(!response)
            res.send(`No such blod with id ${id} exists in the database`);
        else 
            res.send(`Blog with id ${id} deleted from database`);
    })
    .catch(err => {
        console.log(err.message);
    });
};

export const updateBlog = (req, res) => {
    const id = req.params.id;
    Blogs.findByIdAndUpdate(id, req.body)
    .then(response => {
        if(!response)
            res.send(`No such blog with id ${id} exists in the database`);
        else 
            res.send(`Blog with id ${id} updated in the database`);
    })
    .catch(err => {
        console.log(err.message);
    });
};
const posts = require("./posts.js");
const express = require("express");
const appBlog = express();
const port = 3000;

appBlog.get("/");

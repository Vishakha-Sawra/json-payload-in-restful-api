const express = require("express");
const bodyparser = require("body-parser");
const jsonfile = require("jsonfile");
const db = require("./db/db.json");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/posts", (req, res) => {
  res.json(db);
});

app.get("/post-by-id/:id", function (req, res) {
  const id = req.params.id;
  let post = db.find((post) => post.id == id);
  if (!post) {
    res.json({ Message: "No Post Found With This ID" });
  } else {
    res.json(post);
  }
});

app.get("/posts-by-title/:title", function (req, res) {
  const title = req.params.title;
  let post = db.find((post) => post.title == title);
  if (!post) {
    res.json({ Message: "Not Found Any Post Related to Your Title" });
  } else {
    res.json(post);
  }
});

app.get("/posts-by-tags/:tag", function (req, res) {
  const tag = req.params.tag;
  let posts = db.filter((post) => post.tags.includes(tag));
  if (!posts.length) {
    res.json({ Message: `No Posts Found Against This Tag ${tag}` });
  } else {
    res.json(posts);
  }
});

app.get("/posts-by-category/:category", function (req, res) {
  const category = req.params.category;
  let posts = db.filter((post) => post.category == category);
  if (!posts.length) {
    res.json({ Message: `No Posts Found In This Category ${category}` });
  } else {
    res.json(posts);
  }
});

app.post("/newpost", (req, res) => {
  const maxId = Math.max(...db.map((post) => post.id));
  const newPost = {
    id: maxId + 1,
    title: req.body.title,
    content: req.body.content,
    category: req.body.category,
    tags: req.body.tags.split(","),
  };
  db.push(newPost);
  jsonfile.writeFile("./db/db.json", db, (err) => {
    if (err) {
      console.error(err);
      res.json({ message: "Error writing to database" });
    } else {
      res.json({
        message: `Post added successfully! Your Post Id is ${newPost.id}`,
      });
    }
  });
});

app.put("/postupdate/:id", (req, res) => {
  let id = req.params.id;
  let post = db.find((post) => post.id == id);
  if (!post) {
    res.status(404).json({ message: "Not Found Any Post Related to Your ID" });
  } else {
    post.title = req.body.title;
    post.content = req.body.content;
    post.category = req.body.category;
    post.tags = req.body.tags.split(",");
    jsonfile.writeFile("./db/db.json", db, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Error writing to database" });
      } else {
        res.json({
          message: `Post updated successfully! Your Post Id is ${id} `,
        });
      }
    });
  }
});

app.delete("/deletepost/:id", (req, res) => {
  let id = req.params.id;
  let post = db.find((post) => post.id == id);
  if (!post) {
    res.status(404).json({ message: "Not Found Any Post Related to Your ID" });
  } else {
    let index = db.indexOf(post);
    db.splice(index, 1);
    jsonfile.writeFile("./db/db.json", db, (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Error writing to database" });
      } else {
        res.json({
          message: `Post deleted successfully! Your Post Id was ${id} `,
        });
      }
    }); 
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

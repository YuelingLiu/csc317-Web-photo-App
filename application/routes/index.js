var express = require("express");
var router = express.Router();
var isLoggedIn = require("../middleware/routeprotectors").userIsLoggedIn;
const {
  getRecentPosts,
  getPostById,
  getCommentsByPostId,
} = require("../middleware/postsmiddleware");
var db = require("../config/database");
/* GET home page. */

router.get("/", getRecentPosts, function (req, res, next) {
  res.render("index", { title: "CSC 317 App" });
});

router.get("/index", (req, res, next) => {
  res.render("index");
});

router.get("/login", (req, res, next) => {
  res.render("login", { title: "Log In" });
});

router.use("/postimage", isLoggedIn);
router.get("/postimage", (req, res, next) => {
  res.render("postimage", { title: "post an image" });
});

router.get("/registration", (req, res, next) => {
  res.render("registration", { title: "register" });
});

router.get("/posts/:id(\\d+)", getPostById, getCommentsByPostId, (req, res) => {
  res.render("imagepost", { title: `Post ${req.params.id}` });
});

module.exports = router;

/**
 * router.get(
  "/post/:id(\\d+)",
  getPostById,
  getCommentsByPostId,
  (req, res, next) => {
    module.exports = router;

    let baseSQL =
      "SELECT  u.username, p.title, p.description, p.photopath, p.created \
  FROM users u \
  JOIN posts p \
  ON  u.id=fk_userid \
  WHERE p.id=?;";

    let postId = req.params.id;
    db.execute(baseSQL, [postId]).then(([results, fields]) => {
      if (results && results.length) {
        let post = results[0];
        res.render("imagepost", { currentPost: post });
      } else {
        req.flash("error", "This is not the post you are looking for!");
        res.redirect("/");
      }
    });
  }
);

 * 

 * 
 * 
 */

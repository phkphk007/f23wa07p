var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("Mydata", { title: "P Hemanth Kumar" });
});

module.exports = router;

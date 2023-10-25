var express = require("express");
var router = express.Router();
var x = Math.random() * 100;
var y = Math.random() * 100;
/* GET home page. */
router.get("/", function (req, res, next) {
  var res1 = Math.acosh(x);
  var res2 = Math.log1p(x);
  var res3 = Math.tan(x);
  var res4 = Math.sqrt(x, y);
  res.send(`acosh applied to [${x}] is [${res1}]<br>
            log1p applied to [${x}] is [${res2}]<br>
            tan applied to [${x}] is [${res3}]<br>
            sqrt applied to [${x}, ${y}] is [${res4}]`);
});

module.exports = router;

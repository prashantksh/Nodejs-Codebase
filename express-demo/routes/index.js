var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  console.log(req.requestTime);

  //Using session
  if (req.session.secret) {
    console.log(req.session.secret);
  } else {
    req.session.secret = "A real secret";
    console.log("Just set the session");
  }

  res.render("index", { title: "Express" });
});

module.exports = router;

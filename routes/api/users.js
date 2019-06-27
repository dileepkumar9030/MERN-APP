const express = require("express");
const router = express.Router();

//@route    POST api/users
//@desc     Test route
//@access   Public
router.post("/", (req, res) => {
  console.log(req);

  res.send("dileep route");
});

module.exports = router;

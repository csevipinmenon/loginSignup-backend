const router = require("express").Router();
const ensureAuthentication = require("../middlewares/Auth");
router.get("/", ensureAuthentication, (req, res) => {
    console.log("__logged user___",req.user);
  res.status(200).json([
    {
      name: "mobile",
      price: 20000,
    },
    {
      name: "tv",
      price: 30000,
    },
  ]);
});

module.exports = router;

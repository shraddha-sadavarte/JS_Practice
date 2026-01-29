const express = require('express');
const router = express.Router();
const controller = require("../controllers/user.controller");
const auth = require("../middlewares/auth.middleware");

router.post("/register", controller.registerUser);
router.post("/login", controller.loginUser);
router.get("/profile", auth, (req,res) => {
    res.json({message: "Protected Route"});
})

module.exports = router;
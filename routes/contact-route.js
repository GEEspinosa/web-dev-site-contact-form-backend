const express = require("express");
const router = express.Router();

router.post("/contact", (req, res, next) => {
  try {
    const contactData = req.body;
    res.status(201).json({message: 'Contact data received', data: contactData});
  } catch (err) {
    next(err)
  }
});

module.exports = router

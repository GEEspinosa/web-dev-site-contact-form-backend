const express = require("express");
const router = express.Router();
const sendMail = require('../utils/emailService');

router.post("/contact", async (req, res, next) => {
  try {
    const {name, email, subject, text} = req.body;
    await sendMail({name, email, subject, text})
    res.status(201).json({message: 'Contact data received', data: {name, email, subject, text}});
  } catch (err) {
    next(err)
  }
});

module.exports = router

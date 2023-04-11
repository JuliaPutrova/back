const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  res.json("<h1>My back</h1>");
});

router.get("/:contactId", async (req, res, next) => {
  res.json({ message: "template message1" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message2" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message3" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message4" });
});

module.exports = router;

const express = require('express');

const { handleGenerateNewShortURL, redirectShortUrl, handleGetAnalytics } = require("../Controllers/url");

const validationToken = require("../middleware/validationToken")
const router = express.Router();

router.use(validationToken)
router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", redirectShortUrl);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;

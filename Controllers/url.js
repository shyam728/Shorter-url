const shortid = require("shortid");
const URL = require("../models/url");
const validUrl = require("valid-url");


const handleGenerateNewShortURL = async (req, res) => {
    const body = req.body;

    if (!body.url) {
        return res.status(400).json({ error: "URL is required" });
    }

    if (!validUrl.isWebUri(body.url)) {
        return res.status(400).json({ error: "Please enter a valid URL" });
    }

    const shortID = shortid();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        user_id: req.user.id,
    });

    return res.json({ id: shortID });
}


const redirectShortUrl = async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate(
            {
                shortId,
            },
            {
                $push: {
                    visitHistory: {
                        timestamp: Date.now(),
                    },
                },
            }
        );
        if (!entry) {
            // If no matching document is found, handle it accordingly
            return res.status(404).send('Short URL not found');
        }

        res.redirect(entry.redirectURL);
    } catch (err) {
        console.error("Error redirecting:", err);
        res.status(500).send("Internal Server Error");
    }
};

const handleGetAnalytics = async (req, res) => {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}


module.exports = { handleGenerateNewShortURL, redirectShortUrl, handleGetAnalytics };
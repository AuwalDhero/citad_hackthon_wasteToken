const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/generate-token", (req, res) => {
    const wasteAmount = req.body.wasteAmount;
    // Simple token generation logic (for demonstration purposes)
    const generatedToken = Math.floor(wasteAmount * 10); // Example: 10 units of waste = 100 tokens
    res.json({ generatedToken });
});

app.use(express.static("public")); // Serve the HTML and CSS files

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let availableTokens = 1000; // Example: Initial available tokens

app.post("/redeem-tokens", (req, res) => {
    const tokensToRedeem = req.body.tokensToRedeem;
    if (!isNaN(tokensToRedeem) && tokensToRedeem > 0) {
        if (availableTokens >= tokensToRedeem) {
            availableTokens -= tokensToRedeem;
            res.json({ message: `Successfully redeemed ${tokensToRedeem} tokens.` });
        } else {
            res.json({ message: "Insufficient tokens available for redemption." });
        }
    } else {
        res.json({ message: "Invalid tokens input." });
    }
});

app.use(express.static("public")); // Serve the HTML and CSS files

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.post("/report-waste", (req, res) => {
    const wasteType = req.body.wasteType;
    const location = req.body.location;
    const description = req.body.description;
    // In a real-world application, you would typically save this report to a database
    // Here, we're just sending a simple response
    res.json({ message: "Waste report submitted successfully." });
});

app.use(express.static("public")); // Serve the HTML and CSS files

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

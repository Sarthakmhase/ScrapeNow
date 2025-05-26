const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

const scrapeWebsite = require("./scraper");
const DataModel = require("./models/Data");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("API running");
});

// Changed route prefix to /api
app.post("/api/scrape", async (req, res) => {
  try {
    const data = await scrapeWebsite();

    console.log("Scraped Data:", data);

    if (!data || data.length === 0) {
      return res.status(400).json({ message: "No data scraped" });
    }

    await DataModel.insertMany(data);

    res.json({ message: "Scrape triggered and data saved" });
  } catch (error) {
    console.error("Error in /api/scrape:", error);
    res.status(500).json({ message: "Error occurred during scraping" });
  }
});

// Changed route prefix to /api
app.get("/api/data", async (req, res) => {
  try {
    const data = await DataModel.find().sort({ date: -1 });
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Error fetching data" });
  }
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

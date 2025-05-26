const axios = require("axios");
const cheerio = require("cheerio");

async function scrapeWebsite() {
  try {
    const { data } = await axios.get("https://news.ycombinator.com/");
    const $ = cheerio.load(data);

    const items = [];

    $(".athing").each((i, el) => {
      const title = $(el).find(".titleline a").text();
      const link = $(el).find(".titleline a").attr("href");

      if (title && link) {
        items.push({ title, link, date: new Date().toISOString() });
      }
    });

    return items;
  } catch (err) {
    console.error("Scrape error:", err.message);
    return [];
  }
}

module.exports = scrapeWebsite;

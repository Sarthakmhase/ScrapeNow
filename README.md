# ScrapeNow 🕵‍♂📊

A cloud-based admin panel that scrapes data from a public news source and displays it in a user-friendly dashboard. Built with the MERN stack, this project integrates on-demand web scraping, secure authentication, and cloud deployment.

---

## 🌐 Live Demo

- 🔗 Frontend: (https://client-sarthak-anil-mhases-projects.vercel.app/  )

- ⚙ Backend API: (https://scrapenow.onrender.com)

---

## 🔐 Demo Login Credentials

- Username: admin
- Password: admin123


---

## 📌 Features

- 🔐 *Login System* – Secure dummy authentication
- 🧲 *Web Scraper* – Scrapes headlines from [news.ycombinator.com](https://news.ycombinator.com)
- 📦 *Cloud Database* – MongoDB Atlas to persist scraped data
- 📊 *Admin Dashboard* – View scraped data in a paginated table
- 🔁 *Scrape Now Button* – Trigger scraping on demand
- ☁ *Cloud Deployed* – Fully hosted on Vercel (frontend) and Render (backend)

---

## 🛠 Tech Stack

*Frontend*  
- React.js  
- Tailwind CSS  
- Axios  

*Backend*  
- Node.js  
- Express.js  
- Cheerio (Web Scraper)  
- MongoDB (Atlas)  

*Deployment*  
- Vercel (Frontend)  
- Render (Backend)

---

## 🚀 How It Works

1. *User logs in* using the provided credentials.
2. *Dashboard loads* and fetches scraped data from MongoDB Atlas.
3. Clicking *“Scrape Now”* triggers the scraper which:
   - Fetches fresh headlines from Hacker News.
   - Saves new entries to the database.
4. The table *updates live* with the newly scraped data.

---

## 🧪 Local Development

```bash
# Clone repository
git clone https://github.com/Sarthakmhase/ScrapeNow.git

# Backend Setup
cd server
npm install
npm start

# Frontend Setup
cd client
npm install
npm start

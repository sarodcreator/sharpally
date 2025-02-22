//building the server

/*import express from"express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import Connectdb from "./utils/db.js";
import router from "./routes/route.js";
import companyRouter from "./routes/company-route.js"
import jobRoute from "./routes/job-route.js"
import applicationRoute from "./routes/application-route.js";

dotenv.config({})

const corOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
}

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors(corOptions));

app.use("/api/v1/user", router);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/applications", applicationRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    Connectdb();
    console.log(`Server running at port: ${PORT}`)
})
*/

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import Connectdb from "./utils/db.js";
import router from "./routes/route.js";
import companyRouter from "./routes/company-route.js";
import jobRoute from "./routes/job-route.js";
import applicationRoute from "./routes/application-route.js";
import nodemailer from "nodemailer";
import fetch from "node-fetch";
import cron from "node-cron";
import Subscriber from "./models/Subscriber.js"; // Create a model for storing subscribers

dotenv.config();

const corOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corOptions));

app.use("/api/v1/user", router);
app.use("/api/v1/company", companyRouter);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/applications", applicationRoute);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Fetch latest jobs from Remotive API
async function fetchJobs() {
  try {
    const response = await fetch("https://remotive.io/api/remote-jobs");
    const data = await response.json();
    return data.jobs.slice(0, 5); // Get the top 5 jobs
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}

// Send job alerts to subscribers
async function sendJobAlerts() {
  const jobs = await fetchJobs();
  if (jobs.length === 0) return console.log("No new jobs to send.");

  const jobList = jobs
    .map(
      (job) =>
        `<li><a href="${job.url}" target="_blank">${job.title} at ${job.company_name}</a></li>`
    )
    .join("");

  const subscribers = await Subscriber.find();
  if (subscribers.length === 0) return console.log("No subscribers found.");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: subscribers.map((sub) => sub.email),
    subject: "Latest Remote Jobs",
    html: `<h3>Here are the latest remote job openings:</h3><ul>${jobList}</ul>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.error("Error sending job alerts:", error);
    else console.log("Job alert emails sent:", info.response);
  });
}

// Schedule job alerts every day at 9 AM
cron.schedule("0 9 * * *", sendJobAlerts);

// API endpoint to subscribe for job alerts
app.post("/api/v1/subscribe", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required." });

  const exists = await Subscriber.findOne({ email });
  if (exists) return res.status(400).json({ error: "Already subscribed." });

  await new Subscriber({ email }).save();
  res.json({ message: "Subscription successful! You'll receive job alerts." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  Connectdb();
  console.log(`Server running at port: ${PORT}`);
});
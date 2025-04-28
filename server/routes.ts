import { Router } from 'express';
import nodemailer from 'nodemailer';
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const router = Router();
const reviews = new Map();

// Contact form route
router.post('/api/contact', async (req, res) => {
  const { name, place, email, query, to } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Place: ${place}
        Email: ${email}
        Query/Topic: ${query}
      `
    });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Reviews routes
router.post('/api/reviews/:productId', (req, res) => {
  const { productId } = req.params;
  const review = req.body;
  if (!reviews.has(productId)) {
    reviews.set(productId, []);
  }
  reviews.get(productId).push({
    ...review,
    date: new Date().toISOString()
  });
  res.json({ success: true });
});

router.get('/api/reviews/:productId', (req, res) => {
  const { productId } = req.params;
  res.json(reviews.get(productId) || []);
});

// Register routes helper
export async function registerRoutes(app: Express): Promise<Server> {
  app.use(router);
  const httpServer = createServer(app);
  return httpServer;
}

export default router;
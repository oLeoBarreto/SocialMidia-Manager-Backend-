const rateLimiter = require("express-rate-limit");

const rateLimit = rateLimiter({
  windowMs: 12 * 60 * 60 * 1000, // 12 hour duration in milliseconds
  max: 200,
  message: "Too many requests.",
  headers: true,
});

module.exports = rateLimit;

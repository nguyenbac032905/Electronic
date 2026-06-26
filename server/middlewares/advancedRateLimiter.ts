import rateLimit from "express-rate-limit";
export const productLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60, // Allow more requests for product viewing
  message: {
    error: 'Too many product requests, please try again later.',
    retryAfter: '1 minute'
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Too many product requests, please try again later.',
      retryAfter: '1 minute'
    });
  }
});
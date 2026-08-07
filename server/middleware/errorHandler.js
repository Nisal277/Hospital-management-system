// Centralized error handling middleware.
// Any error passed via next(err) or thrown in an async route (caught by express)
// ends up here instead of crashing the server or leaking stack traces to clients.
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Server Error",
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

export default errorHandler;

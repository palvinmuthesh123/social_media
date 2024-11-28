const jwt = require('jsonwebtoken');

// Middleware for Authentication
// const authenticate = (req, res, next) => {
//   const token = req.headers['authorization'];
//   if (!token) return res.status(401).json({ error: 'Access Denied' });

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) return res.status(403).json({ error: 'Invalid Token' });
//     req.user = user;
//     next();
//   });
// };
const authenticate = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(401).json({ error: 'Access Denied' });
    }
  
    const token = authHeader.split(' ')[1]; // Extract token from 'Bearer <token>'
    if (!token) {
      return res.status(401).json({ error: 'Token Missing' });
    }
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        console.error('JWT Verification Error:', err.message); // Add detailed logs
        return res.status(403).json({ error: 'Invalid Token' });
      }
      req.user = user; // Attach user to request
      next();
    });
  };

module.exports = authenticate;

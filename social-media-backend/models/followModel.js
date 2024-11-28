const db = require('../config/db');

exports.checkIfFollowExists = (followerId, followeeId, callback) => {
    const query = `
      SELECT 1 
      FROM follows 
      WHERE follower_id = ? AND followee_id = ?`;
  
    db.query(query, [followerId, followeeId], (err, results) => {
      if (err) return callback(err);
  
      // If results.length > 0, the follow relationship already exists
      callback(null, results.length > 0);
    });
};
  
exports.followUser = (followerId, followeeId, callback) => {
    const query = 'INSERT INTO follows (follower_id, followee_id) VALUES (?, ?)';
    db.query(query, [followerId, followeeId], callback);
};

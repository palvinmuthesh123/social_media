const db = require('../config/db');

exports.createPost = (userId, content, callback) => {
    const query = 'INSERT INTO posts (user_id, content) VALUES (?, ?)';
    db.query(query, [userId, content], callback);
};

// exports.getAllPosts = (offset, limit, callback) => {
//     const query = `
//     SELECT posts.id, posts.content, posts.likes, posts.user_id, posts.created_at, users.username
//     FROM posts
//     JOIN users ON posts.user_id = users.id
//     LIMIT ?, ?`;
//     db.query(query, [offset, limit], callback);
// };

exports.getAllPosts = (currentUserId, offset, limit, callback) => {
    const query = `
    SELECT 
        posts.id, 
        posts.content, 
        posts.likes, 
        posts.user_id, 
        posts.created_at, 
        users.username,
        EXISTS (
            SELECT 1 
            FROM follows 
            WHERE follows.follower_id = ? AND follows.followee_id = posts.user_id
        ) AS following
    FROM posts
    JOIN users ON posts.user_id = users.id
    LIMIT ?, ?`;
    
    db.query(query, [currentUserId, offset, limit], callback);
};

exports.likePost = (userId, postId, callback) => {
    const checkLikeQuery = `
      SELECT * FROM likes
      WHERE user_id = ? AND post_id = ?`;

    db.query(checkLikeQuery, [userId, postId], (err, results) => {
        if (err) return callback(err);

        if (results.length > 0) {
            // User already liked the post
            return callback(new Error('User already liked this post'));
        }

        // Insert into likes table
        const insertLikeQuery = `
        INSERT INTO likes (user_id, post_id) VALUES (?, ?)`;

        db.query(insertLikeQuery, [userId, postId], (err) => {
            if (err) return callback(err);

            // Increment likes count in posts table
            const updatePostQuery = `
          UPDATE posts
          SET likes = likes + 1
          WHERE id = ?`;

            db.query(updatePostQuery, [postId], (err) => {
                if (err) return callback(err);

                callback(null);
            });
        });
    });
};
const PostModel = require('../models/postModel');

exports.createPost = (req, res) => {
    const { content } = req.body;

    PostModel.createPost(req.user.id, content, (err) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json({ message: 'Post Created Successfully' });
    });
};

// exports.getPosts = (req, res) => {
//     const { page = 1, limit = 10 } = req.query;
//     const offset = (page - 1) * limit;

//     PostModel.getAllPosts(offset, parseInt(limit), (err, results) => {
//         if (err) return res.status(400).json({ error: err.message });
//         res.json(results);
//     });
// };

exports.getPosts = (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
    const userId = req.user.id; // Assuming current user's ID is available from authentication

    PostModel.getAllPosts(userId, offset, parseInt(limit), (err, results) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json(results);
    });
};

exports.likePost = (req, res) => {
    const { postId } = req.query;
    const userId = req.user.id;

    PostModel.likePost(userId, postId, (err) => {
        if (err) return res.status(400).json({ error: err.message });
        res.json({ message: 'Post liked successfully' });
    });
};

const FollowModel = require('../models/followModel');

exports.followUser = (req, res) => {
  const { id: followeeId } = req.params;
  const followerId = req.user.id;

  if (followerId === parseInt(followeeId)) {
    return res.status(400).json({ error: "You cannot follow yourself" });
  }

  FollowModel.checkIfFollowExists(followerId, followeeId, (err, exists) => {
    if (err) return res.status(400).json({ error: err.message });

    if (exists) {
      return res.status(400).json({ error: "You are already following this user" });
    }

    FollowModel.followUser(followerId, followeeId, (err) => {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ message: 'User followed successfully' });
    });
  });
};

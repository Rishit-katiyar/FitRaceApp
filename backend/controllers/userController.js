const User = require('../models/User');

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error('Get user by ID failed:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { username, bio, avatar } = req.body;
        const user = await User.findByIdAndUpdate(req.params.id, { username, bio, avatar }, { new: true });
        res.json(user);
    } catch (error) {
        console.error('Update user failed:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Delete user failed:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const express = require('express');
const router = express.Router();

// Sample user data
const users = [
    { id: 1, name: 'Alice', age: 22 },
    { id: 2, name: 'Bob', age: 25 },
    { id: 3, name: 'Charlie', age: 28 },
    { id: 4, name: 'Diana', age: 21 },
];

// GET /user  → returns all users
router.get('/', (req, res) => {
    res.json({ message: 'User list', users: users });
});

// GET /user/:id  → returns single user by id
router.get('/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.json({ message: 'User found', user: user });
    } else {
        res.status(404).json({ error: `No user found with ID: ${userId}` });
    }
});

module.exports = router;
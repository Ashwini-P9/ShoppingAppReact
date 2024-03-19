const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'your-secret-key'; // Replace with a secure key in a real-world scenario

app.use(bodyParser.json());

// Dummy user data (replace with a database in a real-world scenario)
const users = [
  { id: 1, username: 'user1', password: 'password1' },
  { id: 2, username: 'user2', password: 'password2' },
];

// Login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Generate a token
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

    // Send the token to the client
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Protected route
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route!' });
});

// Middleware to authenticate the token
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });

    req.user = user;
    next();
  });
}

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

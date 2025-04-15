const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/users', (req, res) => {
  const users = [
    { id: "1", name: "Alice", email: "alice@example.com", status: "active" },
    { id: "2", name: "Bob", email: "bob@example.com", status: "inactive" },
  ];
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`API is running at http://localhost:${PORT}`);
});

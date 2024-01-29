const express = require('express');
const cors = require('cors');
const app = express();
const port = 8081;
app.use(cors());

app.post('/api/auth/login', (req, res) => {
    res.json({ message: 'Connexion réussie' });
});


app.listen(port, () => {
    console.log(`Serveur écoutant sur le port ${port}`);
});

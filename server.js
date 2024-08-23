const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/add-link', (req, res) => {
    const { url, description } = req.body;

    // Generate a unique ID
    const id = Math.random().toString(36).substr(2, 9);

    // Load the existing links from links.json
    let links = JSON.parse(fs.readFileSync('links.json', 'utf8'));

    // Add the new link
    links[id] = url;

    // Save the updated links back to links.json
    fs.writeFileSync('links.json', JSON.stringify(links, null, 2));

    // Respond with the generated ID
    res.json({ id });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

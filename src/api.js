const express = require('express');
const app = express();

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.get('/version', (req, res) => res.json({ version: '1.0.0' }));
app.get('/users', (req, res) => res.json({ users: [] }));

module.exports = app;

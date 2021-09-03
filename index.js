const express = require('express');
const fs = require("fs");
const app = express();

// Using app.get instead of express.static, so files upload instantly
app.get("/img/:path", async (req, res) => {
  if (!fs.existsSync(__dirname + `/img/${req.params.path}`)) return res.sendStatus(404);
  
  res.setHeader("Content-Type", "image/png");
  res.send(fs.readFileSync(__dirname + `/img/${req.params.path}`));
});

app.get('/', async (req, res) => {
const images = fs.readdirSync(__dirname + "/img").map(img => `https://forza-api.tk/img/${img}`);
  const randomimage = images[Math.floor(Math.random() * images.length)];
  res.header("Access-Control-Allow-Origin", "*");
  res.json({
    image: randomimage
  });
});

app.listen(80);

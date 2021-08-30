const express = require('express')
const app = express()
  app.get('/', async (req, res) => {
    const images = [
      "https://images.forza-api.tk/AUDI_RS6_2009.png",
      "https://images.forza-api.tk/BMW_M4_COUPE.png",
      "https://images.forza-api.tk/BMW_M5_2018.png",
      "https://images.forza-api.tk/FORD_MUSTANG_GT_2018.png",
      "https://images.forza-api.tk/LAMBORGHINI_GALLARDO.png",
      "https://images.forza-api.tk/TOYOTA_SUPRA_RZ_1998.png"
    ]
    const randomimage = images[Math.floor(Math.random() * images.length)]
    res.header("Access-Control-Allow-Origin", "*")
    res.json({
      image: randomimage
    })
  })


  app.listen(80)

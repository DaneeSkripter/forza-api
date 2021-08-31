const express = require('express')
const app = express()
  app.get('/', async (req, res) => {
    const images = [
      "https://images.forza-api.tk/AUDI_RS6_2009.png",
      "https://images.forza-api.tk/BMW_M4_COUPE.png",
      "https://images.forza-api.tk/BMW_M5_2018.png",
      "https://images.forza-api.tk/FORD_MUSTANG_GT_2018.png",
      "https://images.forza-api.tk/LAMBORGHINI_GALLARDO.png",
      "https://images.forza-api.tk/TOYOTA_SUPRA_RZ_1998.png",
      "https://images.forza-api.tk/AUDI_RS7_SPORTBACK.png",
      "https://images.forza-api.tk/ASCARI_KZ1R_2012.png",
      "https://images.forza-api.tk/FERRARI_FXX_K_2014.png",
      "https://images.forza-api.tk/LAMBORGHINI_HURACÁN_LP_610-4_2014.png",
      "https://images.forza-api.tk/JAGUAR_F-TYPE_R_COUPÉ_2015.png",
      "https://images.forza-api.tk/MERCEDES-AMG_GT_R_2017.png",
    ]
    const randomimage = images[Math.floor(Math.random() * images.length)]
    res.header("Access-Control-Allow-Origin", "*")
    res.json({
      image: randomimage
    })
  })


  app.listen(80)

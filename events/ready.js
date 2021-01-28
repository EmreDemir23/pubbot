
const Moment = require('moment')
const Discord = require('discord.js')
module.exports = client => {
  
  const aktiviteListesi = [
    
    'Nefer Team #Bakımda',
    'Yıkılmaz Krallık?xd'
  ]

  client.user.setStatus('idle')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 4000)
}
 


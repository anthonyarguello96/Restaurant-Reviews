//Service Worker Resgistration
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('/sw.js')
    .then(function(reg){
      console.log('SW Regitered', reg)
    })
    .catch(function(err){
      console.log('SW Registration Failed!', err)
    })
}

 // Functions 
 function getWeather(apikey, zip, tempEl, descEl) {
    // Replace this with your own API key!
    const apiKey = '1c4e590826ba3ca40333880acb9b0ddd'
    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    fetch(path)
      .then(res => res.json())
      .then(json => {
        tempEl.innerHTML = json.main.temp
        descEl.innerHTML = json.weather[0].description
      })
      .catch(err => console.log(err.message))
  }

  export { getWeather }
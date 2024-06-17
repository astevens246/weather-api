 // Functions 
 async function getWeather(apikey, zip) {
    // Replace this with your own API key!
    const apiKey = '1c4e590826ba3ca40333880acb9b0ddd'
    const units = 'imperial'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
    
    const response = await fetch(path)
    const data = await response.json()

    // new object iwth more descriptive names
    const weatherData = {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };

    console.log(weatherData)
    return weatherData;

  }

  export { getWeather }

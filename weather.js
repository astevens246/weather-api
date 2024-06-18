 // Functions 
    // Replace this with your own API key!

    // new object iwth more descriptive names
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
    const API_KEY = '1c4e590826ba3ca40333880acb9b0ddd';
    
    async function getWeatherByZip(zip, unit = 'imperial') {
      const url = `${BASE_URL}zip=${zip}&units=${unit}&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return formatWeatherData(data);
    }
    
    async function getWeatherByCity(city, unit = 'imperial') {
      const url = `${BASE_URL}q=${city}&units=${unit}&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return formatWeatherData(data);
    }
    
    async function getWeatherByGeo(coords, unit = 'imperial') {
      const url = `${BASE_URL}lat=${coords.lat}&lon=${coords.lon}&units=${unit}&appid=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return formatWeatherData(data);
    }
    
    function formatWeatherData(data) {
      return {
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
      };

      console.log(formatWeatherData(data));
    }
    
    export { getWeatherByZip, getWeatherByCity, getWeatherByGeo };
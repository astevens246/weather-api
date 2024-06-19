class Weather {
  constructor(apikey) {
    this.apikey = apikey;
    this.BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?';
  }

  async getWeatherByZip(zip, unit = 'imperial') {
    const url = `${this.BASE_URL}zip=${zip}&units=${unit}&appid=${this.apikey}`;
    const response = await fetch(url);
    const data = await response.json();
    return this.formatWeatherData(data);
  }

  async getWeatherByCity(city, unit = 'imperial') {
    const url = `${this.BASE_URL}q=${city}&units=${unit}&appid=${this.apikey}`;
    const response = await fetch(url);
    const data = await response.json();
    return this.formatWeatherData(data);
  }

  async getWeatherByGeo(coords, unit = 'imperial') {
    const url = `${this.BASE_URL}lat=${coords.lat}&lon=${coords.lon}&units=${unit}&appid=${this.apikey}`;
    const response = await fetch(url);
    const data = await response.json();
    return this.formatWeatherData(data);
  }

  async getWeatherById(id, unit = 'imperial') {
    const url = `${this.BASE_URL}id=${id}&units=${unit}&appid=${this.apikey}`;
    return this.fetchWeatherData(url);
  }


  getPeriodicWeatherUpdates(zip, callback, interval, unit = 'imperial') {
    setInterval(async () => {
      const weatherData = await this.getWeatherByZip(zip, unit);
      callback(weatherData);
    }, interval);
  }

  formatWeatherData(data) {
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };
  }
}

const weather = new Weather('1c4e590826ba3ca40333880acb9b0ddd');
weather.getPeriodicWeatherUpdates('94109', data => console.log(data), 60000);
export default Weather;
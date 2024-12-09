// API key: c024096ee45bdcbecaff69be9aaad340

const axios = require('axios');
const apikey = "c024096ee45bdcbecaff69be9aaad340"
const lat = "22.302711"
const lon = "114.177216"

axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}6&appid=${apikey}`)
  .then(function (response) {
    // handle success
    // console.log(response.data.main);
    // console.log(response.status)
    // Today's temperature is X degree celsuis. Humidityis X .
    let tempInC = ((response.data.main.temp - 273.15 )).toFixed(2)
    console.log(`Today's temperature is ${tempInC} degree celsuis. Humidity is ${response.data.main.humidity}%.`)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
    console.log("Data request done!")
  });

  console.log("Thank you for listening")
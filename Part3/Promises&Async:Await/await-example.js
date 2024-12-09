// API key: c024096ee45bdcbecaff69be9aaad340

const axios = require('axios');
const apikey = "c024096ee45bdcbecaff69be9aaad340"
const lat = "22.302711"
const lon = "114.177216"

const getData = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}6&appid=${apikey}`)
    let tempInC = ((response.data.main.temp - 273.15 )).toFixed(2)
    console.log(`Today's temperature is ${tempInC} degree celsuis. Humidity is ${response.data.main.humidity}%.`)
    console.log("Thank you for listening")
}
getData()
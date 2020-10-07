
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const temperatureValue = document.querySelector('#temp')
const humidityValue = document.querySelector('#hum')
const weatherdescValue = document.querySelector('#weatherdesc')
const precipValue = document.querySelector('#precip')
const Wtemperature = document.querySelector('.weatherForecastTemperature')
var wIcon = document.querySelector("img[src='../imgs/sun.png']");

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
         response.json().then((data) => {
             if (data.error) {

                 temperatureValue.textContent = data.error
                 humidityValue.textContent = ''
             } else {
                weatherdescValue.textContent = 'Weather: ' + data.forecast.weather_description
                temperatureValue.textContent = 'Temperature: ' + data.forecast.temperature + " F"
                humidityValue.textContent = 'Humidity: ' + data.forecast.humidity
                precipValue.textContent = 'Precipitation: ' + data.forecast.precipitation
                Wtemperature.textContent = data.forecast.temperature + " F"
                if (data.forecast.weather_description.includes("Sunny")){
                    wIcon.src = '../imgs/sun.png'
                }else if (data.forecast.weather_description.includes("Partly cloudy")){
                    wIcon.src ='../imgs/pcloudy.png'
                }else if (data.forecast.weather_description.includes("Cloud")){
                    wIcon.src ='../imgs/cloud.png'
                }else if (data.forecast.weather_description.includes("Mist") || (data.forecast.weather_description.includes("Haze") || (data.forecast.weather_description.includes("Fog")))){
                    wIcon.src ='../imgs/mist.png'
                }else if (data.forecast.weather_description.includes("rain") || (data.forecast.weather_description.includes("Rain"))) {
                    wIcon.src ='../imgs/rainy.png'
                }else{
                    wIcon.src = data.forecast.icon
                }
             }
         })
     })
 })
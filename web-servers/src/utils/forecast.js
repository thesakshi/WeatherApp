const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9b33be785a9e2804a5bd376168f0a9bc&query=' + longitude + ',' + latitude +  '&units=f'
    
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback("Network Issues!", undefined)
        }else if (body.error) {
            callback('Unable to find the location', undefined)
        }else{
            callback(undefined, {
                temperature: body.current.temperature,
                icon: body.current.weather_icons[0],
                weather_description: body.current.weather_descriptions[0],
                humidity: body.current.humidity,
                precipitation: body.current.precip
            })
        
        }

    })

}

module.exports = forecast
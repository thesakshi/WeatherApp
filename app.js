const request = require('request')
const geoCode = require('./utils/geoCode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address){
    console.log("Please Provide an Address!")
}else{
    geoCode(address, (error, {latitude, longitude, location}) => {
        if (error){
            return console.log(error)
        }
    
        forecast(latitude, longitude, (error, forecastdata) => {
            if (error){
                return console.log(error)
            }
    
            console.log(location)
            console.log(forecastdata)
          })
    
    })
    
}

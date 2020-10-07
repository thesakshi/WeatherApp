const request = require('request')

const geoCode = (address, callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidGhlLXNha3NoaSIsImEiOiJja2ZkemMwbDMwNWpkMnVzaHJ6aHp3NDllIn0.k3kOZjj9_qLB_EvI43Z8Pg'

    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to Location Services!', undefined)
        }else if (body.features.length === 0){
            callback('Unable to find the co-ordinates for your location', undefined)
        }else{
            
            callback(undefined, {
                latitude:body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
})
}

module.exports = geoCode
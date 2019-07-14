const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address.')
} else {
    geocode(address, (error, { latitude, longitude, location }) => {

        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    })
}













// const url = 'https://api.darksky.net/forecast/1837859c15d56cdce325329a143384ab/37.8267,-122.4233'

// request({url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location')
//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain')
//     }
// })

// Geocoding
// Address -> Lat/Long -> Weather

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGRlbWFuYmV5IiwiYSI6ImNqdjg5bmJuNjBvZnozeW81c2Z1a2tnaTcifQ.VGfAG6v33hRLl0ZxEydjMw&limit=1'

// request({url: geocodeUrl, json: true}, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to location service!')
//     } else if (response.body.features.length === 0) {
//         console.log('That is not a valid location.')
//     } else {
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })

const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/1837859c15d56cdce325329a143384ab/' + latitude + ',' + longitude

    request({url: url, json: true}, (error, { body }) => {
        if (error) {
            callback('Not able to contact to location services!')
        } else if (body.error) {
            callback('Not a location. Try another search.')
        } else {
            callback(undefined, console.log(body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain'))
        }
    })
}

module.exports = forecast
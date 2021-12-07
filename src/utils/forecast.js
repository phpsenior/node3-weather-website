const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0928ce94d3357b90b309e42751da6af8&query='+latitude+','+longitude

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
            return
        }


        if(body.error) {
            callback('Unable to find location')
            return
        }

        callback(undefined, {
            description: body.current.weather_descriptions[0],
            temperature: body.current.temperature,
            feels_like: body.current.feelslike
        })
    })
}

module.exports = forecast
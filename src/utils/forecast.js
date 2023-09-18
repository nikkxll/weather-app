import request from "request"

export const forecast = (latitude, longtitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=826c2c33e15201c95654686362d5b270&query='
     + encodeURIComponent(latitude)
     + ',' + encodeURIComponent(longtitude);
    request({ url, json: true }, (e, { body }) => {
        if (e) {
            callback('Unable to connect!', undefined)
        } 
        else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,
                'It is currently ' + 
                body.current.weather_descriptions +
                '. The temperature is ' +
                body.current.temperature +
                ' degrees out in ' + 
                body.location.name + 
                '. It feels like ' + 
                body.current.feelslike + 
                ' degrees.');   
        }
    })
}
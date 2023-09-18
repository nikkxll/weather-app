import request from "request"

export const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' 
    + encodeURIComponent(address) 
    + '.json?access_token=pk.eyJ1Ijoibmlra3hsIiwiYSI6ImNsbTljeWNqcDBpODQzbG14ejRjYzl5enEifQ.A6E-IGpIH_JHVQOJrmI4ow'
    request({ url, json: true }, (e, { body }) => {
        if (e) {
            callback('Unable to connect to loc services!', undefined)
        } else if (body.features.length === 0) {
            callback({
                error: 'Unable to find location'
            }, undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longtitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}
'use strict';

const GOOGLE_MAPS_API_KEY = 'AIzaSyCXvmVx1Px1Gpv8yKWQzW1N3ySfjyoFIEs';
const googleMaps = require('@google/maps');

class GoogleMapsService {

    constructor() {
        this.googleMapsClient = googleMaps.createClient({
            Promise: Promise,
            key: GOOGLE_MAPS_API_KEY
        });
    }

    async directions(mode, params) {
        let response = await this.googleMapsClient.directions({
                origin: params.origin,
                destination: params.destination,
                mode: mode,
                transit_mode: ['bus', 'rail'],
                // transit_routing_preference: 'fewer_transfers',
            })
            .asPromise();

        return response.json;
    }
}

module.exports = new GoogleMapsService();
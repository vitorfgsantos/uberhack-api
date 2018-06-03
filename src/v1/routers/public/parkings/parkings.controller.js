'use strict';

const Parking = require('../../../../models/parkingModel').Parking;

class ParkingsController {

    async getParkingsNearColdAreas(ctx) {
        let params = ctx.request.query;
        return await Parking.find({});
    }

}

module.exports = new ParkingsController();
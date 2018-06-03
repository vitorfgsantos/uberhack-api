'use strict';

const GoogleMapsService = require('../../../services/google-maps-service');
const UberService = require('../../../services/uber.service');

class RoutersController {

    async getRoutersByMaps(ctx) {
        let params = ctx.request.query;
        return await GoogleMapsService.directions(ctx.params.mode, params);
    }

    async getRoutersByUber(ctx) {
        let params = {
            origin: ctx.request.query.origin.split(', '),
            destination: ctx.request.query.destination.split(', ')
        };

        return await UberService.getPriceForRouteAsync(params);
    }

}

module.exports = new RoutersController();
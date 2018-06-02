'use strict';

// const Router = require('../../../../models/vacancyModel').Router;
const GoogleMapsService = require('../../../services/google-maps-service');

class RoutersController {

    async getRouters(ctx) {
        let params = ctx.params;

        params = {
            origin: 'Praia Grande, SP',
            destination: 'Santos, SP'
        };
        
        return await GoogleMapsService.directions(this, {});
    }

}

module.exports = new RoutersController();

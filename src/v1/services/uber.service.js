'use strict';

const Uber = require('node-uber');

class UberService {

    constructor() {
        this.uber = new Uber({
            client_id: 'H_ZhOli-BqyimQUNstPRYvlezMOaPQ7a',
            client_secret: 'Sl6CQKPO1HEQNZrp1TdLLxvP2RuEyWlndtoygZXV',
            server_token: 'jlaI71u2JzOTxQe5EGcFADjGz4Oj4SBFTSW3y1nL',
            redirect_uri: 'https://uberhack-api.herokuapp.com/v1/uber/callback',
            name: 'KA.eyJ2ZXJzaW9uIjoyLCJpZCI6Inozb1JEK1VTU2kyRTA2RDF0Yko2blE9PSIsImV4cGlyZXNfYXQiOjE1MzA1OTIyMDgsInBpcGVsaW5lX2tleV9pZCI6Ik1RPT0iLCJwaXBlbGluZV9pZCI6MX0.2ngmaz08VE1tKPXxCjTwcPe_9bglVgabHReHWT-p3EE',
            language: 'pt_BR',
            // sandbox: true,
        });
    }

    async getPriceForRouteAsync(params) {
        let response = await this.uber.estimates.getPriceForRouteAsync(params.origin[0], params.origin[1], params.destination[0], params.destination[1])
        return response.prices;
    }
}

module.exports = new UberService();
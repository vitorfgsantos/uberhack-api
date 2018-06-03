'use strict';

class HeatAreasController {

    async getHeatAreas(ctx) {
        let params = ctx.request.query;
        return [
            [-23.542308, -46.632372],
            [-23.542511, -46.650612],
            [-23.542811, -46.652612],
            [-23.542351, -46.651552],
        ];
    }

}

module.exports = new HeatAreasController();
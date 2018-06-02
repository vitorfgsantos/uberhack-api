'use strict';

class ErrorService {

    createError(code, details) {
        switch (code) {
        case 1:
            throw {
                code,
                message: 'Missing Parameters',
                details,
                status: 400
            };
        case 2:
            throw {
                code,
                message: 'Update is not allowed',
                details,
                status: 400
            };
        default: throw new Error('Unknown error');
        }
    }

    handleError(ctx, error) {
        if (error.code) {
            ctx.status = error.status;
            ctx.body = {
                code: error.code,
                message: error.message,
                details: error.details
            };
        } else
            ctx.throw(500, error.message);
    }
}

module.exports = new ErrorService();

class ExpressError extends Error{
    constructor(statusCode, messgage){
        super();
        this.statusCode=statusCode;
        this.message  = message;

    }
}

module.exports = ExpressError;
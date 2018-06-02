var port = process.env.MONGO_PORT || 27017;

var connection = process.env.MONGO_HOST || 'mongodb://localhost:' + port + '/uberhack';

console.log(connection);
const options = {
    useMongoClient: true,
    poolSize: 5,
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500
};

module.exports = () => ({
    connection,
    options
});

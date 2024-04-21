const controller = require('./controller/index');

module.exports = function (app) {
    app.get('/chorPolice/getCities', controller.getCities);
    
    app.get('/chorPolice/getVehicles', controller.getVehicles);

    app.post('/chorPolice/startGame', controller.startGame);
};
'use strict';

const { CITIES, VEHICLES } = require('../constants');

const controller = {
    getCities: async function (req, res) {
        try {

            const response = {
                success: 1,
                data: CITIES
            };
            return res.send(response);

        } catch (error) {
            console.log(error);
            const response = {
                success: 0,
                error: error
            };
            return res.send(response);
        }
    },

    getVehicles: async function (req, res) {
        try {
            const response = {
                success: 1,
                data: VEHICLES
            };
            return res.send(response);
        } catch (error) {
            console.log(error);
            const response = {
                success: 0,
                error: error
            };
            return res.send(response);
        }
    },

    startGame: async function (req, res) {
        try {
            const intialGameState  = req.body;

            const fugitiveLocation = Math.floor(Math.random() * (CITIES.length));
            const fugitiveCity = CITIES[fugitiveLocation].name;
            const matchLocation = intialGameState.length > 0 && intialGameState.find((val)=>(val.city === fugitiveCity))

            let fugitiveFound = 0;
            if(matchLocation != undefined){
                matchLocation.isLocated = 1 
                fugitiveFound = 1
            }
            
            const response = {
                success: 1,
                fugitiveLocation: fugitiveCity,
                isFutgitiveFound: fugitiveFound,
                data: intialGameState
            }
            return res.send(response)

        } catch (error) {
            console.log(error);
            const response = {
                success: 0,
                error: error
            }
            return res.send(response)
        }
    }
};

module.exports = controller;
class DBAccess{
    
    getAllCars(){
        return new Promise((resolve,reject)=>{
            const dummyData = [{"carId":1,"brand":"Opel","model":"Adam","year":2019,"price":15.0,"category":"Economic","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":false},
            {"carId":2,"brand":"Volkswagen","model":"UP!","year":2018,"price":15.0,"category":"Economic","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":false},
            {"carId":3,"brand":"Fiat","model":"500","year":2018,"price":17.0,"category":"Economic","seats":4,"doors":3,"automaticGearbox":false,"automaticAC":true},
            {"carId":4,"brand":"Citroën","model":"DS3","year":2016,"price":17.0,"category":"Economic","seats":5,"doors":3,"automaticGearbox":true,"automaticAC":false},
            {"carId":5,"brand":"Ford","model":"Fiesta","year":2018,"price":17.0,"category":"Economic","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true},
            {"carId":6,"brand":"Renault","model":"Clio","year":2018,"price":17.0,"category":"Economic","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true},
            {"carId":7,"brand":"Volkswagen","model":"Polo","year":2016,"price":13.0,"category":"Economic","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":false},
            {"carId":8,"brand":"Volkswagen","model":"Golf","year":2016,"price":17.0,"category":"Compact","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true},
            {"carId":9,"brand":"Alfa Romeo","model":"Gulietta","year":2016,"price":18.0,"category":"Compact","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":false},
            {"carId":10,"brand":"Audi","model":"A3 Sportback","year":2018,"price":17.0,"category":"Compact","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true},
            {"carId":11,"brand":"Seat","model":"Toledo","year":2016,"price":17.0,"category":"Compact","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":false},
            {"carId":12,"brand":"Fiat","model":"Doblo","year":2017,"price":19.0,"category":"Minivan","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":false},
            {"carId":13,"brand":"Citroën","model":"Berlingo","year":2014,"price":20.0,"category":"Minivan","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true},
            {"carId":14,"brand":"Mercedes Benz","model":"Vito","year":2015,"price":23.0,"category":"Minivan","seats":9,"doors":5,"automaticGearbox":false,"automaticAC":false},
            {"carId":15,"brand":"Seat","model":"Leon","year":2013,"price":21.0,"category":"Family","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true},
            {"carId":16,"brand":"Ford","model":"Focus","year":2015,"price":20.0,"category":"Family","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true},
            {"carId":17,"brand":"Ford","model":"C-Max","year":2015,"price":20.0,"category":"Family","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true},
            {"carId":18,"brand":"Renault","model":"Scenic","year":2015,"price":20.0,"category":"Family","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true},
            {"carId":19,"brand":"Nissan","model":"Juke","year":2017,"price":19.0,"category":"SUV","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true},
            {"carId":20,"brand":"Land Rover","model":"Range Rover Evoque","year":2013,"price":18.0,"category":"SUV","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true},
            {"carId":21,"brand":"Volkswagen","model":"Touareg","year":2018,"price":25.0,"category":"SUV","seats":5,"doors":5,"automaticGearbox":true,"automaticAC":true}]

            resolve(dummyData);
        })
    }
}

export default DBAccess;
class DBAccess{
    
    getAllCars(){
        return new Promise((resolve,reject)=>{
            const dummyData = 
            [{"carId":3,"brand":"Fiat","model":"500","year":2018,"price":17.0,"category":"Economic","seats":4,"doors":3,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://c4d709dd302a2586107d-f8305d22c3db1fdd6f8607b49e47a10c.ssl.cf1.rackcdn.com/thumbnails/stock-images/f85f4ec49a782a18267b7a530afa5697.png"},
            {"carId":4,"brand":"Citroën","model":"DS3","year":2016,"price":17.0,"category":"Economic","seats":5,"doors":3,"automaticGearbox":true,"automaticAC":false,"imageSource":"https://media.hatla2eestatic.com/uploads/ncarteraz/204/big-up_33f0b69fcff5e6128df6c9d83af48883.jpg"},
            {"carId":5,"brand":"Ford","model":"Fiesta","year":2018,"price":17.0,"category":"Economic","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://www.fordeumedia-c.ford.com/nas/gforcenaslive/pol/00m/yym/images/pol00myymjd3jex(a)(a)jke_21_0.png"},
            {"carId":6,"brand":"Renault","model":"Clio","year":2018,"price":17.0,"category":"Economic","seats":5,"doors":3,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://amcdn.co.za/cars/renault-clio-66kw-turbo-authentique-2019-id-56528135-type-main.jpg?"},
            {"carId":7,"brand":"Volkswagen","model":"Polo","year":2016,"price":13.0,"category":"Economic","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":false,"imageSource":"https://car-pictures.cars.com/images/?IMG\u003dCAC50VWC022C121001.jpg"},
            {"carId":8,"brand":"Volkswagen","model":"Golf","year":2016,"price":17.0,"category":"Compact","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://image3.mouthshut.com/images/imagesp/925775472s.jpg"},
            {"carId":9,"brand":"Alfa Romeo","model":"Gulietta","year":2016,"price":18.0,"category":"Compact","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":false,"imageSource":"https://autozagrosze.pl/wp-content/uploads/2018/10/alfa-romeo-giulietta-1229x718.jpg"},
            {"carId":10,"brand":"Audi","model":"A3 Sportback","year":2018,"price":17.0,"category":"Compact","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://m.media-amazon.com/images/I/81iJ6FRcAML.jpg"},
            {"carId":11,"brand":"Seat","model":"Toledo","year":2016,"price":17.0,"category":"Compact","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":false,"imageSource":"https://autorohoze.eu/resize/main/seat-toledo-13483.jpg"},
            {"carId":12,"brand":"Fiat","model":"Doblo","year":2017,"price":19.0,"category":"Minivan","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":false,"imageSource":"https://immagini.alvolante.it/sites/default/files/styles/anteprima_lunghezza_640_jpg/public/serie_auto_galleria/2010/02/fiat_doblo_ant_0.png"},
            {"carId":13,"brand":"Citroën","model":"Berlingo","year":2014,"price":20.0,"category":"Minivan","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://i.pinimg.com/736x/19/c5/ae/19c5ae741ad43fe13f2cd43400484cfa.jpg"},
            {"carId":14,"brand":"Mercedes Benz","model":"Vito","year":2015,"price":23.0,"category":"Minivan","seats":9,"doors":5,"automaticGearbox":false,"automaticAC":false,"imageSource":"https://www.mercedes-benz.pl/vans/pl/vito/tourer-commercial/model-carousel/model/vito-line-sport/_jcr_content/parsysmeta/modelcarouselmeta/image.mq6.png/1552551949000.png"},
            {"carId":15,"brand":"Seat","model":"Leon","year":2013,"price":21.0,"category":"Family","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://www.seat-auto.pl/content/countries/pl/website/pl/samochody/nowy-leon-st/specyfikacja/style/_jcr_content/image.resizeViewPort.1200.jpg"},
            {"carId":16,"brand":"Ford","model":"Focus","year":2015,"price":20.0,"category":"Family","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://cloudflarestockimages.dealereprocess.com/resrc/images/stockphoto_asset-c_limit,f_auto,fl_lossy,w_700/v1/svp/Colors_PNG1280/2015/15ford/15fordfocussesa4a/ford_15focussesa4a_angularfront_oxfordwhite"},
            {"carId":17,"brand":"Ford","model":"C-Max","year":2015,"price":20.0,"category":"Family","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://www.fordeumedia-c.ford.com/nas/gforcenaslive/pol/ceu04/yyp/images/resize767xpolceu04yypbs-uavs-diacmaa(a)(a)pn3jv_21_0.png"},
            {"carId":18,"brand":"Renault","model":"Grand Scenic","year":2015,"price":20.0,"category":"Family","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://s1.cdn.autoevolution.com/images/gallery/RENAULT-Scenic-5464_16.jpg"},
            {"carId":19,"brand":"Nissan","model":"Juke","year":2017,"price":19.0,"category":"SUV","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://leasecar.uk/images/main/cars/1/3/22231/xnissan_juke_hatchback_1_6__112__visia_5dr_2018_front_three_quarter.jpeg.pagespeed.ic.IED1xgd41e.jpg"},
            {"carId":20,"brand":"Land Rover","model":"Range Rover Evoque","year":2013,"price":18.0,"category":"SUV","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://m.media-amazon.com/images/I/71D30ezQOsL._UY560_.jpg"},
            {"carId":21,"brand":"Volkswagen","model":"Touareg","year":2018,"price":25.0,"category":"SUV","seats":5,"doors":5,"automaticGearbox":true,"automaticAC":true,"imageSource":"https://d1ek71enupal89.cloudfront.net/images/blocks_png/VOLKSWAGEN/TOUAREG/5DR/18VwTouSel5drRedFL1_800.jpg"},
            {"carId":1,"brand":"Opel","model":"Adam","year":2019,"price":15.0,"category":"Economic","seats":5,"doors":3,"automaticGearbox":false,"automaticAC":false,"imageSource":"https://imagemanager.carusseldwt.com/gmdrive/2019A/0UU08__GA11/69f595a2-1758-4ce8-a232-e55275b04f91_large.png"},
            {"carId":2,"brand":"Volkswagen","model":"UP!","year":2018,"price":15.0,"category":"Economic","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":false,"imageSource":"https://www.vw.co.za/content/dam/vw-ngw/vw_pkw/importers/za/Showrooms/up!/MODELS-SIZE-9NOV_up-beats-1.png/_jcr_content/renditions/original.transform/med/img.png"}];
            resolve(dummyData);
        })
    }


    getCarDetailsById(id){
        return new Promise((resolve,reject)=>{
            const car = {"carId":17,"brand":"Ford","model":"C-Max","year":2015,"price":20.0,"category":"Family","seats":5,"doors":5,"automaticGearbox":false,"automaticAC":true,"imageSource":"https://www.fordeumedia-c.ford.com/nas/gforcenaslive/pol/ceu04/yyp/images/resize767xpolceu04yypbs-uavs-diacmaa(a)(a)pn3jv_21_0.png"};
            resolve(car);
        })
    }
}

export default DBAccess;
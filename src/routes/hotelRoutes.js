const route = require('express').Router();

const { json } = require('body-parser');
const Hotel = require('../models/db');

//funcion para la generacion de id random
function between(min, max) {
    return Math.floor(
        Math.random() * (max - min + 1) + min
    )
}

//traer todos lo registros
route.get('/information', (req, res) => {
    Hotel.find((err, data) => {
        if (!err) {
            res.status(200).send(data);
        } else {
            console.log(err)
        }
    })
})

//api de filtro por estrellas
route.post('/quantityStart',(req,res)=>{
    const star = req.body.stars;
    Hotel.find({stars:{$in:star}}, (err,data)=>{
        
        if(!err){
            res.status(200).send(data)
        }else{
            console.log(err)
        }
    })
})

//api de filtro por nombre
route.post('/filter',(req,res)=>{
    const HotelName = req.body.name;
    Hotel.find({name:HotelName},(err,data)=>{
        
        if(!err){
            res.status(200).send(data)
        }else{
            console.log(err)
        }
    })
})
/*

 //eliminar por otro campo
route.delete('/',(req,res)=>{
    const ger = req.body
    Hotel.deleteOne(ger,(err)=>{
        if(!err){
            res.json("se logro, esta vaina se logro")
        }else{
            console.log("error de la madre " +err)
        }
    })
})*/

//api de buscar por id
route.get('/information/:id',(req,res)=>{
    const id = req.params.id
    Hotel.findById(id,(err,data)=>{
        if(!err){
            res.status(200).send(data)
        }else{
            console.log(err)
        }
    })

})

//api de nuevo hotel
route.post('/nuevoHotel', (req, res) => {
    
    const hotel = new Hotel({
        id: between(100000, 1000000),
        name: req.body.name,
        stars: req.body.stars,
        price: req.body.price,
        image: req.body.image,
        amenities: req.body.amenities
    });
    
    hotel.save((err)=>{
        if(!err){
            res.status(200).send("se guardo correctamente")
        }else{
            console.log(err)
        }
    })
})

//api de actualizacion de informacion de un  hotel
route.put('/actualizando/:id',(req,res)=>{
    
    const updateInfo = req.body;
    Hotel.findByIdAndUpdate(req.params.id,updateInfo,(err,info)=>{
        if(!err){
            res.status(200).send("actualizacion exitosa " + info + req.params.id);
        }else{
            console.log(err)
        }
    })
})

//api eliminar hotel
route.delete('/eliminacion/:id',(req,res)=>{
    const id = req.params.id;
    Hotel.findByIdAndDelete(id,(err)=>{
        if(!err){
            res.json("se elimino " + req.params.id)
        }else{
            console.log(err)
        }
    });

    
})
module.exports = route
const db = require('../database/models');
const sequelize = db.sequelize;
const {validationResult} = require("express-validator");

//Otra forma de llamar a los modelos
const Movies = db.Movie;

const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        res.render("moviesAdd")
        
    },
    create: function (req, res) {
        let errors = validationResult(req);
        if(errors.isEmpty()){

            let body = req.body;

            let newMovie = {
                
                title : body.title,
                rating : body.rating,
                awards : body.awards,
                release_date : body.release_date,
                length: body.length
            }

            db.Movie.create(newMovie);

            res.redirect("/movies")
        } else {

            res.render("moviesAdd", {
                errors : errors.mapped(),
                old: req.body
            })
        }
    },
    edit: function(req, res) {
       let id = req.params.id;

       db.Movie.findByPk(id)
        .then((Movie) => {
            res.render("moviesEdit", {
                Movie
           })

        })

    },
    update: function (req,res) {
        let errors = validationResult(req);
        let id = req.params.id;
        if(errors.isEmpty()){
            let body = req.body;
            let newMovie = {
                
                title : body.title,
                rating : body.rating,
                awards : body.awards,
                release_date : body.release_date,
                length: body.length
            }

            db.Movie.update(newMovie,{
                where: {
                    id: id
                }
            })

            res.redirect(`/movies/detail/${id}`)
        } else {
            db.Movie.findByPk(id)
                .then((Movie) => {
                    res.render("moviesEdit", {
                        Movie,
                        errors: errors.mapped(),
                        old: req.body
                     })

                })
        }
    },
    delete: function (req, res) {
        let id = req.params.id;

        db.Movie.findByPk(id)
            .then((Movie) => {
                res.render("moviesDelete",{
                    Movie
                })
            })
    },
    destroy: function (req, res) {
        let id = req.params.id;
        db.Movie.destroy({
            where : {
                id: id
            }
        })
        res.redirect("/movies")
    }

}

module.exports = moviesController;
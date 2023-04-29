Trabajo práctico de Digital House donde se trabaja con modelos y se realizan consultas y un CRUD con sequelize

descripcion: El objetivo será crear un crud con sequelize para crear, editar o borrar registros de la base de datos

    desafio 1:
        -crear las siguientes rutas:
            -/movies/add(GET)
                -muestra el formulario para la creacion de una pelicula
            -/movies/create(POST)
                -recibe los datos del formulario anterior y los guarda en la base de datos
                -usar el metodo create
                -validada con express validator
    desafio 2:
        -crear las siguientes rutas
            -/movies/edit/:id(GET)
                -muestra un formulario completo con los datos de la pelicula segun id
                -crear un boton que envie a la edicion de la pelicula, en la vista de detalle
            -/movies/update/:id(POST)--o PUT
                -recibe informacion del formulario
                -usar el metodo update para poder actualizar los datos mediante el formulario
                -validacion con express-validator
                -el pedido debe ser por PUT
    desafio 3:
        -crear las siguientes rutas:
            -/movies/delete/:id (GET)
                -muestra una vista previa a la eliminacion
            -/movies/delete/:id (post) => DELETE
                -agregar un boton que permite eliminar la pelicula y eliminara la pelicula usando el metodo destroy de sequelize
                -redirigir al listado de peliculas
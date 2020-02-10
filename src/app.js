const express = require("express");

// para entender objetos JSON
app.use(express.json);

//para enviar datos a un formulario
app.use(express.urlencoded({extended: false}));

module.export = app;
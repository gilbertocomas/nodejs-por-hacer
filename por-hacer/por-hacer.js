const fs = require("fs");
const colors = require("colors");

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFileSync("db/data.json", data, (err) => {
        if (err) throw ("No se pudo grabar", err);
    });
};

const cargarDB = () => {
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }
};

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
};

const getListado = () => {
    cargarDB();
    listadoPorHacer;
    for (let tarea of listadoPorHacer) {
        console.log("***************Tarea Pendiente**************".green);
        console.log(`Descripción: ${tarea.descripcion}`);
        console.log(`Estado: ${tarea.completado}`);
        console.log("********************************************".green);
    }
};

const actualizar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(
        (tarea) => tarea.descripcion === descripcion
    );

    if (index >= 0) {
        listadoPorHacer[index].completado = true;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(
        (tarea) => tarea.descripcion !== descripcion
    );

    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
};

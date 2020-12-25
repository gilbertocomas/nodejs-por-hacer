const argv = require("yargs")
    .command("crear", "Agregar una tarea a la lista de pendientes.", {
        descripcion: {
            demand: true,
            alias: "d",
            desc: "Descripción de la tarea.",
        },
    })
    .command(
        "actualizar",
        "Actualiza el estado a completado de una tarea pendiente.",
        {
            descripcion: {
                demand: true,
                alias: "d",
                desc: "Descripción de la tarea por hacer.",
            },
            completado: {
                default: true,
                alias: "c",
                desc: "Marca como completado la tarea.",
            },
        }
    )

    .command("borrar", "Borra una tarea indica mediante la descripción.", {
        descripcion: {
            demand: true,
            alias: "d",
            desc: "Descripción de la tarea a borrar.",
        },
    })

    .help().argv;

module.exports = {
    argv,
};

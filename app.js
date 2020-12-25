const { argv } = require("./config/yargs");
const colors = require("colors");
const {
    crear,
    getListado,
    actualizar,
    borrar,
} = require("./por-hacer/por-hacer");

let comando = argv._[0];

switch (comando) {
    case "crear":
        let tarea = crear(argv.descripcion);
        console.log(tarea);
        break;
    case "borrar":
        let borrado = borrar(argv.descripcion);
        console.log(borrado);
        break;
    case "listar":
        getListado();
        break;
    case "actualizar":
        actualizar(argv.descripcion);
        break;

    default:
        console.log("Comando no reconocido");
}

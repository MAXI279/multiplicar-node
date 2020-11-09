const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv }  = require('./config/yargs');
const colors  = require('colors');

//console.log(process.argv);
let comando = argv._[0]
console.log(argv)

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
            crearArchivo(argv.base, argv.limite)
                .then( archivo => console.log(`Archivo Creado ${archivo}`) )
                .catch( e => console.log(e))
            break;
    default:
        console.log('comando no reconocido'.red)
        break;
}
// let parametro = argv[2];
// let base = parametro.split('=')[1]



const argv = require('yargs')
                .option( 'b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option( 'h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Este es el numero hata donde quieres la tabla'
                })
                .option( 'l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .check( (argv, options) => {
                    if( isNaN( argv.b ) ){
                        throw 'La base tiene que ser un número'
                    } 
                    
                    return true // tell Yargs that the arguments passed the check
                    
                })
                .argv;



// OBTENER ARGUMENTOS DE MANERA NORMAL
// const { argv } = require('process');                
// const [ arg1, arg2, arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');

module.exports = argv;
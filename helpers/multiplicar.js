// import * as fs from 'node:fs';
const fs = require('fs');
const colors = require('colors');

// OPCION 1
// fs.writeFile( `tabla-${ base }.txt`, salida, (err) => {
//     if (err) throw err;
//     console.log(`tabla-${ base }.txt creado`);
// });


// OPCION 2
// fs.writeFileSync( `tabla-${ base }.txt`, salida );
// console.log(`tabla-${ base }.txt creado`);


// FUNCION CON PROMESA - FORMA 1

const crearArchivo = ( base = 5, listar = false, hasta = 10 ) => {

    return new Promise( (resolve, reject) => {

        let salida = '';
        let consola = '';

        for (let i = 1; i <= hasta ; i++) {
            
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;       
            salida += `${ base } x ${ i } = ${ base * i }\n`;   
        }

        if (listar) {

            console.log('==================='.green);
            console.log(`    Tabla del: ${colors.blue(base)} `);
            console.log('==================='.green);
            
            console.log(consola);
        }        

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida );
        
        resolve(`tabla-${ base }.txt`);

    });
}


// FUNCION CON PROMESA ASYNC - FORMA 2

// const crearArchivo = async( base = 5 ) => {

//     try {

//         console.log('===================');
//         console.log(`    Tabla del: ${base} `);
//         console.log('===================');
    
//         let salida = '';
    
//         for (let i = 1; i <= 10 ; i++) {
            
//             salida += `${ base } x ${ i } = ${ base * i }\n`;       
//         }
    
//         console.log(salida);    
    
//         fs.writeFileSync( `tabla-${ base }.txt`, salida );
    
//         return `tabla-${ base }.txt`;   
        
//     } catch (err) {

//         throw err;
        
//     }

// }

module.exports = {
    crearArchivo
}
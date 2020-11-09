//requires
const fs = require('fs')
const colors  = require('colors');
        
let listarTabla = (base, limite) => {

        console.log('==============='.green)
        console.log(`Tabla de ${ base }`.green)
        console.log('==============='.green)

        for (let index = 1; index <= limite; index++){
            console.log(`${index}*${base} = ${index*base}`);
        }

}

let crearArchivo = (base, limite=10) => {
    return new Promise( (resolve, reject) =>{

        if(!Number(base)){
            reject('La base introducida no es un numero');
            return
        }

        let data = ''
        for( let i=1; i<=limite; i++){
            data += `${base}*${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-new-${base}.txt`, data, (err) => {
            if(err) 
                reject(err);
            else
                resolve('El archivo ha sido guardado')
        })
        
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

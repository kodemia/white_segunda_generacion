const fs = require('fs');//archivos de sistema file system
// var dato="Edwin Giovanni from Puerto Vallarta\n";

fs.readdir('nuevaCarpeta',(error,files)=>{
    if(error) return console.error(error);
    
    files.forEach(file=>{
        fs.unlinkSync(`nuevaCarpeta/${file}`);  
    });
    
    fs.rmdir('nuevaCarpeta',(error)=>{
        if(error) return console.error(error);
        console.warn("carpeta Eliminada");
    });

    
})
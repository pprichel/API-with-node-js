
table = []
var fs = require('fs')

const readJson=()=>{
    try{
        return (JSON.parse(fs.readFileSync('data.json','utf8')))
    }catch(err){
       console.log('err') ;
    }
}
//console.log(readJson())
module.exports.add=(title , body)=>{
    //console.log(title);
    const datafile = readJson();
    //JSON.parse(fs.readFileSync('data.json','utf8'));
        //on va perser les elements json
   // let tableJson = (content)
    // faire un ajout dans json
    datafile.push({title,body});
    //ecrire le tableau dans le fichier json
    fs.writeFile('data.json',JSON.stringify(datafile),function(err){
           if(err)
            console.log('error found')  
                 console.log('added')
    })
    }

    //liste le contenu du fichier json
    module.exports.list=()=>{
    const datafile = JSON.parse(fs.readFileSync('data.json','utf8'));
    // for(let i=0 ; i<datafile.length ; i++){
    //     console.log(datafile[i]);
    datafile.forEach(element => {
        return console.log(element);   
    });
    }
    //supprimer un objet dans le fichier json
    module.exports.remove=(titre)=>{
        const datafile = JSON.parse(fs.readFileSync('data.json','utf8'));  
            // for(let i=0 ; i<datafile.length ; i++){
            //     if(datafile[i].title===titre){
            //         datafile.splice(i,1);
            //         console.log('delete')
            //     }
            // } 
            // datafile.forEach(element=>{
            //     if(element.title===titre){
            //         datafile.splice(element,1);
            //     }
            // })
        const datafilefiltred = datafile.filter(element=>element.title !==titre);
         fs.writeFile('data.json',JSON.stringify(datafilefiltred),function(err){
            if(err)
             console.log('error found')  
                  console.log('removed')
     })
    }

    module.exports.read=(titre)=>{
        //lire le fichier data.json
        const datafile = JSON.parse(fs.readFileSync('data.json','utf8')); 
        //sauvergarder les elements en fonction du tire 
        const datafileItems = datafile.filter(element=>element.title===titre);
        console.log('items found')
        datafileItems.forEach(element=>{
            console.log(element);
        }
            )
    }


    //update
    dataJson = readJson();
    module.exports.update = (titre,newtitile,corps) => {
        const dataUpdate= dataJson.map(element => {
            var temp = Object.assign({}, element);
            if (temp.title === titre) {
                temp.title= newtitile;
                temp.body = corps;
            }
            return temp;
        });

        fs.writeFile('data.json',JSON.stringify(dataUpdate),function(err){
            if(err)
             console.log('error found')  
                  console.log('update')
     })
    }

const yargs = require('yargs');
const moduleNote = require('./note');
const argv=yargs.argv 
//console.log(process.argv)
//console.log(argv._[0])

// if(argv._[0]==='add'){
//   if(argv.title==null && argv.body==null){
//     console.log("missing required arguments: title, body")
//   }else{
//     moduleNote.add(argv.title,argv.body);
//   }
//  // console.log(argv._[0]);
// }
// if(argv._[0]==='list'){
//   moduleNote.list();
// }
// if(argv._[0]==="remove"){
//   moduleNote.remove(argv.title);
// }
// if(argv._[0]==="read"){
//   moduleNote.read(argv.title);
// }
// if(argv._[0]==="update"){
//   moduleNote.update(argv.title,argv.body);
// }

switch (argv._[0]) {
   case 'add':
           if(argv.title==null && argv.body==null){
              console.log("missing required arguments: title, body")
             }
             else{
               moduleNote.add(argv.title,argv.body);
                }
    break;
  case 'list':
           moduleNote.list();
    break;
  case 'remove':
           moduleNote.remove(argv.title);
    break;
    case 'read':
            moduleNote.read(argv.title);
    break;
    case 'update':
           moduleNote.update(argv.title,argv.ntitre,argv.body);
    break;
  default:
    console.log('');
}

//console.log(argv.body);
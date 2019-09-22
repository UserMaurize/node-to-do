
const argv = require('./config/yargs').argv;
const colors = require('colors');
const toDo = require('./to-do/to-do');

let command = argv._[0];

switch(command){    

    case 'create':
        console.log(`Creating a task to do....`);
        let task = toDo.create(argv.description);
         console.log(task);
        break;
    case 'list':
        console.log(`Listing all task to do`);
        let list = toDo.getList();
        if(!list){
            console.log(`You don't have task to do`.blue);
        }
        for (const task of list) {
            console.log(`===========================`.green);
            console.log(task.description);
            console.log(`State: ${task.complete}`);
            console.log(`===========================`.green);
        }
        break;
    case 'update':
        console.log(`Updating a task to do`);
        let result = toDo.update(argv.description, argv.complete);
        console.log(result);
        break;
    case 'delete':
        console.log(`Deleting a task to do`);
        let objDelete = toDo.objDelete(argv.description);
        console.log(objDelete);
        break;
    default:
        console.log(`Command unknown`);
        break;


}
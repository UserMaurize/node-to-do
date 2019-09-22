

const fs = require('fs');

let listToDo = [];

const saveToDB = () => {

    let data = JSON.stringify(listToDo);

    fs.writeFile(`./db/data.json`, data, (err) => {
        if(!err){
            console.log(`Data saved to database successfuly`);
        } else {
            console.log(err);
        }
        
    });
}

const loadDB = () => {

    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }
 
}

const getList = () => {
    loadDB(); 
    return listToDo;
}

const update = (description, complete = true) => {
    loadDB();
    let index = listToDo.findIndex(p=>p.description == description);
    if(index >= 0){
        listToDo[index].complete = complete;
        saveToDB();
        return true;
    } else {
        return false;
    }
}

const create = (description) => {

    loadDB();   
   
    let toDo = {
        description,
        complete: false
    }

    listToDo.push(toDo);
    sabeToDB();
    return toDo;

}

const objDelete = (description) => {

    loadDB();
    let index = listToDo.findIndex(p=>p.description == description);
    if(index >= 0){
        listToDo.splice(index,1);
        saveToDB();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    create,
    getList,
    update,
    objDelete
}


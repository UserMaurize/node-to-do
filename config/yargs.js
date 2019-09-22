
const description = {
    demand: true,
    alias: 'd',
    desc: 'description of the task to do'
}

const complete = {
    default: true,
    alias: 'c',
    desc: 'check like complete a task'
}

const argv = require('yargs')
            .command('create', 'create a new task to do', {
                description
            })
            .command('update', 'update a task to do', {
                description,
                complete
            })
            .command('delete', 'delete a task to do', {
                description
            })
            .help()
            .argv;


module.exports = {
    argv
}
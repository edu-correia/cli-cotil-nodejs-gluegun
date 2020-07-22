const arr = require('../uteis/downloads');
const Table = require('cli-table');

module.exports = {
    name: 'downloads',
    alias: ['d'],
    run: async toolbox => {
        const {
            parameters,
            print: { success, error, info }
        } = toolbox
  
        const name = parameters.first;

        if(name){
            for(let index of arr){
                info("-------------------------------------------------")
                info(`${index.name}  |  ${index.link}`)
            }
            return;
        }

        const table = new Table({
            head: ['TH 1 label', 'TH 2 label']
          , colWidths: [100, 200]
        });

        table.push(
            ['First value', 'Second value']
          , ['First value', 'Second value']
        );

        console.log(table.toString());
    }
}
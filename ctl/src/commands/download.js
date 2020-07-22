const downloads = require('../uteis/downloads');

module.exports = {
    name: 'downloads',
    alias: ['d'],
    run: async toolbox => {
        const {
            parameters,
            print: { success, error, info }
        } = toolbox
  
        const name = parameters.first;

        if(!name){
            for(let index of downloads){
                info("-------------------------------------------------")
                info(`${index.name}  |  ${index.link}`)
            }
            return;
        }
    }
}
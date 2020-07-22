const downloads = require('../uteis/downloads');

module.exports = {
    name: 'download',
    alias: ['d'],
    description: "Mostra os links dos programas e Ide's usados no curso.",
    run: async toolbox => {
        const {
            parameters,
            print: { success, error, info }
        } = toolbox
  
        const name = parameters.first;

        if(!name){
            success('Downloads');
            info("-------------------------------------------------")
            for(let index of downloads){
                info(`${index.name}  |  ${index.link}`)
            }
            info("-------------------------------------------------")
            return;
        }
    }
}
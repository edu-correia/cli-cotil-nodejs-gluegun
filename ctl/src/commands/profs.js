const arr = require('../uteis/professores');

module.exports = {
    name: 'profs',
    alias: ['p'],
    run: async toolbox => {
        const {
            parameters,
            template,
            print: { success, error, info }
        } = toolbox
  
        const name = parameters.string;

        if(!name){
            for(let index of arr){
                success(index.name);
                info(`Email: ${index.email}`)
                info(`Site: ${index.site}`)
                info("")
            }
            return;
        }

        const profUnico = arr.filter(value => {
            return value.name === name;
        })

        if(profUnico.length === 0){
            error('Professor não encontrado!');
            info('Digite "ctl profs" para ver a lista de professores.');
            return
        }

        success(profUnico[0].name);
        info(`Email: ${profUnico[0].email}`)
        info(`Site: ${profUnico[0].site}`)
        info("")
    }
}
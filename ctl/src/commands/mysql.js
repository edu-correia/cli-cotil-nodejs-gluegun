module.exports = {
    name: 'mysql',
    alias: ['m'],
    description: "Cria um arquivo .bat que acessa o banco de dados fornecido pela escola.",
    run: async toolbox => {
        const {
            parameters,
            template,
            print: { success, error, info }
        } = toolbox
  
        const ra = parameters.first;

        if(!ra){
            error('Por favor digite seu RA!');
            info('Exemplo "ctl mysql <seu_ra>"');
            return;
        }

        await template.generate({
            template: 'mysql/mysql.bat.ejs',
            target: `mysql-${ra}.bat`,
            props: { ra }
        })

        success(`Arquivo de entrada ao banco de dados criado com sucesso!`)
    }
}
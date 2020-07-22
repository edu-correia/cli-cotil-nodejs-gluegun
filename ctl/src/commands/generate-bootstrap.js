module.exports = {
    name: 'generate:bootstrap',
    alias: ['g:b'],
    description: "Gera um arquivo HTML pronto para o desenvolvimento com Bootstrap",
    run: async toolbox => {
      const {
        parameters,
        template,
        print: { success, error, info }
      } = toolbox
  
      //console.log(parameters);
      const name = parameters.first;
  
      if(!name){
          error("Por favor informe o nome de sua aplicação");
          info("Exemplo: cli-test generate:bootstrap <nome_do_arquivo>")
          return;
      }
  
      await template.generate({
        template: 'bootstrap/bootstrap.html.ejs',
        target: `./${name}.html`,
        props: { name }
      })
  
      success(`Arquivo "${name}.html" (Boostrap) criado com sucesso!`);
    }
  }
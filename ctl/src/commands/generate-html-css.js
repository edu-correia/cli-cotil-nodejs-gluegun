module.exports = {
    name: 'generate:html-css',
    alias: ['g:hc'],
    description: "Cria uma pasta com um arquivo index.html e style.css.",
    run: async toolbox => {
      const {
        parameters,
        template,
        filesystem,
        print: { success, error, info }
      } = toolbox
  
      //console.log(parameters);
      const name = parameters.first;
  
      if(!name){
          error("Por favor informe o nome de sua aplicação");
          info("Exemplo: ctl generate:html-css <nome_do_arquivo>")
          return;
      }
  
      await template.generate({
        template: 'html-css/index-css.html.ejs',
        target: `${name}/index.html`,
        props: { name }
      })

      await template.generate({
        template: 'html-css/style.css.ejs',
        target: `${name}/style.css`
      })
  
      success(`Pasta "${name}" criada com sucesso!`);
    }
  }
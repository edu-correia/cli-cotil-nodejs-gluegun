module.exports = {
    name: 'generate:html-js',
    alias: ['g:hj'],
    description: "Cria uma pasta com index.html, style.css e script.js",
    run: async toolbox => {
      const {
        parameters,
        template,
        print: { success, error, info }
      } = toolbox
  
      const name = parameters.first;
  
      if(!name){
          error("Por favor informe o nome de sua aplicação");
          info("Exemplo: cli-test generate:html-js <nome_do_arquivo>")
          return;
      }
  
      await template.generate({
        template: 'html-js/index.html.ejs',
        target: `${name}/index.html`,
        props: { name }
      })

      await template.generate({
        template: 'html-js/style.css.ejs',
        target: `${name}/style.css`
      })

      await template.generate({
        template: 'html-js/script.js.ejs',
        target: `${name}/index.html`,
      })
  
      success(`Pasta "${name}" criada com sucesso!`);
    }
  }
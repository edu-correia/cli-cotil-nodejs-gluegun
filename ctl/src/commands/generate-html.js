module.exports = {
    name: 'generate:html',
    alias: ['g:h'],
    description: "Gera um arquivo HTML simples para iniciantes",
    run: async toolbox => {
    const {
      parameters,
      template,
      print: { success, error, info }
    } = toolbox

    //console.log(parameters);
    const folder = parameters.second || "."
    const name = parameters.first;

    if(!name){
        error("Por favor informe o nome de sua aplicação");
        info("Exemplo: cli-test generate:html <nome_do_arquivo>")
        return;
    }

    await template.generate({
      template: 'html/index.html.ejs',
      target: `${folder}/${name}.html`,
      props: { name }
    })

    success(`Generated file at ${folder}/${name}.html`)
  }
}

module.exports = {
    name: 'generate:c',
    alias: ['g:c'],
    description: "Gera um arquivo HTML simples para iniciantes",
    run: async toolbox => {
    const {
      template,
      print: { success}
    } = toolbox

    await template.generate({
      template: 'c/main.c.ejs',
      target: `./main.c`
    })

    success(`Generated file "main.c"`)
  }
}
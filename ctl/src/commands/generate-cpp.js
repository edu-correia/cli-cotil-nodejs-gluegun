module.exports = {
    name: 'generate:cpp',
    alias: ['g:cpp'],
    description: "Gera um arquivo main.cpp pré-formatado.",
    run: async toolbox => {
    const {
      template,
      print: { success}
    } = toolbox

    await template.generate({
      template: 'cpp/main.cpp.ejs',
      target: `./main.cpp`
    })

    success(`Generated file "main.cpp"`)
  }
}
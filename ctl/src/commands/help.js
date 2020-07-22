const downloads = require('./download')
const mysql = require('./mysql')
const profs = require('./profs')
const generateHtmlCss = require('./generate-html-css')
const generateHtml = require('./generate-html');
const generateHtmlJs = require('./generate-html-js');
const generateBootstrap = require('./generate-bootstrap');

module.exports = {
    name: 'help',
    alias: ['h'],
    run: async toolbox => {
        const {
            print: { success, error, info , warning}
        } = toolbox

        const arrDeComandos = [
            downloads, 
            mysql, 
            profs, 
            generateBootstrap, 
            generateHtmlJs,
            generateHtml, 
            generateHtmlCss
        ];

        success("Comandos:\n\n");
        
        for(let value of arrDeComandos){
            warning(`${value.name} - ( ${(value.alias[0]).toUpperCase()} )`);
            warning(`Descrição: ${value.description} \n`);
        }
    }
}
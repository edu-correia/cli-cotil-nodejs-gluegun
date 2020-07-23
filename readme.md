<h1 align="center">CLI Cotil</h1>

### :clipboard: Descrição:

Repositório criado com a intenção de ajudar os alunos do meu colégio técnico por meio de uma CLI.

### :pencil: Features:

* Criação de arquivos HTML, CSS, JS, HTML(Bootstrap), C, C++.
* Arquivo executável para o acesso ao banco de dados MySql.
* Disponibilização de tabela com links das IDE's utilizadas no curso.
* Disponibilização de tabela com contatos e sites dos professores do curso.

### :computer: Requisitos:
* NPM ou YARN

### :grey_question: Como usar a CLI:
* Vá até seu terminal
* Digite:
```
$ npm install -g ctl-cotil-cli
```
OU
```
$ yarn global add ctl-cotil-cli
```

### :bookmark_tabs: Documentação:

  Base dos comandos: `ctl`
  
  **_Comando_**  | **_Alias_**     | **_Funcionalidade_** | **_Parâmetros_** | **_Funç do parâmetro_**
  -------------- | --------------- | -------------------- | ---------------- | ---------------------------------
  download | d | Mostra os downloads dos programas usadas no curso | 0 | ---
  mysql | m | Cria um arquivo ".bat"(executável) para acessar o banco de dados | 1 | 1-RA do aluno
  profs | p | Mostra os professores e seus respectivos contatos | 1 (Opcional) | 1-Nome de um professor
  generate:html  | g:h             | Gera um arquivo HTML | 2                | 1-Nome do arquivo / 2-Nome da pasta
  generate:html-css | g:hc | Gera um arquivo HTML e CSS | 1 | 1-Nome do arquivo HTML
  generate:html-js  | g:hj             | Gera um arquivo HTML, CSS e JS linkados | 1                | 1-Nome da pasta
  generate:bootstrap  | g:b             | Gera um arquivo HTML linkado com o bootstrap | 1                | 1-Nome do arquivo
  generate:c  | g:c             | Gera um arquivo "main.c" | 0                | ---
  generate:cpp  | g:cpp            | Gera um arquivo "main.cpp" | 0                | ---
  help | h | Mostra uma lista dos comandos dentro do prompt de comando | 0 | ---

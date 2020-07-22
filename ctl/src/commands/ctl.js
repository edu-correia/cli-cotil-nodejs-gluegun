const command = {
  name: 'ctl',
  run: async toolbox => {
    const { print } = toolbox

    print.success('BEM VINDO À CLI DO COTIL')
    print.info("")
    print.info('#####   ######   #')
    print.info('#         ##     #')
    print.info('#         ##     #')
    print.info('#         ##     #')
    print.info('#####     ##     #####')
    print.info("")
    print.info("")
    print.warning('Digite "ctl -h" para accessar todos os comandos disponíveis')
  }
}

module.exports = command

const chalk = require('chalk');
const pegaArquivo = require('./index');
const validaURLs = require('./http-validacao');


const args = process.argv;

async function processaTexto(args) {
    const caminho = args[2];
    const cmd = args[3];
    const resultado = await pegaArquivo(caminho);

    if(cmd === 'validar'){
        console.log(chalk.yellow('links validados: '), validaURLs(resultado));
    } else {
        console.log(chalk.yellow('lista de links: '), resultado);
    }
}

processaTexto(args)
const chalk = require('chalk');
const fs = require('fs');

const logBlue = (...txt) => console.log(chalk.blue(...txt));
const logRed = (...txt) => console.log(chalk.red(...txt));
const logGreen = (...txt) => console.log(chalk.green(...txt));




function extraiLinks(texto){
  //const regex = /\[([^]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/; //regex errada que funcionou no regex101
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s]*.[^\s]*)\)/gm;

  const resultados = [];
  let temp;

  while( ( temp = regex.exec(texto) ) !== null ){
    resultados.push({ [temp[1]]: temp[2] });
  }

  return resultados.length === 0 ? 'Não há links' : resultados ;
}


function trataErro(e){
  console.log(e);
  
  const erros = {
  EISDIR : 'Caminho é um diretório',
  ENOENT : 'Arquivo não encontrado'
  };

  throw new Error(logRed(e.code, erros[e.code]));
}

async function pegaArquivo(caminho){
  const encoding = 'utf-8';

  try {
    const texto = await fs.promises.readFile(caminho, encoding)
    return extraiLinks(texto);
  } catch (e) {
    trataErro(e);
  } finally {
    //logBlue('operação concluída')
  }

}

module.exports = pegaArquivo





/*
\[[^]]*\]

\(https?:\/\/[^$#\s]*.[^\s]*\)
*/





/*function pegaArquivo(caminho){
  const encoding = 'utf-8';
  logBlue('sincrono')
  fs.promises
  .readFile(caminho, encoding)
  .then((txt) => console.log(txt))
  .catch((e) => trataErro(e));
  logRed('sincrono');
}*/

/*
function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  fs.readFile(caminhoDoArquivo, encoding, (e, d) => {

    if(e) {
      trataErro(e);
    } else {
      logBlue(d);
    }

  });
}
*/

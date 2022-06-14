const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function validaURLs(arrayLinks){
    return arrayLinks;
}

module.exports = validaURLs;
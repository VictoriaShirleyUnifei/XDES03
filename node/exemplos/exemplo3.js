/*No NodeJS podemos usar objeto global "process" para obtermos
informações do processo em execução.
Como exemplo podemos extrair informações como
1 - A versão do NodeJS: process.version;
2 - O local onde o processo está rodando (current working directory/ diretório de trabalho): process.cwd();
3 - A release (descrição completa da versão): process.release;
4 - As variáveis de ambiente do usuário: process.env
*/

const version = process.version;
const cwd = process.cwd();
const release = process.release; //retorna objeto JSON
const env = process.env; //retorna objeto JSON
/*
Quando temos um objeto como retorno podemos transformar
em JSON "string" usando a função JSON.stringify().
Se informado um terceiro parâmetro numério, cada item ficará na sua linha
com um espaço inicial "x", onde x é o terceiro parâmetro.
*/

console.log(`Versão: ${version}`);
console.log(`Diretório de Trabalho: ${cwd}`);
console.log(`Release: ${JSON.stringify(release, null, 4)}`); //Cada item possui 4 espaços e ocupará sua própria linha
console.log(`Ambiente (env) ${JSON.stringify(env, null,5)}`);

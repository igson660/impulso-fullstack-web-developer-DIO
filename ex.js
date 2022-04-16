// Criação da função que recebe um array e um numero, que retorna o array caso o tramanho seja do valor do numero enviado

const validaArray = (arr, num) => {
  try{
    if (!arr && !num) throw new ReferenceError("Envie os parametros");
    if (typeof arr !== 'object') throw new TypeError("Envie um parametro do tipo object");
    if (typeof num !== 'number') throw new TypeError("Envie um parametro do tipo number");
    if (arr.length !== num) throw new RangeError("Tamanho inválido");
    return arr;
  } catch(e) {
    if (e instanceof ReferenceError) {
      console.log("Esse é um ReferenceError");
      console.log(e.message);
    } else if (e instanceof TypeError) {
      console.log("Esse é um TypeError");
      console.log(e.message);
    } else if (e instanceof RangeError ) {
      console.log("Esse é um RangeError");
      console.log(e.message);
    } else {
      console.log(`Tipo de erro não esperado: ${e}`);
    }
  }
}

console.log(validaArray([1], 1));

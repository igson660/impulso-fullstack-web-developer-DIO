const array = [30, 40, 50, 60, 30, 40, 100, 120];

const valueUnique = (arr) => {
  const mySet = new Set(arr)
  return[...mySet];
};

console.log('Retorna um array com valores unicos => ',valueUnique(array));

const mySet2 = new Set([1, 2, 3, 4, 5])

console.log('Retrona o próprio Set() => ', mySet2);
console.log('Retorna um boleado verificando se o valor está no set => ', mySet2.has(2));
console.log('Retorna um boleado verificando se o valor está no set => ', mySet2.has(50));
console.log('Adiciona o valor "50" ao Set => ', mySet2.add(50));
console.log('Retorna um boleado verificando se o valor está no set => ', mySet2.has(50));
console.log('Deleta o valor "50" do Set => ', mySet2.delete(50));
console.log('Retorna um boleado verificando se o valor está no set => ', mySet2.has(50));

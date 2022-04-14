const getAdmins = (map) => {
  let admins = []
  for([key, value] of map) {
    value == 'admin' ? admins.push(key) : false
  }

  return admins
}


const users = new Map();

users.set('lucia', 'admin');
users.set('Paulo', 'admin');
users.set('João', 'user');
users.set('Ana', 'user');
users.set('Maria', 'admin');


console.log('Imprime todo o Map =>',users);
console.log('Imprime somente o valor da chave passada => ',users.get('lucia'));
console.log('Imprime undefined por não encontrar a chave => ',users.get('luci'));
console.log('Imprime iteração com o for..of =>', getAdmins(users));
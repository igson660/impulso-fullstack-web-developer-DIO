## Map
- É uma coleção de arrays no formato chave-valor
- Pode se iterado por um loop for..fo

```
$ Exemplos de métodos:
- Declaração => const myMap = new Map()

- Adicionar => myMap.set('apple', 'fruit')
  obs: sempre sera usado o formato chave-valor para adicionar elementos

- Ler => myMap.get('apple')
  obg: o valor passado será o da chave, caso o valor passado não exista o retorno sera "undefined"

- Deletar => myMap.delete('apple')
```
#### Map VS Objeto
- Maps podem ter chaves de qualquer tipo, ao contrário dos Objetos que só lhe é permitido chaves no formato de "string"
- Maps possuem a propriedade "length"
- Maps são mais fáceis de iterar
- Map é utilizado quando o valor das chaves é desconhecido
- Map só possuem valores do mesmo tipo


## SET
- São estruturas que armazenam apenas valores unicos


```
$ Exemplos de métodos:
- Declaração => const mySet = new Set()

- Adicionar => mySet.add(1)

- Ler => mySet.has(1)
  obg: esse método retorna um boleano

- Deletar => mySet.delete(1)
```

### Set VS Array
- Set Possui valores unicos
- Set tem seu tamanho dado pela propriedade "size"
- Set não possui os métodos map, filter, reduce etc.

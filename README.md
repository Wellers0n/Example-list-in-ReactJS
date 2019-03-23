# Usando React para listar e filtrar receitas
Neste desafio, você criará uma interface para listar e filtrar receitas.

## Tópicos
Com esse desafio, você aprenderá:

- React
- ES6
- Javascript
- Testes unitários

## Requisitos
Você precisará do Nodejs (LTS ou Current) instalado em sua máquina.

## Detalhes
Dentro da pasta `src`, você encontrará a estrutura básica do projeto React. . Além disso, todos os arquivos necessários já estão criados assim como a estrutura em relação a `HTML` e `CSS`. Sua missão neste desafio será criar a lógica dos componentes para deixá-lo dinâmico.


Dentro da pasta `sample_data`, você terá uma listagem de receitas que deverá ser impressa na tela.

### Tarefas
1. Renderizar dinamicamente o componente `RecipeItems` para todos os elementos dentro dos dados de amostra;
2. Ao digitar um texto no `input` dentro do component `Navbar`, os `RecipeItems` deverão ser filtrados, tanto pelo `title` quanto pelo `ingredients`;
3. O filtro deverá ser `case insensitive`;
4. (Bônus) fazer o highlight do texto pesquisado dentro do `title` e `ingredients` utilizando a tag `<mark>`.

### Exemplo
![](https://s3-us-west-1.amazonaws.com/codenation-challenges/react-0/BouncyAfraidDikkops-size_restricted.gif)

### Atenção
- NÃO MUDE o nome dos componentes, eles são utilizados para a realização dos testes.
- O componente `App` deve utilizar o `state` chamado `searchString` para realizar o filtro de `RecipeItems`, garantindo assim o funcionamento adequado dos teste.

## Rodando a aplicação
Na primeira execução rodar o comando:
```
npm install
```
Para rodar a aplicação:
```
npm start
```

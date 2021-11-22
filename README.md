# Site de consumo da api de dados de acesso do site das lojas Americanas.

## Descrição:
<br>

O site consiste em fazer o consumo de uma api de dados mocados da bw2, e gerar uma view com os dados retornados. Para requisição foi utilizado o método Ajax da biblioteca Jquery na linguagem js, os cards da view e as ações de enventos foram escritas utilizando a manipulação de DOM do ES6 e a estilização do CSS3 respeitando a sintaxe do HTML5.
<br>
<br>

## Organização:
<br>
A organização do projeto obedece o padrão MVC onde as funções que manipulam diretamente o documento são elaboradas no script presente na pasta view e as funções que trabalham as requisições no script presente na pasta models. A ligação das mesmas é dada por eventos, que são escutados e disparados pelo script presente na pasta controllers, aplicando assim o conceito de responsabilidade única.
<br>
<br>

## Utilização:

Para fazer uso da aplicação, basta digitar no campo de busca a palavra chave referentes aos produtos desejados, ao confirmar a busca serão retornados cards com informações referentes ao acessos dos produtos relacionados a busca no site da Americanas. Lembrando mais uma vez que os dados são mocados
(simulados) e uso dessa api é próprio para fins didáticos, abaixo seguem os links para acesso a api e para a página da aplicação.
<br>
<br>

## Links:

Acesso a página da aplicação: https://leocosta-dev.github.io/viewDadosDeAcessoAPIAmericanas/ <br>
Link API: https://mystique-v2-americanas.juno.b2w.io/autocomplete?content=camiseta&source=nanook

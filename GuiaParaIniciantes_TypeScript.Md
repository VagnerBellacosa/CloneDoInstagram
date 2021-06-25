# TypeScript

## O que é TypeScript? [Guia para iniciantes]

Saiba o que é TypeScript, quando foi criado e quais recursos e vantagens a linguagem adiciona ao JavaScript tradicional

##### Diego Melo

TypeScript é um superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem. Saiba mais sobre TypeScript, suas principais vantagens e como utilizá-lo em seus projetos.

## O que é TypeScript?

O TypeScript começou a ser desenvolvido pela Microsoft em 2012, com o objetivo de adicionar recursos e ferramentas que não estão presentes nativamente na linguagem (ou que seriam muito mais complexos de serem implementados), como tipagem estática (ou seja, os tipos das variáveis são definidos explicitamente no código) e orientação a objetos.

Por isso, ele não é usualmente considerado como uma nova linguagem de programação, mas sim como um superconjunto de JavaScript, pois o código é “transformado” (no termo técnico: transcompilado) em JavaScript “puro” antes de ser executado.

Um arquivo TypeScript geralmente tem a extensão “.ts”. Por, no fundo, ainda ser JavaScript, qualquer código nativo da linguagem pode ser adicionado em um arquivo desse formato, e programas escritos em JavaScript também podem ser considerados programas TypeScript válidos. Há, também, suporte a várias bibliotecas JavaScript populares, como Angular, Vue.js, D3.js, entre outras.

Sites e aplicativos criados com TypeScript podem ser executados tanto no lado do cliente (diretamente no navegador do usuário, por exemplo) quanto no lado do servidor (com Node.js). O próprio compilador TypeScript padrão foi escrito em TypeScript e transcompilado para JavaScript.

### Como funciona?

Código TypeScript pode ser escrito em qualquer ambiente de desenvolvimento. No entanto, para transformá-lo em JavaScript e aproveitar outros recursos úteis, como checagem de erros, é necessário instalá-lo no computador via NPM (um gerenciador de pacotes JavaScript) ou usar uma IDE com suporte nativo ao superconjunto, como o Visual Studio. Também é possível usar TypeScript com outros compiladores que suportam a linguagem, como Babel, swc ou Sucrase.

Veja abaixo um exemplo de código TypeScript envolvendo encapsulamento, um conceito de orientação a abjetos que dá visibilidade e acessibilidade a elementos internos de uma classe. Nesse caso, a declaração de uma variável de saldo, do tipo “number”, é acessível pelo método “Saldo()”.

>private _saldo: number;
>get Saldo(): number { return this._saldo; }

## Principais vantagens

A principal vantagem do TypeScript em relação ao JavaScript “tradicional” é adicionar recursos importantes e úteis para a construção de projetos em larga escala, como tipagem estática, forte e automática, orientação a objetos e a possibilidade de descobrir e corrigir erros em tempo real durante o desenvolvimento.

Apesar de ter sido criado pela Microsoft, o TypeScript é um projeto de código-aberto, com intensa participação da comunidade. Você pode saber mais sobre a linguagem, ler a documentação e testar sua utilização diretamente no navegador pelo site oficial.

[Artigo original](https://tecnoblog.net/426754/o-que-e-typescript-guia-para-iniciantes/)

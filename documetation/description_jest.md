# Jestjs descrição 

O jest é uma framework que automatiza e realiza testes unitários na aplicação, ou seja em cada função.
primeiro fazemos o teste do que queremos que nossa função retorne e depois fazemos a função passar no teste.


# Construção do jest

1. describe é a função que descrve e recebe os teste da função testada, dentro de discribe passamos o parâmetro de entrada
e passamos o que esperamos receber no final da função.
2. it ou test é onde descrevemos o que a função passada deve retornar com o parâmetro passado.
3. expect passamos a função que irá ser testada.

4. Vamos passar os comparadores que servem para nos dizer o que esperamos
EX: toBe() para compararmos valores esperados.
    toEqual() para comparar objetos, porque faz comparações profundas de forma recursiva.
    toBeNull() para quando quero que o retorno seja null.
    toBeInstanceOf() para quando eu quero que o obj retornado seja uma instância do objeto original ou verificar de que instância ele é.
    toBeDefined() para verificar se a propriedade esta definida.
    toBeTruthy() usa quando não se importa com o valor mas quer verificar vai ser verdadeiro, lembrando que tudo isso é falso (false, 0, '', null, undefined e NaN.).  
    toBeFalsy() verifica quando o retorno é falso.
    toBeGreaterThan() Verifica se o retorno é maior.
    toBeGreaterThanOrEqual() Verifica se o retorno é igual.
    toBeLessThan() verifica se o retorno é menor.
    toBeLessThanOrEqual() verifica se é menor ou igual.
    toBeCloseTo() Assim como o toBe() ele recebe e compara o numero a diferença é que o ele poemos definir quantas casas decimais              vamos verificar após a virgula, já que por padrão são usados 2 casas.
    toBeHaveLength() Verifica o tamanho do array, e também pode verificar a quantidade de caracteres possui determinada string dentro do array.
    toContain() Irá verificar se contem o itém no array ou função, pode ser usado com numero e string.
    not. pode ser usado em qualquer um dos métodos, ele ira negar e fazer ao contrario do moetodo.
    toEqual(expect.arrayContaining()) Podemos criar array com dados que queros verificar se existe no array retornado.
    toThrow() para capturar excessões

5. Metodos globais 
EX: describe() inicia o teste e tem a descrição. 
    beforeAll() Antes de tudo, podemos iniciar algo antes de darmos inicio aos testes.
    afterEach() Apos cada um dos teste devo executar algo.
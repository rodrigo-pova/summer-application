Esse é um projeto para o conteúdo sobre `Context API`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch main do seu projeto e execute o comando:
- `git branch`

Verifique se as seguintes branches apareceram:

  `exercise-one`
  `exercise-two`
  `exercise-three`

- Cada branch dessas será um exercício.
- Mude para a branch `exercise-one` com o comando `git checkout exercise-one`. É nessa branch que você realizará a solução para o exercício 1, e assim por diante.

Observe o que deve ser feito nas instruções para cada exercício.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a main, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

#### Exercício 1

Utilize como base a branch `exercise-one` deste repositório.

*Neste exercício, continuaremos a implementação de funcionalidades na aplicação que criamos ao longo da aula.*

*Você deve renderizar um campo de input de texto para receber o nome da pessoa usuária e personalizar a mensagem para que ela seja, por exemplo, 'Hello, Fulano!', dependendo do nome que tiver sido escrito.*

*Como a informação de nome da pessoa usuária não está relacionada ao idioma, convém que seja criado um novo Context para distribuir esta informação.*

---

#### Exercício 2

Utilize como base a branch `exercise-two` deste repositório.

*Neste exercício, você usará o Context para prover informações de tema para o componente aninhado Button sem passá-las como prop através do componente Content.*

*De início, o botão está sendo renderizado com o tema escuro, definido no objeto `themes` dentro de App.js. Você deve alterar a implementação do botão, de modo que, a cada clique, ele alterne entre os temas claro e escuro. Pressupondo que haveria muitos outros componentes que interagiriam com o tema da aplicação, ele deve ser armazenado no estado do componente App e provido através do Context.*

---

#### BÔNUS: Exercício 3

Utilize como base a branch `exercise-three` deste repositório.

*Neste exercício, você encontrará uma aplicação simples de contador com botões para incrementar ou diminuir a quantidade renderizada, implementada utilizando o Redux.*

*Você deve refatorá-la para que use o Context, em vez do Redux, para gerenciar o estado global da aplicação.*

---

## MY STAR WARS
Projeto para listar os personagens dos filmes do Star Wars api https://swapi.dev/.
- Listar os personagens
- Ao tocar em um personagem na lista exibir algumas caracteristicas como também os títulos dos filmes que o personagem aparece.
- Possibilidade de favoritar ou desfavoritar um personagem.


## MOCKUP FIGMA
Abaixo segue o mockup desenvolvido o figma.
https://www.figma.com/file/Xs3v4Ls1hX7hrDC5f3Wco5/StarWars?node-id=1%3A3

## EXECUTANDO 
Instale primeiramente as dependencias do projeto.
```
yarn
```

Rodando em Android
```
yarn android
```

Rodando em Android
```
yarn ios
```

## ARQUITETURAS 
### FLUX 
O Flux traz um conceito de fluxo unidirecional de dados onde a interação do usuário vai provocar um evento no formato de uma action específica. Essa ação vai despachar o evento para a modificação de um dados, que vai modificar o store de dados e, por fim, este vai enviar um evento de atualização da visualização. Ao final a visualização vai consumir os dados das mais variadas formas.
- Redux
- Redux Sagas
- Redux Persist

### ATOMIC DESIGN
O Atomic Design é uma metodologia desenvolvida por Brad Frost para a criação de design systems. Ela é composta por cinco estágios, trabalhando juntos para criar interfaces de maneira deliberada e hierárquica. Os cinco estágios do Atomic Design são: átomos, moléculas, organismos, modelos e paginas.

https://bradfrost.com/blog/post/atomic-web-design/

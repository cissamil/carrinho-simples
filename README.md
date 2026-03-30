# Carrinho Simples - React Native com Expo

Este projeto e uma aplicacao simples de lista de compras feita com React Native + Expo.
O objetivo e praticar conceitos basicos de desenvolvimento mobile/web com componentes, estado e renderizacao de listas.

## O que a aplicacao faz

- Mostra uma lista de produtos.
- Exibe nome e imagem de cada item.
- Permite marcar/desmarcar itens no carrinho.
- Atualiza a quantidade de itens adicionados ao carrinho em tempo real.

## Tecnologias usadas

- React Native
- Expo
- TypeScript
- Expo Vector Icons

## Como rodar o projeto na web

Execute os comandos abaixo na raiz do projeto:

```bash
npm ci
npx expo install react-dom react-native-web
npx expo start --web
```

## Observacoes

- O comando `npm ci` instala as dependencias de forma limpa e reproduzivel a partir do `package-lock.json`.
- O comando `npx expo install react-dom react-native-web` garante os pacotes corretos para execucao no navegador.
- O comando `npx expo start --web` inicia o servidor de desenvolvimento e abre a aplicacao na web.

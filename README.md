# Aprendendo NextJS

Repositório criado para aprendizado sobre **Next**.

## Conceito

Next é um framework baseado em React que nos fornece funcionalidades nativas que antes precisaríamos de uma biblioteca de terceiros, como:

- **Server Side Rendering** (SSR).
- **Static Site Generation** (SSG).
- **Divisão de código** (carregamento inicial melhorado).
- **Roteamento** (baseado em pastas).
- **API routes** (rotas para api).

## Layout

Tudo começar do arquivo _layout.tsx_, onde é montado a estrutura do html.

## Metadados

São informações que auxiliam a indexação da nossa aplicação nas pesquisas do google.

No Next, adicionamos metadados das páginas criando uma constante **metadata** com o tipo _Metadata_ importado do Next.

Alguns exemplos:

1. **Title (string)**: Título que fica na aba da pagina.
1. **Description (string)**: Descrição que aparece no google.
1. **openGraph (object)**: informações que aparecem na pre-visualização quando compartilha um link.

```typescript
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aula - learning NextJS",
  description: "Learning NextJS with Sujeito Programador!",
  openGraph: {
    title: "Aprendendo NextJS com Sujeito Programador no Youtube!",
    description: "Learning NextJS with Sujeito Programador!",
  },
  robots: {
    index: true,
    follow: true,
    noarchive: true,
    googleBot: {
      index: true,
      follow: true,
      noarchive: true,
    },
  },
};
```

## Server e Client Component

### Server Component

É um componente que é renderizado dentro do servidor, aumentando a otimização do site uma vez que não é necessário enviar um arquivo enorme de JS para o cliente baixar.

A página já vem pronta do servidor e padrão todo componente em Next é um Server Component.

Outra característica desse tipo de componente é que nele é possível fazer requisições / acessar banco de dados diretamente dentro do component pois como está no lado do servidor a aplicação tem acesso.

Um ponto importante é que como ele renderizado no servidor e entregue a página pronta, não é possível adicionar interatividade nesse componente, ou seja, não podemos utilizar interação como onClick, onSubmit ou hooks como state, effect, etc.

Para fazer isso teria que importar um componente client e utilizar dentro dele.

Server component viram páginas estáticas quando é gerado o build da aplicação, caso eu precise de alguma função que se atualize com o tempo eu preciso declarar uma constante **revalidate** com o numero em segundos o tempo que é preciso atualizar a página.

### Client Component

Componente padrão do React, para criar esse tipo de componente só precisamos adicionar "**use client**" na primeira linha do arquivo e pronto.

Eu posso utilizar um Client dentro de um Server porem não posso adicionar diretamente um Server dentro de um Client, para fazer isso utiliza a estratégia de passar o server component como children.

## Action Server

Adicionando "**use server** dentro de uma função eu posso fazer com que a mesma seja executada dentro do servidor.

Um exemplo de uso é fazer uma função para adicionar ao _action_ de um form, eu posso validar os dados do formulário e fazer uma nova requisição.

## Rotas

No NextJS temos rotas como funcionalidade nativa.

Dentro da pasta app, todas as pastas caso eu crie um arquivo **page.tsx** vira uma rota da aplicação, ex: _app > about > store_ vira um caminho, nesse caso www.meuDominio.com/about/store

### Rotas dinâmicas

Para criar esse tipo de rota criamos uma pasta com o parâmetro (nesse caso o id) entre colchetes.

pastas: _app > post > [id]_

url: _www.meuDominio.com/posts/123_

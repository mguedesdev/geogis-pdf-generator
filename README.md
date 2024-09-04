# 📄 GeoGIS PDF Generator

Aplicação para a criação, edição e envio de documentos PDF, com suporte para adicionar parágrafos e imagens, e uma interface intuitiva para gerenciamento de conteúdo.

## 🚀 Tecnologias Utilizadas

- **Next.js** 14.2.7 (versão App Router, sem pages)
- **React** 18
- **Styled-components** 6.1.8
- **React Icons** 5.0.1
- **@react-pdf/renderer** 3.4.4
- **React Toastify** 10.0.5
- **Dnd-kit** (para drag-and-drop)

## ⚙️ Instalação

Clone o repositório:

```bash
git clone git@github.com:mguedesdev/geogis-pdf-generator.git
```

Acesse o diretório do projeto:

```bash
cd geogis-pdf-generator
```

Instale as dependências:

```bash
yarn install
```

Execute o comando para rodar o ambiente de desenvolvimento:

```bash
yarn dev
```

## 🌟 Funcionalidades

- **Edição Dinâmica**: Adicione e edite parágrafos e imagens no documento.
- **Visualização**: Visualize o PDF gerado diretamente no navegador sem precisar baixar.
- **Download e Envio de PDF**: Baixe ou envie o PDF para um servidor via API.
- **Drag-and-Drop**: Reorganize os itens do documento usando drag-and-drop.

## 🖥️ Como Usar

- **Adicionar Conteúdo**: Utilize o menu lateral para adicionar novos parágrafos ou imagens ao documento.
- **Editar Parágrafo**: Clique diretamente sobre um parágrafo no editor para modificá-lo.
- **Editar Imagem**: Para editar uma imagem, clique no ícone de lápis ao lado do item correspondente.
- **Remover Conteúdo**: Clique no ícone de lixeira para excluir tanto parágrafos quanto imagens do documento.
- **Visualizar PDF**: Pressione o botão _Preview_ para gerar e visualizar uma prévia do PDF no navegador.
- **Download/Envio**: Clique em _Download_ para baixar o PDF ou em _Enviar PDF_ para enviá-lo via API.

## 📂 Arquitetura

### src/components

- **Button.ts**: Botão reutilizável usado na aplicação. Exibe diferentes ícones dependendo da ação como _Download_, _Preview_ e _Enviar_ PDF.
- **DraggableItem.tsx**: Componente que representa um item (parágrafo ou imagem) que pode ser arrastado e reordenado dentro da lista. Utiliza a biblioteca `dnd-kit`.

- **DraggableList.tsx**: Gerencia a lista de itens arrastáveis, utilizando o `dnd-kit` para ordenar os parágrafos e imagens.

- **Header.tsx**: Componente que exibe os botões principais (Preview, Download, Enviar PDF), além de gerenciar as interações com o estado de carregamento (_loading_) e exibir ícones dinâmicos.

- **Layoutpdf.tsx**: Componente responsável pela estrutura visual do PDF. Define o layout de como os parágrafos e imagens são renderizados dentro do documento PDF.

- **Providers.tsx**: Responsável por fornecer os contextos e configurações necessárias para que toda a aplicação funcione corretamente.

- **SideMenu.tsx**: Menu lateral para adicionar novos parágrafos ou imagens ao documento. Permite que o usuário interaja diretamente com o conteúdo que deseja adicionar.

### **src/@types**

- **Items.ts**: Define os tipos para os itens utilizados no PDF (parágrafos e imagens)

### **src/contexts**

- **ItemsContext.tsx**: Gerencia o estado global dos itens (parágrafos e imagens) e a geração de PDFs no contexto da aplicação.

### **src/hooks**

- **useOrderContentPDF.ts**: Hook customizado para ordenar o conteúdo no PDF com base nos itens (parágrafos e imagens).

### **src/services**

- **api.ts**: Função de serviço responsável pelo envio do PDF via API. Atualmente, o código está configurado para simular o envio com um `setTimeout`, retornando uma resposta de sucesso após 500ms.

**Observação**: No código, há uma simulação de uma requisição real de upload para uma API, comentada. Para utilizar a requisição real, basta descomentar o trecho indicado. O envio real seria feito usando `axios` e o método `POST` para a rota `/uploadPDF`, enviando o arquivo em formato `multipart/form-data`.

### **src/styles**

- **global.ts**: Estilos globais da aplicação, aplicados em todos os componentes.
- **theme.ts**: Definição de tema customizado com Styled Components.

### **src/utils**

- **toastUtils.ts**: Funções utilitárias para exibir notificações de sucesso ou erro com React Toastify.

## 📞 Contato

Se você tiver dúvidas com o projeto, pode me chamar

[LinkedIn](https://www.linkedin.com/in/mathheusg/) ou enviar um e-mail: mathheus.gr@gmail.com.

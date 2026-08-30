# 📝 TaskFlow

> Uma aplicação web simples, responsiva e intuitiva para gerenciamento de tarefas do dia a dia.

O **TaskFlow** é uma aplicação de lista de tarefas desenvolvida com **HTML5, CSS3 e JavaScript**, criada com o objetivo de praticar e aplicar conceitos fundamentais de desenvolvimento Front-End, principalmente **manipulação do DOM, eventos, criação dinâmica de elementos e lógica com JavaScript**.

A aplicação permite adicionar, concluir e acompanhar tarefas através de uma interface limpa e responsiva, funcionando tanto em computadores quanto em dispositivos móveis.

---

## 🚀 Preview

### 💻 Desktop

<p align="center">
  <img src="./assets/desktop-preview.png" alt="Taskflow - versão desktop" width="500">
</p>

### 📱 Mobile

<p align="center">
  <img src="./assets/mobile-preview.png" alt="Taskflow - versão mobile" width="150">
</p>

---

## ✨ Funcionalidades

* ➕ Adição de novas tarefas
* ⌨️ Adição de tarefas utilizando a tecla **Enter**
* 🖱️ Adição de tarefas através do botão
* ✅ Marcação de tarefas como concluídas
* 📊 Contador de tarefas cadastradas
* ⏳ Contador de tarefas pendentes
* ✔️ Contador de tarefas concluídas
* 🧹 Atualização automática dos contadores
* 📱 Layout responsivo para dispositivos móveis
* 💻 Interface adaptada para desktop
* 🎨 Interface moderna e intuitiva
* 🔄 Atualização dinâmica da lista sem recarregar a página
* 🚫 Validação para impedir o cadastro de tarefas vazias
* ✂️ Tratamento de espaços desnecessários utilizando `trim()`

---

## 🛠️ Tecnologias utilizadas

### HTML5

Utilizado para construir a estrutura semântica da aplicação.

Principais conceitos utilizados:

* Estruturação da página
* Formulários e campos de entrada
* Botões e elementos interativos
* Listas para representação das tarefas
* Organização dos componentes da interface
* Classes e IDs utilizados para integração com o JavaScript

### CSS3

Responsável pela aparência e responsividade da aplicação.

Principais conceitos utilizados:

* Flexbox
* Responsividade
* Media Queries
* Organização de layouts
* Estilização de botões
* Estados visuais das tarefas
* Espaçamentos e alinhamentos
* Tipografia
* Cores e contraste
* Adaptação para telas menores

A aplicação possui uma estrutura responsiva que permite sua utilização em diferentes tamanhos de tela.

### JavaScript

O JavaScript é responsável pela lógica e pelo comportamento da aplicação.

Principais conceitos praticados:

* `querySelector()`
* `addEventListener()`
* Funções
* Condicionais
* Manipulação do DOM
* `createElement()`
* `appendChild()`
* `textContent`
* `classList`
* Eventos de clique
* Eventos de teclado
* `keydown`
* `trim()`
* Manipulação de classes CSS
* Atualização dinâmica de informações
* Event Delegation

---

## 🧠 Destaques técnicos

Um dos principais objetivos do projeto foi praticar **JavaScript aplicado ao DOM**, permitindo que a interface seja atualizada dinamicamente de acordo com as ações do usuário.

### Criação dinâmica das tarefas

As tarefas não são inseridas diretamente no HTML.

Quando o usuário adiciona uma tarefa, o JavaScript cria um novo elemento `li` dinamicamente:

```javascript
const newTask = document.createElement("li");
```

Depois, o elemento é inserido na lista através do DOM:

```javascript
taskList.appendChild(newTask);
```

Isso permite que novas tarefas sejam adicionadas sem precisar recarregar a página.

---

### Validação do campo

Antes de criar uma tarefa, o conteúdo digitado é tratado com `trim()`:

```javascript
const task = taskInput.value.trim();
```

Dessa maneira, espaços vazios no início e no final são removidos e o sistema consegue impedir o cadastro de tarefas sem conteúdo.

Exemplo:

```text
"    Estudar JavaScript    "
```

é tratado como:

```text
"Estudar JavaScript"
```

---

### Adição através do botão

O botão possui um evento de clique responsável por executar a função de criação da tarefa:

```javascript
taskButton.addEventListener("click", buttonClicked);
```

Assim, o usuário pode adicionar uma tarefa através da interface tradicional.

---

### Adição utilizando a tecla Enter

Além do botão, a aplicação também permite adicionar uma tarefa pressionando **Enter** enquanto o usuário está digitando no campo.

O JavaScript monitora o teclado através de um evento:

```javascript
taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        buttonClicked();
    }
});
```

Dessa forma, a mesma função utilizada pelo botão também é reutilizada pelo teclado.

Isso evita duplicação de lógica e mantém o comportamento da aplicação centralizado.

---

### Manipulação de eventos

O projeto utiliza eventos para detectar as interações realizadas pelo usuário.

Entre eles:

* `click`
* `keydown`

Esses eventos permitem que o JavaScript responda às ações realizadas na interface.

---

### Event Delegation

Para trabalhar com elementos criados dinamicamente, foi utilizado o conceito de **Event Delegation**.

Em vez de adicionar um evento individual para cada tarefa criada, o evento é monitorado no elemento pai:

```javascript
taskList.addEventListener("click", taskClicked);
```

Isso permite que tarefas adicionadas posteriormente também possam ser identificadas pelo mesmo listener.

Essa abordagem é especialmente importante quando trabalhamos com elementos que não existem no HTML inicialmente.

---

### Atualização dos contadores

A aplicação mantém informações sobre o estado das tarefas:

* Total de tarefas
* Tarefas pendentes
* Tarefas concluídas

Esses valores são atualizados dinamicamente através do JavaScript sempre que uma tarefa é adicionada ou alterada.

---

## 📱 Responsividade

O TaskFlow foi desenvolvido pensando em diferentes dispositivos.

Através do **CSS3 e Media Queries**, a interface se adapta para diferentes tamanhos de tela.

### Desktop

Em telas maiores, a aplicação utiliza melhor o espaço horizontal disponível, mantendo uma apresentação confortável para utilização em computadores.

### Mobile

Em telas menores, os elementos são reorganizados para facilitar a utilização através de dispositivos touch.

Exemplo da abordagem utilizada:

```css
@media (max-width: 550px) {
    .container {
        flex-direction: column;
    }
}
```

---

## 📂 Estrutura do projeto

```text
TaskFlow/
│
├── index.html
├── styles.css
├── scripts.js
│
├── taskflow-desktop.png
├── taskflow-mobile.png
│
└── README.md
```

> Os nomes das imagens acima são apenas exemplos. Substitua pelos nomes reais dos seus arquivos.

---

## ⚙️ Como executar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/BrunoAjala2023/taskFlow.git
```

### 2. Entre na pasta

```bash
cd taskflow
```

### 3. Abra o projeto

Abra o arquivo:

```text
index.html
```

Você também pode utilizar uma extensão como **Live Server** no VS Code para executar o projeto localmente.

---

## 🎯 Objetivos do projeto

O TaskFlow foi desenvolvido principalmente como um projeto de prática e consolidação dos conhecimentos adquiridos durante os estudos de Front-End.

Entre os principais objetivos estão:

* Praticar HTML5 e estruturação de páginas
* Desenvolver interfaces com CSS3
* Trabalhar com layouts responsivos
* Aprender manipulação do DOM
* Trabalhar com eventos JavaScript
* Criar elementos dinamicamente
* Utilizar funções para organizar a lógica
* Trabalhar com condicionais
* Manipular classes CSS através do JavaScript
* Praticar Event Delegation
* Trabalhar com eventos de teclado
* Criar interações sem necessidade de recarregar a página
* Desenvolver uma aplicação funcional utilizando tecnologias fundamentais do Front-End

---

## 📚 Conceitos de JavaScript praticados

Este projeto serviu como prática para diversos conceitos importantes:

| Conceito             | Aplicação no projeto                |
| -------------------- | ----------------------------------- |
| `querySelector()`    | Seleção dos elementos HTML          |
| `addEventListener()` | Criação dos eventos                 |
| `createElement()`    | Criação dinâmica das tarefas        |
| `appendChild()`      | Inserção dos elementos no DOM       |
| `textContent`        | Alteração do conteúdo dos elementos |
| `classList`          | Manipulação das classes CSS         |
| `trim()`             | Tratamento do conteúdo digitado     |
| `if`                 | Validação e tomada de decisões      |
| Funções              | Organização da lógica               |
| `keydown`            | Detecção da tecla Enter             |
| `click`              | Interação com botões e tarefas      |
| Event Delegation     | Gerenciamento de eventos dinâmicos  |

---

## 🔮 Possíveis melhorias futuras

O projeto pode continuar evoluindo com novas funcionalidades, como:

* 💾 Persistência das tarefas com `localStorage`
* 🗑️ Exclusão individual de tarefas
* ✏️ Edição de tarefas
* 🔍 Filtro por tarefas pendentes/concluídas
* 📅 Adição de datas e horários
* 🔔 Sistema de prioridades
* 🌙 Dark Mode
* 📊 Estatísticas de produtividade
* 🏷️ Categorias de tarefas
* 🔄 Drag and Drop para reorganização
* 📱 Melhorias adicionais de acessibilidade

---

## 👨‍💻 Desenvolvedor

**Bruno Ajala Fernandes**

Front-End Developer Júnior em formação.

Atualmente desenvolvendo conhecimentos em:

* HTML5
* CSS3
* JavaScript
* DOM
* Git & GitHub
* Desenvolvimento Web Responsivo

### 📫 Contato

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)](https://github.com/BrunoAjala2023)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge\&logo=linkedin\&logoColor=white)](https://www.linkedin.com/)

---

## ⭐ Sobre o projeto

O **TaskFlow** representa uma etapa prática do meu processo de aprendizado em desenvolvimento Front-End.

Mais do que uma lista de tarefas, o projeto foi utilizado para colocar em prática conceitos fundamentais de **HTML, CSS e JavaScript**, especialmente a interação entre JavaScript e DOM.

O projeto também demonstra a evolução da aplicação através da implementação de recursos como **validação de entrada, criação dinâmica de elementos, manipulação de eventos, Event Delegation, contadores dinâmicos e interação através do teclado**.

---

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo e portfólio.

Sinta-se à vontade para explorar o código e utilizar o projeto como referência para estudos.

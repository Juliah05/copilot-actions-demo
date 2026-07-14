[![Node.js CI](https://github.com/Juliah05/copilot-actions-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/Juliah05/copilot-actions-demo/actions/workflows/ci.yml)

## Introdução

Este projeto foi desenvolvido como uma simulação de um cenário empresarial em que uma equipe de desenvolvimento precisava melhorar a qualidade e a velocidade de entrega de software.

O problema enfrentado pela equipe estava relacionado à necessidade de reduzir erros durante o desenvolvimento, automatizar a execução de testes e garantir que novas alterações no código fossem validadas antes de serem disponibilizadas. Processos manuais de testes e validações aumentavam o tempo de entrega e poderiam permitir que falhas chegassem ao ambiente de produção.

Para solucionar esse desafio, foram utilizadas ferramentas de Inteligência Artificial, especialmente o GitHub Copilot, juntamente com o GitHub Actions para automação do processo de integração contínua.

---

# Papel da Inteligência Artificial no desenvolvimento de software

A Inteligência Artificial tem transformado o ciclo de desenvolvimento de software ao auxiliar desenvolvedores em diferentes etapas, desde a criação até a manutenção do código.

O GitHub Copilot é uma ferramenta de IA generativa que funciona como um assistente de programação. Ele auxilia na criação de código, sugerindo funções, estruturas, testes automatizados e explicações sobre implementações.

No desenvolvimento deste projeto, o GitHub Copilot pode contribuir para:

- Gerar sugestões de código com base no contexto do projeto;
- Auxiliar na criação de testes automatizados;
- Identificar possíveis melhorias no código;
- Explicar erros e sugerir soluções;
- Aumentar a produtividade dos desenvolvedores.

A IA não substitui o desenvolvedor, mas atua como uma ferramenta de apoio, permitindo que a equipe dedique mais tempo à análise de problemas, arquitetura e decisões técnicas.

---

# IA no ciclo de desenvolvimento de software

A Inteligência Artificial pode atuar em diversas fases do ciclo de desenvolvimento:

## Planejamento

A IA pode auxiliar na análise de requisitos, organização de tarefas e identificação de riscos.

## Desenvolvimento

Ferramentas como GitHub Copilot ajudam na geração de código, criação de funções e documentação.

## Testes

A IA pode sugerir casos de teste, gerar testes automatizados e auxiliar na identificação de falhas.

## Integração e entrega contínua (CI/CD)

A IA pode apoiar a análise de alterações, enquanto ferramentas como GitHub Actions automatizam processos de validação.

---

# GitHub Actions e CI/CD

GitHub Actions é uma plataforma de automação integrada ao GitHub que permite criar workflows para executar tarefas automaticamente.

Neste projeto, foi criado um pipeline de Integração Contínua (Continuous Integration - CI), responsável por:

1. Baixar o código do repositório;
2. Configurar o ambiente Node.js;
3. Instalar as dependências do projeto;
4. Executar os testes automatizados utilizando Jest.

O conceito de CI/CD busca tornar o processo de desenvolvimento mais seguro e eficiente:

- **CI (Continuous Integration):** permite que alterações sejam integradas frequentemente e validadas automaticamente.
- **CD (Continuous Delivery/Deployment):** automatiza a entrega de novas versões do software.

Com o uso do GitHub Actions, erros podem ser identificados rapidamente antes que o código seja disponibilizado aos usuários.

---

# Caso real de uso

Empresas de tecnologia utilizam ferramentas de IA e automação para melhorar seus processos de desenvolvimento.

Um exemplo é a **Shopify**, que utiliza ferramentas do ecossistema GitHub para aumentar a produtividade das equipes de engenharia, automatizando processos e permitindo que desenvolvedores se concentrem em tarefas de maior valor.

Outro exemplo é a utilização do GitHub Copilot por equipes de desenvolvimento para acelerar a criação de código, auxiliar na escrita de testes e reduzir tarefas repetitivas.

Esses casos demonstram como a combinação entre Inteligência Artificial e práticas de CI/CD pode melhorar a velocidade de desenvolvimento e a qualidade do software.

---

# Tecnologias utilizadas

- Node.js
- Jest
- GitHub
- GitHub Actions
- GitHub Copilot

---

# Como executar o projeto

## 1. Clonar o repositório

```bash
git clone https://github.com/Juliah05/copilot-actions-demo.git
```

## 2. Acessar a pasta do projeto

```bash
cd copilot-actions-demo
```

## 3. Instalar as dependências

```bash
npm install
```

## 4. Executar os testes

```bash
npm test
```

---

# Integração Contínua

Sempre que um novo código é enviado para a branch principal (`main`), o GitHub Actions executa automaticamente o workflow configurado.

O pipeline realiza a instalação das dependências e executa os testes automatizados para garantir que o projeto continue funcionando corretamente.

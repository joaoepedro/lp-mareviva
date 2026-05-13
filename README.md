# 🌊 Maré Viva — Landing Page

> Plataforma de hospedagem litorânea conectando viajantes a hotéis e pousadas nas melhores cidades litorâneas do Brasil.

> ⚠️ **Projeto em construção** — novas seções e funcionalidades sendo adicionadas continuamente.

<br>

## 🔗 Acesse o projeto

**[➜ Ver o site ao vivo](https://joaoepedro.github.io/lp-mareviva/)**

<br>

## 🎯 Sobre o projeto

A **Maré Viva** é uma landing page fictícia desenvolvida para estudo e portfólio, simulando uma plataforma de hospedagem em cidades litorâneas do Brasil. O projeto foi construído do zero, sem frameworks ou ferramentas de geração de código, com foco em boas práticas de desenvolvimento front-end, design responsivo e experiência do usuário.

<br>

## ✨ Funcionalidades

- ✅ Header fixo com transição transparente ao rolar a página
- ✅ Menu hamburger com animação suave para mobile
- ✅ Hero com imagem de fundo e degradê orgânico
- ✅ Seção de números com métricas da plataforma
- ✅ Seção "Como Funciona" com ícones ilustrativos
- ✅ Carrossel de destinos com setas, dots e swipe mobile
- 🔄 Seção de depoimentos (em desenvolvimento)
- 🔄 CTA final com formulário e WhatsApp (em desenvolvimento)
- 🔄 Footer (em desenvolvimento)

<br>

## 🛠 Tecnologias

| Tecnologia        | Uso                                     |
| ----------------- | --------------------------------------- |
| HTML5             | Estrutura semântica                     |
| CSS3              | Estilização, variáveis, responsividade  |
| JavaScript (ES6+) | Interatividade, carrossel, swipe mobile |
| Google Fonts      | Plus Jakarta Sans + Inter               |
| Lucide Icons      | Ícones SVG ilustrativos                 |

<br>

## 🎨 Design System

Cores, fontes e espaçamentos centralizados em variáveis CSS no `:root`:

```css
:root {
	--c-base: #1b3a4b; /* Azul petróleo — fundo principal */
	--c-secondary: #2d6a7f; /* Azul secundário */
	--c-bg: #f5f0e8; /* Bege — fundo geral */
	--c-bg-alt: #e8dcc8; /* Bege alternativo */
	--c-cta: #c4873a; /* Âmbar — CTAs e destaques */

	--f-title: "Plus Jakarta Sans", sans-serif;
	--f-body: "Inter", sans-serif;
}
```

<br>

## 📁 Estrutura do projeto

```
lp-mareviva/
├── index.html         # Estrutura da página
├── style.css          # Estilização e design system
├── script.js          # Interatividade (header, carrossel, swipe)
├── hero.jpg           # Imagem do hero
├── florianopolis.jpg  # Imagem do destino Florianópolis
├── buzios.jpg         # Imagem do destino Búzios
├── porto-galinhas.jpg # Imagem do destino Porto de Galinhas
└── README.md
```

<br>

## 🚀 Como rodar localmente

```bash
# Clone o repositório
git clone https://github.com/joaoepedro/lp-mareviva.git

# Entre na pasta
cd lp-mareviva

# Abra no navegador
# Abra o arquivo index.html diretamente
# ou use a extensão Live Server no VS Code
```

<br>

## 📚 Aprendizados

Este projeto foi desenvolvido com foco em:

- Construção de layouts do zero sem frameworks
- Design system com variáveis CSS para fácil personalização
- Responsividade com media queries e abordagem desktop-first
- Interatividade com JavaScript puro — carrossel, swipe e scroll behavior
- Boas práticas de HTML semântico e acessibilidade

<br>

## 📄 Licença

Distribuído sob a licença MIT.

<br>

---

<p align="center">
  Desenvolvido como projeto de portfólio por <strong>João Pedro Morais</strong>
</p>

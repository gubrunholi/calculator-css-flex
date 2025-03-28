# Calculator CSS Flex

## Descrição
Este é um projeto de calculadora responsiva desenvolvida utilizando **HTML**, **CSS (Flexbox)** e **JavaScript**. O objetivo é demonstrar o uso do modelo de layout Flexbox para estruturar a interface de uma calculadora funcional.

## Tecnologias Utilizadas
- **HTML5**: Estrutura da página.
- **CSS3 (Flexbox)**: Estilização e layout responsivo.
- **JavaScript (ES6)**: Lógica de funcionamento da calculadora.
- **FontAwesome**: Ícones para botões especiais.

## Funcionalidades
- Adição, subtração, multiplicação e divisão.
- Botão "AC" para limpar o visor.
- Botão "Backspace" para apagar o último dígito inserido.
- Uso do ponto decimal.
- Interface responsiva com Flexbox.
- Botões estilizados para melhor usabilidade.
- Layout centralizado com opacidade ajustada para melhor visibilidade.

## Como Usar
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/calculator-css-flex.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd calculator-css-flex
   ```
3. Abra o arquivo `index.html` em seu navegador.

## Estrutura do Projeto
```
calculator-css-flex/
│── assets/
│   ├── css/
│   │   ├── reset.css
│   │   ├── main.css
│   ├── js/
│   │   ├── main.js
│── index.html
```

## Estilização CSS
A interface da calculadora foi projetada utilizando **Flexbox** para garantir um layout responsivo e centralizado. Alguns dos principais estilos utilizados:

- **Centralização**: `display: flex; justify-content: center; align-items: center;`.
- **Botões estilizados**: Cores diferenciadas para botões especiais (`background-color: #B31212;`).
- **Efeito hover**: Mudança de cor ao passar o mouse (`background-color: #000807;`).
- **Visor responsivo**: Ajustes de largura, altura e rolagem para exibição correta (`overflow-x: scroll; word-break: break-all;`).

## Contribuição
Sinta-se à vontade para contribuir com melhorias e correções:
1. Faça um fork do repositório.
2. Crie uma branch para sua funcionalidade:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Adicionando nova funcionalidade"
   ```
4. Envie para o repositório:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a [MIT License](LICENSE).

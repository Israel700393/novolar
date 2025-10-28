# Mercado Novo Lar - Plataforma de Delivery

Uma plataforma completa de delivery online para o Mercado Novo Lar, similar ao iFood, desenvolvida com HTML, CSS e JavaScript puro.

## 🚀 Funcionalidades

### Para Clientes:
- **Catálogo de Produtos**: Navegação por categorias (Frutas, Verduras, Carnes, Laticínios, Bebidas, Limpeza)
- **Busca Inteligente**: Pesquisa por nome ou descrição dos produtos
- **Carrinho de Compras**: Adicionar, remover e alterar quantidades
- **Cálculo Automático**: Total do pedido com taxa de entrega
- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Integração WhatsApp**: Finalização de pedidos via WhatsApp

### Para Administradores:
- **Painel Administrativo**: Gerenciamento completo da loja
- **Gestão de Produtos**: Adicionar, editar e remover produtos
- **Dashboard**: Estatísticas de vendas e pedidos
- **Configurações**: Taxa de entrega, pedido mínimo, horários

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- **Desktop**: Layout completo com sidebar do carrinho
- **Tablet**: Layout adaptado com navegação otimizada
- **Mobile**: Interface mobile-first com menu colapsável

## 🎨 Design

- **Cores**: Verde (#4a7c59) e dourado (#ffd700) - transmitindo frescor e qualidade
- **Tipografia**: Fontes modernas e legíveis
- **Ícones**: Font Awesome para ícones profissionais
- **Animações**: Transições suaves e feedback visual

## 📦 Estrutura de Arquivos

```
mercado-novo-lar/
├── mercado-novo-lar.html    # Página principal da loja
├── admin.html               # Painel administrativo
├── styles.css              # Estilos CSS responsivos
├── script.js               # Funcionalidades JavaScript
└── README.md               # Documentação
```

## 🛠️ Como Usar

### Instalação:
1. Baixe todos os arquivos
2. Abra `mercado-novo-lar.html` no navegador
3. Para acessar o admin, abra `admin.html`

### Personalização:
1. **Produtos**: Edite o array `products` no `script.js`
2. **Cores**: Modifique as variáveis CSS no `styles.css`
3. **WhatsApp**: Altere o número no `script.js` (linha com `wa.me`)
4. **Informações**: Atualize dados de contato no HTML

## 📊 Produtos Incluídos

### Frutas (5 produtos)
- Maçã Gala, Banana Prata, Laranja Lima, Uva Itália, Abacaxi Pérola

### Verduras (5 produtos)
- Alface Americana, Tomate Salada, Cenoura, Brócolis, Cebola Branca

### Carnes (4 produtos)
- Peito de Frango, Carne Moída, Linguiça Toscana, Costela Suína

### Laticínios (4 produtos)
- Leite Integral, Queijo Mussarela, Iogurte Natural, Manteiga

### Bebidas (4 produtos)
- Água Mineral, Refrigerante Cola, Suco de Laranja, Cerveja Pilsen

### Limpeza (4 produtos)
- Detergente, Sabão em Pó, Desinfetante, Papel Higiênico

## 🔧 Funcionalidades Técnicas

### JavaScript:
- **Gerenciamento de Estado**: Carrinho persistente durante a sessão
- **Filtros Dinâmicos**: Filtragem por categoria em tempo real
- **Busca**: Sistema de busca com debounce
- **Notificações**: Feedback visual para ações do usuário
- **Scroll Suave**: Navegação fluida entre seções

### CSS:
- **Grid Layout**: Layout responsivo com CSS Grid
- **Flexbox**: Alinhamento e distribuição de elementos
- **Animações**: Keyframes para transições suaves
- **Media Queries**: Breakpoints para diferentes dispositivos

## 📱 Integração WhatsApp

O sistema integra com WhatsApp para finalização de pedidos:
- Resumo automático do pedido
- Cálculo total com taxa de entrega
- Link direto para WhatsApp Business

## 🎯 SEO e Performance

- **Meta Tags**: Configuradas para SEO
- **Lazy Loading**: Preparado para carregamento otimizado
- **Compressão**: CSS e JS otimizados
- **Acessibilidade**: Estrutura semântica e ARIA labels

## 🔒 Segurança

- **Validação**: Inputs validados no frontend
- **Sanitização**: Prevenção de XSS básica
- **HTTPS Ready**: Preparado para SSL

## 📈 Próximas Funcionalidades

- [ ] Sistema de login/cadastro
- [ ] Histórico de pedidos
- [ ] Avaliações de produtos
- [ ] Cupons de desconto
- [ ] Notificações push
- [ ] Integração com pagamento online
- [ ] Sistema de fidelidade

## 🤝 Suporte

Para suporte técnico ou dúvidas:
- **Email**: contato@mercadonovolar.com
- **WhatsApp**: (11) 99999-9999
- **Horário**: Segunda a Domingo, 7h às 22h

## 📄 Licença

Este projeto foi desenvolvido para o Mercado Novo Lar. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para o Mercado Novo Lar**
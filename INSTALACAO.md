# 🚀 Guia de Instalação - Mercado Novo Lar

## 📋 Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor web local (opcional, mas recomendado)

## 📁 Estrutura de Arquivos

```
mercado-novo-lar/
├── mercado-novo-lar.html    # Página principal da loja
├── admin.html               # Painel administrativo
├── styles.css              # Estilos CSS responsivos
├── script.js               # Funcionalidades JavaScript
├── config.js               # Configurações da loja
├── README.md               # Documentação completa
├── INSTALACAO.md           # Este arquivo
└── arain.html              # Arquivo auxiliar
```

## 🔧 Instalação Rápida

### Opção 1: Uso Direto (Mais Simples)
1. Baixe todos os arquivos para uma pasta
2. Abra `mercado-novo-lar.html` no navegador
3. Pronto! O site está funcionando

### Opção 2: Servidor Local (Recomendado)
1. Instale um servidor web local:
   - **Python**: `python -m http.server 8000`
   - **Node.js**: `npx serve .`
   - **PHP**: `php -S localhost:8000`
   - **Live Server** (VS Code)

2. Acesse `http://localhost:8000/mercado-novo-lar.html`

## 🔐 Acesso Administrativo

### Credenciais Padrão:
- **URL**: `admin.html`
- **Senha**: `admin123`

### Como Acessar:
1. Clique em "Área Admin" no rodapé do site
2. Digite a senha quando solicitado
3. Ou acesse diretamente `admin.html`

## ⚙️ Configuração Inicial

### 1. Informações da Loja
Edite o arquivo `config.js`:

```javascript
store: {
    name: 'SEU_NOME_AQUI',
    phone: 'SEU_TELEFONE',
    email: 'SEU_EMAIL',
    address: 'SEU_ENDEREÇO'
}
```

### 2. Configurações de Entrega
```javascript
delivery: {
    fee: 5.00,           // Taxa de entrega
    minOrder: 30.00,     // Pedido mínimo
    freeDeliveryAbove: 50.00  // Frete grátis acima de
}
```

### 3. WhatsApp
```javascript
social: {
    whatsapp: '5511999999999'  // Seu número com código do país
}
```

## 🎨 Personalização

### Cores e Tema
No arquivo `styles.css`, altere as variáveis CSS:

```css
:root {
    --primary-color: #4a7c59;    /* Cor principal */
    --accent-color: #ffd700;     /* Cor de destaque */
    --bg-color: #ffffff;         /* Cor de fundo */
}
```

### Produtos
1. Acesse o painel admin
2. Vá em "Produtos"
3. Adicione, edite ou remova produtos

### Logo
Substitua o ícone no HTML:
```html
<i class="fas fa-shopping-cart"></i> <!-- Altere aqui -->
```

## 📱 Funcionalidades Principais

### ✅ Para Clientes:
- [x] Catálogo de produtos por categoria
- [x] Busca inteligente
- [x] Carrinho de compras
- [x] Cálculo automático de total
- [x] Integração WhatsApp
- [x] Design responsivo
- [x] Modo escuro/claro

### ✅ Para Administradores:
- [x] Dashboard com estatísticas
- [x] Gerenciamento de produtos (CRUD)
- [x] Visualização de pedidos
- [x] Configurações da loja
- [x] Backup/Restauração de dados
- [x] Alteração de senha
- [x] Modo escuro/claro

## 🔒 Segurança

### Alterar Senha do Admin:
1. Acesse o painel admin
2. Vá em "Configurações"
3. Seção "Segurança"
4. Digite a senha atual e a nova senha

### Configurações Avançadas:
No `config.js`:
```javascript
admin: {
    defaultPassword: 'SUA_NOVA_SENHA',
    sessionTimeout: 30  // minutos
}
```

## 🌐 Hospedagem Online

### Opções Gratuitas:
1. **Netlify**: Arraste a pasta para netlify.com
2. **Vercel**: Conecte com GitHub
3. **GitHub Pages**: Suba para repositório público
4. **Firebase Hosting**: `firebase deploy`

### Configuração para Produção:
1. Altere todas as configurações no `config.js`
2. Teste todas as funcionalidades
3. Configure SSL (HTTPS)
4. Configure domínio personalizado

## 🐛 Solução de Problemas

### Problema: Site não carrega
**Solução**: Verifique se todos os arquivos estão na mesma pasta

### Problema: Admin não funciona
**Solução**: Verifique se `config.js` está carregando

### Problema: WhatsApp não abre
**Solução**: Verifique o número no `config.js` (formato: 5511999999999)

### Problema: Tema não muda
**Solução**: Limpe o cache do navegador (Ctrl+F5)

## 📞 Suporte

### Logs de Erro:
1. Abra o console do navegador (F12)
2. Vá na aba "Console"
3. Procure por mensagens de erro em vermelho

### Backup dos Dados:
1. Acesse o painel admin
2. Vá em "Configurações"
3. Clique em "Exportar Dados"

## 🚀 Próximos Passos

Após a instalação:

1. ✅ Configure suas informações
2. ✅ Adicione seus produtos
3. ✅ Teste o fluxo de pedidos
4. ✅ Configure o WhatsApp Business
5. ✅ Faça backup dos dados
6. ✅ Publique online

## 📈 Melhorias Futuras

- [ ] Sistema de usuários
- [ ] Histórico de pedidos
- [ ] Cupons de desconto
- [ ] Avaliações de produtos
- [ ] Notificações push
- [ ] Integração com pagamentos
- [ ] App mobile

---

**🎉 Parabéns! Seu Mercado Novo Lar está pronto para funcionar!**

Para dúvidas, consulte o arquivo `README.md` ou entre em contato.
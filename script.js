// Dados dos produtos
const products = [
    // Frutas
    { id: 1, name: 'Maçã Gala', category: 'frutas', price: 4.99, description: 'Maçã doce e crocante, ideal para lanches', icon: '🍎' },
    { id: 2, name: 'Banana Prata', category: 'frutas', price: 3.49, description: 'Banana madura e saborosa, rica em potássio', icon: '🍌' },
    { id: 3, name: 'Laranja Lima', category: 'frutas', price: 2.99, description: 'Laranja doce e suculenta, perfeita para sucos', icon: '🍊' },
    { id: 4, name: 'Uva Itália', category: 'frutas', price: 8.99, description: 'Uva doce e sem sementes', icon: '🍇' },
    { id: 5, name: 'Abacaxi Pérola', category: 'frutas', price: 6.99, description: 'Abacaxi maduro e doce', icon: '🍍' },
    
    // Verduras
    { id: 6, name: 'Alface Americana', category: 'verduras', price: 2.49, description: 'Alface fresca e crocante', icon: '🥬' },
    { id: 7, name: 'Tomate Salada', category: 'verduras', price: 5.99, description: 'Tomate vermelho e maduro', icon: '🍅' },
    { id: 8, name: 'Cenoura', category: 'verduras', price: 3.99, description: 'Cenoura fresca e doce', icon: '🥕' },
    { id: 9, name: 'Brócolis', category: 'verduras', price: 4.49, description: 'Brócolis verde e nutritivo', icon: '🥦' },
    { id: 10, name: 'Cebola Branca', category: 'verduras', price: 2.99, description: 'Cebola fresca para temperos', icon: '🧅' },
    
    // Carnes
    { id: 11, name: 'Peito de Frango', category: 'carnes', price: 12.99, description: 'Peito de frango sem osso, 1kg', icon: '🍗' },
    { id: 12, name: 'Carne Moída', category: 'carnes', price: 18.99, description: 'Carne moída primeira, 1kg', icon: '🥩' },
    { id: 13, name: 'Linguiça Toscana', category: 'carnes', price: 15.99, description: 'Linguiça artesanal temperada', icon: '🌭' },
    { id: 14, name: 'Costela Suína', category: 'carnes', price: 16.99, description: 'Costela suína para churrasco', icon: '🥓' },
    
    // Laticínios
    { id: 15, name: 'Leite Integral', category: 'laticinios', price: 4.99, description: 'Leite integral 1L', icon: '🥛' },
    { id: 16, name: 'Queijo Mussarela', category: 'laticinios', price: 24.99, description: 'Queijo mussarela fatiado 500g', icon: '🧀' },
    { id: 17, name: 'Iogurte Natural', category: 'laticinios', price: 3.99, description: 'Iogurte natural cremoso', icon: '🥛' },
    { id: 18, name: 'Manteiga', category: 'laticinios', price: 8.99, description: 'Manteiga com sal 200g', icon: '🧈' },
    
    // Bebidas
    { id: 19, name: 'Água Mineral', category: 'bebidas', price: 2.49, description: 'Água mineral 1,5L', icon: '💧' },
    { id: 20, name: 'Refrigerante Cola', category: 'bebidas', price: 5.99, description: 'Refrigerante cola 2L', icon: '🥤' },
    { id: 21, name: 'Suco de Laranja', category: 'bebidas', price: 7.99, description: 'Suco natural de laranja 1L', icon: '🧃' },
    { id: 22, name: 'Cerveja Pilsen', category: 'bebidas', price: 3.99, description: 'Cerveja pilsen 350ml', icon: '🍺' },
    
    // Limpeza
    { id: 23, name: 'Detergente', category: 'limpeza', price: 2.99, description: 'Detergente neutro 500ml', icon: '🧽' },
    { id: 24, name: 'Sabão em Pó', category: 'limpeza', price: 12.99, description: 'Sabão em pó 1kg', icon: '📦' },
    { id: 25, name: 'Desinfetante', category: 'limpeza', price: 4.99, description: 'Desinfetante lavanda 1L', icon: '🧴' },
    { id: 26, name: 'Papel Higiênico', category: 'limpeza', price: 18.99, description: 'Papel higiênico 12 rolos', icon: '🧻' }
];

// Carrinho de compras
let cart = [];
let currentFilter = 'todos';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    updateCartUI();
    setupSearch();
    initializeTheme();
    setupMobileNav();
});

// Renderizar produtos
function renderProducts(productsToRender = products) {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <span style="font-size: 4rem;">${product.icon}</span>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">R$ ${product.price.toFixed(2).replace('.', ',')}</div>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-plus"></i> Adicionar ao Carrinho
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Filtrar produtos
function filterProducts(category) {
    currentFilter = category;
    
    // Atualizar botões de filtro
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filtrar e renderizar produtos
    let filteredProducts = products;
    if (category !== 'todos') {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    renderProducts(filteredProducts);
}

// Adicionar ao carrinho
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartUI();
    showCartNotification();
}

// Remover do carrinho
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// Atualizar quantidade
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartUI();
        }
    }
}

// Atualizar interface do carrinho
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    // Atualizar contador
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Atualizar itens do carrinho
    cartItems.innerHTML = '';
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Seu carrinho está vazio</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div style="font-size: 2rem;">${item.icon}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">R$ ${item.price.toFixed(2).replace('.', ',')}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span style="margin: 0 10px; font-weight: bold;">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" style="background: #ff4757; color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            cartItems.appendChild(cartItem);
        });
    }
    
    // Atualizar total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = total.toFixed(2).replace('.', ',');
}

// Toggle carrinho
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    cartSidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

// Finalizar pedido
function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryFee = 5.00;
    const finalTotal = total + deliveryFee;
    
    let orderSummary = 'RESUMO DO PEDIDO:\n\n';
    cart.forEach(item => {
        orderSummary += `${item.name} - Qtd: ${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}\n`;
    });
    orderSummary += `\nSubtotal: R$ ${total.toFixed(2).replace('.', ',')}\n`;
    orderSummary += `Taxa de entrega: R$ ${deliveryFee.toFixed(2).replace('.', ',')}\n`;
    orderSummary += `TOTAL: R$ ${finalTotal.toFixed(2).replace('.', ',')}\n\n`;
    orderSummary += 'Deseja finalizar o pedido?';
    
    if (confirm(orderSummary)) {
        // Simular processamento do pedido
        alert('Pedido realizado com sucesso! Você receberá uma confirmação por WhatsApp.');
        
        // Limpar carrinho
        cart = [];
        updateCartUI();
        toggleCart();
        
        // Redirecionar para WhatsApp (opcional)
        const whatsappMessage = encodeURIComponent(`Olá! Gostaria de fazer um pedido no Mercado Novo Lar. Total: R$ ${finalTotal.toFixed(2).replace('.', ',')}`);
        window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');
    }
}

// Busca de produtos
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        
        let filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm)
        );
        
        // Aplicar filtro de categoria se ativo
        if (currentFilter !== 'todos') {
            filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
        }
        
        renderProducts(filteredProducts);
    });
}

// Scroll suave para seções
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: 'smooth'
    });
}

// Notificação de item adicionado
function showCartNotification() {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4a7c59;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        z-index: 1002;
        animation: slideIn 0.3s ease-out;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    `;
    notification.innerHTML = '<i class="fas fa-check"></i> Item adicionado ao carrinho!';
    
    // Adicionar CSS da animação
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remover após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Efeitos de scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, #2c5530ee, #4a7c59ee)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #2c5530, #4a7c59)';
        header.style.backdropFilter = 'none';
    }
});

// Fechar carrinho ao clicar fora
document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (!cartSidebar.contains(event.target) && !cartIcon.contains(event.target)) {
        if (cartSidebar.classList.contains('open')) {
            toggleCart();
        }
    }
});

// Navegação mobile
function setupMobileNav() {
    const nav = document.querySelector('.nav');
    
    // Fechar menu ao clicar em um link (mobile)
    nav.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && window.innerWidth <= 768) {
            // Scroll suave para a seção
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            scrollToSection(targetId);
        }
    });
}

// Inicializar navegação mobile
setupMobileNav();

// Lazy loading para imagens (se necessário no futuro)
function setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Tema Dark/Light
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Menu Mobile
function toggleMobileMenu() {
    const nav = document.getElementById('mainNav');
    nav.classList.toggle('active');
}

// Navegação melhorada
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('.header').offsetHeight;
    
    if (section) {
        window.scrollTo({
            top: section.offsetTop - headerHeight - 20,
            behavior: 'smooth'
        });
    }
    
    // Fechar menu mobile se estiver aberto
    const nav = document.getElementById('mainNav');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
}

// Login Admin
function adminLogin() {
    const password = prompt('Digite a senha de administrador:');
    if (password === 'admin123') {
        window.location.href = 'admin.html';
    } else if (password !== null) {
        alert('Senha incorreta!');
    }
    return false;
}

// Navegação com indicador ativo
function updateActiveNavigation() {
    const sections = ['home', 'produtos', 'ofertas', 'contato'];
    const navLinks = document.querySelectorAll('.nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;
        
        sections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                const sectionTop = section.offsetTop - headerHeight - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    current = sectionId;
                }
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Melhorar navegação mobile
function setupMobileNav() {
    const nav = document.querySelector('.nav');
    
    // Fechar menu ao clicar em um link (mobile)
    nav.addEventListener('click', function(event) {
        if (event.target.tagName === 'A' && window.innerWidth <= 768) {
            const nav = document.getElementById('mainNav');
            nav.classList.remove('active');
        }
    });
    
    // Fechar menu ao clicar fora
    document.addEventListener('click', function(event) {
        const nav = document.getElementById('mainNav');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (!nav.contains(event.target) && !menuBtn.contains(event.target)) {
            nav.classList.remove('active');
        }
    });
    
    updateActiveNavigation();
}

// Performance: Debounce para busca
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Busca melhorada com debounce
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    
    const debouncedSearch = debounce(function(searchTerm) {
        let filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        // Aplicar filtro de categoria se ativo
        if (currentFilter !== 'todos') {
            filteredProducts = filteredProducts.filter(product => product.category === currentFilter);
        }
        
        renderProducts(filteredProducts);
        
        // Mostrar mensagem se não encontrar produtos
        if (filteredProducts.length === 0 && searchTerm.length > 0) {
            const productsGrid = document.getElementById('productsGrid');
            productsGrid.innerHTML = `
                <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--text-secondary);">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <h3>Nenhum produto encontrado</h3>
                    <p>Tente buscar por outro termo ou categoria</p>
                </div>
            `;
        }
    }, 300);
    
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.trim();
        debouncedSearch(searchTerm);
    });
}
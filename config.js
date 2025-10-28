// Configurações do Mercado Novo Lar
const CONFIG = {
    // Informações da loja
    store: {
        name: 'Mercado Novo Lar',
        phone: '(11) 99999-9999',
        email: 'contato@mercadonovolar.com',
        address: 'Rua das Flores, 123 - Centro',
        workingHours: 'Segunda a Domingo: 7h às 22h'
    },
    
    // Configurações de entrega
    delivery: {
        fee: 5.00,
        minOrder: 30.00,
        freeDeliveryAbove: 50.00,
        estimatedTime: '30-45 minutos'
    },
    
    // Configurações de pagamento
    payment: {
        acceptCash: true,
        acceptCard: true,
        acceptPix: true,
        pixKey: 'mercado@novolar.com.br'
    },
    
    // Redes sociais
    social: {
        facebook: 'https://facebook.com/mercadonovolar',
        instagram: 'https://instagram.com/mercadonovolar',
        whatsapp: '5511999999999'
    },
    
    // Configurações do admin
    admin: {
        defaultPassword: 'admin123',
        sessionTimeout: 30 // minutos
    },
    
    // Configurações de tema
    theme: {
        defaultTheme: 'light',
        allowThemeSwitch: true
    },
    
    // Configurações de notificações
    notifications: {
        duration: 3000, // milissegundos
        position: 'top-right'
    },
    
    // Categorias disponíveis
    categories: [
        { id: 'frutas', name: 'Frutas', icon: 'fas fa-apple-alt' },
        { id: 'verduras', name: 'Verduras', icon: 'fas fa-carrot' },
        { id: 'carnes', name: 'Carnes', icon: 'fas fa-drumstick-bite' },
        { id: 'laticinios', name: 'Laticínios', icon: 'fas fa-cheese' },
        { id: 'bebidas', name: 'Bebidas', icon: 'fas fa-wine-bottle' },
        { id: 'limpeza', name: 'Limpeza', icon: 'fas fa-spray-can' }
    ],
    
    // Status de pedidos
    orderStatus: {
        pending: { name: 'Pendente', color: '#ffa502' },
        confirmed: { name: 'Confirmado', color: '#2ed573' },
        preparing: { name: 'Preparando', color: '#ffa502' },
        ready: { name: 'Pronto', color: '#5352ed' },
        delivering: { name: 'Saiu para entrega', color: '#3742fa' },
        delivered: { name: 'Entregue', color: '#2ed573' },
        cancelled: { name: 'Cancelado', color: '#ff4757' }
    }
};

// Função para obter configuração
function getConfig(path) {
    return path.split('.').reduce((obj, key) => obj && obj[key], CONFIG);
}

// Função para atualizar configuração
function updateConfig(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    const target = keys.reduce((obj, key) => obj[key], CONFIG);
    target[lastKey] = value;
    
    // Salvar no localStorage
    localStorage.setItem('mercado_config', JSON.stringify(CONFIG));
}

// Carregar configurações salvas
function loadConfig() {
    const saved = localStorage.getItem('mercado_config');
    if (saved) {
        try {
            const savedConfig = JSON.parse(saved);
            Object.assign(CONFIG, savedConfig);
        } catch (e) {
            console.warn('Erro ao carregar configurações salvas');
        }
    }
}

// Inicializar configurações
loadConfig();

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, getConfig, updateConfig, loadConfig };
}
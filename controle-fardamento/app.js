const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurações do Express
app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração de Sessão e Flash Messages
app.use(session({
    secret: 'fardamento_tg_2026',
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

let inventario = [
    // ==================== FARDA ====================
    { id: 1,  categoria: "Farda", tipo: "Gandola", tamanho: "PP", quantidade: 0 },
    { id: 2,  categoria: "Farda", tipo: "Gandola", tamanho: "P", quantidade: 0 },
    { id: 3,  categoria: "Farda", tipo: "Gandola", tamanho: "M", quantidade: 0 },
    { id: 4,  categoria: "Farda", tipo: "Gandola", tamanho: "G", quantidade: 0 },
    { id: 5,  categoria: "Farda", tipo: "Gandola", tamanho: "GG", quantidade: 0 },

    { id: 6,  categoria: "Farda", tipo: "Calça Camuflada", tamanho: "PP", quantidade: 0 },
    { id: 7,  categoria: "Farda", tipo: "Calça Camuflada", tamanho: "P", quantidade: 0 },
    { id: 8,  categoria: "Farda", tipo: "Calça Camuflada", tamanho: "M", quantidade: 0 },
    { id: 9,  categoria: "Farda", tipo: "Calça Camuflada", tamanho: "G", quantidade: 0 },
    { id: 10, categoria: "Farda", tipo: "Calça Camuflada", tamanho: "GG", quantidade: 0 },

    { id: 11, categoria: "Farda", tipo: "Camiseta Camuflada", tamanho: "PP", quantidade: 0 },
    { id: 12, categoria: "Farda", tipo: "Camiseta Camuflada", tamanho: "P", quantidade: 0 },
    { id: 13, categoria: "Farda", tipo: "Camiseta Camuflada", tamanho: "M", quantidade: 0 },
    { id: 14, categoria: "Farda", tipo: "Camiseta Camuflada", tamanho: "G", quantidade: 0 },
    { id: 15, categoria: "Farda", tipo: "Camiseta Camuflada", tamanho: "GG", quantidade: 0 },

    { id: 16, categoria: "Farda", tipo: "Meia Verde Oliva", tamanho: "Único", quantidade: 0 },

    { id: 17, categoria: "Farda", tipo: "Coturno", tamanho: "Único", quantidade: 0 },

    { id: 18, categoria: "Farda", tipo: "Japona", tamanho: "PP", quantidade: 0 },
    { id: 19, categoria: "Farda", tipo: "Japona", tamanho: "P", quantidade: 0 },
    { id: 20, categoria: "Farda", tipo: "Japona", tamanho: "M", quantidade: 0 },
    { id: 21, categoria: "Farda", tipo: "Japona", tamanho: "G", quantidade: 0 },
    { id: 22, categoria: "Farda", tipo: "Japona", tamanho: "GG", quantidade: 0 },

    { id: 23, categoria: "Farda", tipo: "Segunda Pele - Camiseta Manga Longa", tamanho: "PP", quantidade: 0 },
    { id: 24, categoria: "Farda", tipo: "Segunda Pele - Camiseta Manga Longa", tamanho: "P", quantidade: 0 },
    { id: 25, categoria: "Farda", tipo: "Segunda Pele - Camiseta Manga Longa", tamanho: "M", quantidade: 0 },
    { id: 26, categoria: "Farda", tipo: "Segunda Pele - Camiseta Manga Longa", tamanho: "G", quantidade: 0 },
    { id: 27, categoria: "Farda", tipo: "Segunda Pele - Camiseta Manga Longa", tamanho: "GG", quantidade: 0 },

    { id: 28, categoria: "Farda", tipo: "Segunda Pele - Calça", tamanho: "PP", quantidade: 0 },
    { id: 29, categoria: "Farda", tipo: "Segunda Pele - Calça", tamanho: "P", quantidade: 0 },
    { id: 30, categoria: "Farda", tipo: "Segunda Pele - Calça", tamanho: "M", quantidade: 0 },
    { id: 31, categoria: "Farda", tipo: "Segunda Pele - Calça", tamanho: "G", quantidade: 0 },
    { id: 32, categoria: "Farda", tipo: "Segunda Pele - Calça", tamanho: "GG", quantidade: 0 },

    { id: 33, categoria: "Farda", tipo: "Segunda Pele - Balaclava", tamanho: "Único", quantidade: 0 },
    { id: 34, categoria: "Farda", tipo: "Segunda Pele - Luva", tamanho: "Único", quantidade: 0 },

    { id: 35, categoria: "Farda", tipo: "Cinto Verde Oliva", tamanho: "Único", quantidade: 0 },
    { id: 36, categoria: "Farda", tipo: "Cinto N/A", tamanho: "Único", quantidade: 0 },
    { id: 37, categoria: "Farda", tipo: "Gorro", tamanho: "Único", quantidade: 0 },

    // ==================== TFM ====================
    { id: 38, categoria: "TFM", tipo: "Camisa Regata Branca", tamanho: "PP", quantidade: 0 },
    { id: 39, categoria: "TFM", tipo: "Camisa Regata Branca", tamanho: "P", quantidade: 0 },
    { id: 40, categoria: "TFM", tipo: "Camisa Regata Branca", tamanho: "M", quantidade: 0 },
    { id: 41, categoria: "TFM", tipo: "Camisa Regata Branca", tamanho: "G", quantidade: 0 },
    { id: 42, categoria: "TFM", tipo: "Camisa Regata Branca", tamanho: "GG", quantidade: 0 },

    { id: 43, categoria: "TFM", tipo: "Shorts Verde Oliva", tamanho: "PP", quantidade: 0 },
    { id: 44, categoria: "TFM", tipo: "Shorts Verde Oliva", tamanho: "P", quantidade: 0 },
    { id: 45, categoria: "TFM", tipo: "Shorts Verde Oliva", tamanho: "M", quantidade: 0 },
    { id: 46, categoria: "TFM", tipo: "Shorts Verde Oliva", tamanho: "G", quantidade: 0 },
    { id: 47, categoria: "TFM", tipo: "Shorts Verde Oliva", tamanho: "GG", quantidade: 0 },

    { id: 48, categoria: "TFM", tipo: "Meia Branca", tamanho: "Único", quantidade: 0 },

    { id: 49, categoria: "TFM", tipo: "Tênis Preto", tamanho: "Único", quantidade: 0 }
];

// Rota da página inicial (Login)
app.get('/', (req, res) => {
    res.render('login');
});

//Rota dashboard
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { usuario: req.session.usuario || 'Usuário' });
});

// Rota do Inventário
app.get('/inventario', (req, res) => {
    res.render('inventario', { inventario });
});

// Rota para registrar movimentação
app.post('/movimentacao', (req, res) => {
    const { itemId, tipo, quantidade } = req.body;
    const qtd = parseInt(quantidade);

    const item = inventario.find(i => i.id == itemId);
    if (item) {
        if (tipo === 'entrada') {
            item.quantidade += qtd;
        } else if (tipo === 'saida' || tipo === 'extravio') {
            item.quantidade = Math.max(0, item.quantidade - qtd);
        }
    }
    res.redirect('/inventario');
});

console.log("=== Iniciando o servidor ===");

// Rota de Login (POST) - Dois usuários
app.post('/login', (req, res) => {
    const nomeDigitado = req.body.nome ? req.body.nome.trim() : '';
    const senhaDigitada = req.body.password || '';

    const nomeLower = nomeDigitado.toLowerCase();

    if ((nomeLower === "st lester" || nomeLower === "st yamashiro") && senhaDigitada === "123") {
        req.session.usuario = nomeDigitado;
        req.flash('success_msg', `Bem-vindo, ${nomeDigitado}!`);
        res.redirect('/dashboard');
    } else {
        req.flash('error_msg', 'Nome ou senha incorretos!');
        res.redirect('/');
    }
});

// Rota de Logout
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
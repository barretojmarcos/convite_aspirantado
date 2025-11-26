/**
 * Script Principal - Formatura CBMMA
 * Arquitetura Modular e Moderna
 */

// ============================================
// DADOS E CONFIGURAÇÃO
// ============================================

const CONFIG = {
    aspirantes: [
        { num: '405', name: 'ANA CAROLINA', full: 'Asp. Of. Ana Carolina' },
        { num: '406', name: 'DOS ANJOS', full: 'Asp. Of. Dos Anjos' },
        { num: '407', name: 'MARIANA GUILHON', full: 'Asp. Of. Mariana Guilhon' },
        { num: '408', name: 'DANIEL BORGES', full: 'Asp. Of. Daniel Borges' },
        { num: '409', name: 'DIONE', full: 'Asp. Of. Dione' },
        { num: '410', name: 'MOREIRA', full: 'Asp. Of. Moreira' },
        { num: '412', name: 'BARRETO', full: 'Asp. Of. Barreto' },
        { num: '413', name: 'IURY SOUSA', full: 'Asp. Of. Iury Sousa' },
        { num: '414', name: 'DANIEL PEDRO', full: 'Asp. Of. Daniel Pedro' },
        { num: '415', name: 'AMORIM', full: 'Asp. Of. Amorim' },
        { num: '417', name: 'GUSTAVO', full: 'Asp. Of. Gustavo' },
        { num: '418', name: 'PRADO', full: 'Asp. Of. Prado' },
        { num: '419', name: 'PIETRO', full: 'Asp. Of. Pietro' },
        { num: '420', name: 'FELIPE SOUZA', full: 'Asp. Of. Felipe Souza' },
        { num: '421', name: 'DAMON', full: 'Asp. Of. Damon' },
        { num: '422', name: 'GOMES', full: 'Asp. Of. Gomes' },
        { num: '424', name: 'EMERSON', full: 'Asp. Of. Emerson' },
        { num: '425', name: 'HENRIQUE COSTA', full: 'Asp. Of. Henrique Costa' },
        { num: '427', name: 'LUÍS CÉSAR', full: 'Asp. Of. Luís César' },
        { num: '429', name: 'JULIANA COELHO', full: 'Asp. Of. Juliana Coelho' },
        { num: '431', name: 'LUCAS CUNHA', full: 'Asp. Of. Lucas Cunha' },
        { num: '432', name: 'JULYENE', full: 'Asp. Of. Julyene' },
        { num: '433', name: 'BRENO', full: 'Asp. Of. Breno' },
        { num: '434', name: 'GABRIEL OLIVEIRA', full: 'Asp. Of. Gabriel Oliveira' },
        { num: '435', name: 'FALCÃO', full: 'Asp. Of. Falcão' },
        { num: '436', name: 'WELLISON', full: 'Asp. Of. Wellison' },
        { num: '437', name: 'RODOVALHO', full: 'Asp. Of. Rodovalho' },
        { num: '438', name: 'RONALD', full: 'Asp. Of. Ronald' },
    ],
    
    imagensColetivas: [
        { src: 'IMG_1643.png', title: 'Formação da Turma', description: 'Momento de união e disciplina' },
        { src: 'IMG_3234.png', title: 'Treinamento', description: 'Preparação para o serviço' },
        { src: 'IMG_8251.png', title: 'Camaradagem', description: 'Laços forjados na formação' },
        { src: 'Imagem1.png', title: 'Cerimonial', description: 'Tradição e respeito' },
        { src: '4EC84959-BBEE-4665-B14E-E09FEC20FE40.jpeg', title: 'Unidade', description: 'Um só coração, uma só missão' },
        { src: 'LS3_6937.jpeg', title: 'Compromisso', description: 'Dedicação ao serviço público' },
    ],
    
    eventos: [
        
        {
            title: 'Formatura Militar',
            date: { month: 'Jan', day: '15', time: '17:00' },
            type: 'Militar',
            icon: 'military_tech',
            location: 'Colégio Militar 2 de Julho',
            address: 'endereço do colégio, São Luís - MA'
        },
        {
            title: 'Culto Ecumênico',
            date: { month: 'Jan', day: '16', time: '19:00' },
            type: 'Religioso',
            icon: 'church',
            location: 'Igreja da Sé',
            address: 'Av. Pedro II, Centro Histórico, São Luís - MA'
        },
        {
            title: 'Baile de Gala',
            date: { month: 'Jan', day: '17', time: '22:00' },
            type: 'Social',
            icon: 'celebration',
            location: 'Ximenes Pallace',
            address: 'endereço do ximenes pallace, São Luís - MA'
        }
    ],
    
    homenagens: [
        {
            icon: 'church',
            title: 'A Deus',
            text: 'Pela proteção nas chamas, pela força nos momentos de exaustão e pela graça de chegarmos até aqui vivos e vitoriosos. Que Sua bênção continue a nos guiar em cada missão.'
        },
        {
            icon: 'family_star',
            title: 'À Família',
            text: 'Nossa retaguarda invisível. O apoio incondicional, as orações e o amor que nos sustentaram durante o internato e a formação. Vocês são nosso porto seguro.'
        },
        {
            icon: 'school',
            title: 'Aos Instrutores',
            text: 'Pelo exemplo, pela disciplina imposta e pelo conhecimento transmitido. Vossos ensinamentos salvarão vidas através de nossas mãos. Obrigado por nos preparar para o futuro.'
        }
    ]
};

// ============================================
// MÓDULO: NAVEGAÇÃO
// ============================================

const Navigation = {
    init() {
        this.setupMobileMenu();
        this.setupScrollBehavior();
        this.setupNavbarScroll();
    },
    
    setupMobileMenu() {
        const toggle = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('navbar-menu');
        
        if (!toggle || !menu) return;
        
        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', !isExpanded);
            menu.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em link
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    },
    
    setupScrollBehavior() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },
    
    setupNavbarScroll() {
        const navbar = document.getElementById('navbar');
        if (!navbar) return;
        
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.scrollY;
            
            if (currentScroll > 50) {
                navbar.style.paddingTop = '0.5rem';
                navbar.style.paddingBottom = '0.5rem';
            } else {
                navbar.style.paddingTop = '0.75rem';
                navbar.style.paddingBottom = '0.75rem';
            }
            
            lastScroll = currentScroll;
        });
    }
};

// ============================================
// MÓDULO: GALERIA
// ============================================

const Gallery = {
    init() {
        this.renderColetiva();
    },
    
    renderColetiva() {
        const container = document.getElementById('gallery-coletiva');
        if (!container) return;
        
        CONFIG.imagensColetivas.forEach(img => {
            const item = document.createElement('div');
            item.className = 'gallery__item';
            item.innerHTML = `
                <img src="${img.src}" alt="${img.title}" class="gallery__image" loading="lazy">
                <div class="gallery__overlay">
                    <h3 class="gallery__title">${img.title}</h3>
                    <p class="gallery__description">${img.description}</p>
                </div>
            `;
            container.appendChild(item);
        });
    }
};

// ============================================
// MÓDULO: ASPIRANTES
// ============================================

const Aspirantes = {
    init() {
        this.render();
    },
    
    render() {
        const grid = document.getElementById('aspirantes-grid');
        if (!grid) {
            console.error('Grid de aspirantes não encontrado');
            return;
        }
        
        grid.classList.add('loading');
        grid.innerHTML = '';
        
        // Aguardar um frame para garantir que o DOM está atualizado
        requestAnimationFrame(() => {
            CONFIG.aspirantes.forEach(asp => {
                const card = document.createElement('div');
                card.className = 'aspirante-card';
                card.innerHTML = `
                    <div class="aspirante-card__badge">
                        <span class="aspirante-card__badge-label">Cad</span>
                        <span class="aspirante-card__badge-number">${asp.num}</span>
                    </div>
                    <h3 class="aspirante-card__name">${asp.name}</h3>
                    <p class="aspirante-card__title">Aspirante a Oficial</p>
                `;
                grid.appendChild(card);
            });
            
            grid.classList.remove('loading');
            console.log(`✓ Renderizados ${CONFIG.aspirantes.length} aspirantes`);
            
            // Notificar que a renderização foi concluída para animações
            if (window.aspirantesRendered) {
                window.aspirantesRendered();
            }
        });
    }
};

// ============================================
// MÓDULO: EVENTOS
// ============================================

const Events = {
    init() {
        this.render();
    },
    
    render() {
        const container = document.getElementById('events-list');
        if (!container) return;
        
        CONFIG.eventos.forEach(event => {
            const card = document.createElement('article');
            card.className = 'event-card';
            card.innerHTML = `
                <div class="event-card__content">
                    <div class="event-card__date">
                        <span class="event-card__month">${event.date.month}</span>
                        <span class="event-card__day">${event.date.day}</span>
                        <span class="event-card__time">${event.date.time}</span>
                    </div>
                    <div class="event-card__details">
                        <div class="event-card__header">
                            <span class="event-card__type">${event.type}</span>
                            <span class="material-symbols-outlined event-card__icon">${event.icon}</span>
                        </div>
                        <h3 class="event-card__title">${event.title}</h3>
                        <p class="event-card__info"><strong>Local:</strong> ${event.location}</p>
                        <p class="event-card__info"><strong>Endereço:</strong> ${event.address}</p>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
        
        console.log(`✓ Renderizados ${CONFIG.eventos.length} eventos`);
    }
};

// ============================================
// MÓDULO: HOMENAGENS
// ============================================

const Tributes = {
    init() {
        this.render();
    },
    
    render() {
        const container = document.getElementById('tributes-grid');
        if (!container) return;
        
        CONFIG.homenagens.forEach(tribute => {
            const card = document.createElement('article');
            card.className = 'tribute-card';
            card.innerHTML = `
                <div class="tribute-card__header">
                    <span class="material-symbols-outlined tribute-card__icon">${tribute.icon}</span>
                    <h3 class="tribute-card__title">${tribute.title}</h3>
                </div>
                <p class="tribute-card__text">${tribute.text}</p>
            `;
            container.appendChild(card);
        });
        
        console.log(`✓ Renderizadas ${CONFIG.homenagens.length} homenagens`);
    }
};

// ============================================
// MÓDULO: ANIMAÇÕES
// ============================================

const Animations = {
    init() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            console.warn('GSAP não disponível, animações desabilitadas');
            return;
        }
        
        gsap.registerPlugin(ScrollTrigger);
        this.setupFadeIn();
        this.setupStagger();
        this.setupParallax();
        this.setupCardHovers();
    },
    
    setupFadeIn() {
        const elements = document.querySelectorAll('.section__header, .article');
        elements.forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: 'top 85%',
                },
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power2.out'
            });
        });
    },
    
    setupStagger() {
        const animateCards = () => {
            const grid = document.getElementById('aspirantes-grid');
            const cards = grid?.querySelectorAll('.aspirante-card');
            
            if (grid && cards && cards.length > 0) {
                // Limpar animações anteriores se existirem
                gsap.killTweensOf(cards);
                
                gsap.from(cards, {
                    scrollTrigger: {
                        trigger: grid,
                        start: 'top 85%',
                        refreshPriority: -1,
                        invalidateOnRefresh: true
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: 'power1.out'
                });
                return true;
            }
            return false;
        };
        
        // Tentar animar imediatamente (pode não funcionar se os cards ainda não foram renderizados)
        setTimeout(() => {
            if (!animateCards()) {
                // Se não encontrou os cards, tentar novamente após um delay
                setTimeout(animateCards, 100);
            }
        }, 100);
        
        // Escutar quando os cards forem renderizados
        window.aspirantesRendered = () => {
            setTimeout(animateCards, 50);
        };
    },
    
    setupParallax() {
        const heroImg = document.querySelector('.hero__image');
        if (heroImg) {
            gsap.to(heroImg, {
                scrollTrigger: {
                    trigger: '#home',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                y: '50%',
                scale: 1.1
            });
        }
    },
    
    setupCardHovers() {
        document.querySelectorAll('.event-card, .tribute-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                gsap.to(this, { scale: 1.02, duration: 0.3 });
            });
            card.addEventListener('mouseleave', function() {
                gsap.to(this, { scale: 1, duration: 0.3 });
            });
        });
    }
};

// ============================================
// INICIALIZAÇÃO PRINCIPAL
// ============================================

const App = {
    init() {
        // Aguardar DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    },
    
    start() {
        console.log('🚀 Inicializando aplicação...');
        
        // Inicializar módulos
        Navigation.init();
        Gallery.init();
        Aspirantes.init();
        Events.init();
        Tributes.init();
        
        // Aguardar GSAP carregar para animações
        if (typeof gsap !== 'undefined') {
            Animations.init();
        } else {
            // Tentar novamente após delay
            setTimeout(() => {
                if (typeof gsap !== 'undefined') {
                    Animations.init();
                }
            }, 500);
        }
        
        console.log('✅ Aplicação inicializada com sucesso!');
    }
};

// Iniciar aplicação
App.init();

/**
 * Script Principal - Formatura CBMMA
 * Arquitetura Modular e Moderna
 */

// ============================================
// DADOS E CONFIGURAÇÃO
// ============================================

const CONFIG = {
    aspirantes: [
        { num: '404', name: 'ANA TAVARES', full: 'Asp. Of. Ana Tavares', photo: 'assets/images/aspirantes/ana-tavares.jpg',
            description: 'Ana Tavares, a tenacidade e foco são o seu maior ativo para ser uma oficial.'},
        { num: '405', name: 'ANA CAROLINA', full: 'Asp. Of. Ana Carolina', photo: 'assets/images/aspirantes/ana-carolina.jpg',
            description: 'Ana Carolina, jovem dedicada e disciplinada, inicia sua jornada na corporação com honra e compromisso.'},
        { num: '406', name: 'DOS ANJOS', full: 'Asp. Of. Dos Anjos', photo: 'assets/images/aspirantes/dos-anjos.jpg',
            description: 'Filho de Caxias-MA, Anderson Dos Anjos trilhou o caminho da formação militar com dedicação e determinação, sempre em busca de seu sonho e de um futuro promissor na corporação.'},
        { num: '407', name: 'MARIANA GUILHON', full: 'Asp. Of. Mariana Guilhon', photo: 'assets/images/aspirantes/mariana-guilhon.jpg',
            description: 'Filha de Bombeiro Militar, 24 anos, tem no estudo e dedicação a sua base para ser uma oficial.'},
        { num: '408', name: 'DANIEL BORGES', full: 'Asp. Of. Daniel Borges', photo: 'assets/images/aspirantes/daniel-borges.jpg',
            description: 'Natural de Pedreiras, aluno do Projeto Social Garra. Após conhecer a profissão como bombeiro civil, fez de ser bombeiro militar a sua missão profissional, conquistando a aprovação com anos de esforço através dos estudos.'},
        { num: '409', name: 'DIONE', full: 'Asp. Of. Dione', photo: 'assets/images/aspirantes/dione.jpg',
            description: 'Aspirante Dione, 24 anos, nascido em São Luís, filho de bombeiro militar. Ser bombeiro militar é uma honra que inspira orgulho, um chamado nobre que exige mais do que uma profissão: é uma missão de amor e bravura.'},
        { num: '410', name: 'MOREIRA', full: 'Asp. Of. Moreira', photo: 'assets/images/aspirantes/moreira.jpg',
            description: 'Conquistando o sonho de ser cadete aos 19 anos, Moreira conquista a estrela de Aspirante aos 22 anos, um exemplo de esforço, estudo e comprometimento.'},
        { num: '411', name: 'EDLAURO', full: 'Asp. Of. Edlauro', photo: 'assets/images/aspirantes/edlauro.jpg',
            description: 'o Aspirante Edlauro, 29 anos,  nascido em Teresina-Piauí. Pertencer ao CBMMA não foi apenas uma escolha de carreira, mas como um verdadeiro sacerdócio.'},
        { num: '412', name: 'BARRETO', full: 'Asp. Of. Barreto', photo: 'assets/images/aspirantes/barreto.jpg',
            description: 'O primeiro Oficial Bombeiro Militar da sua cidade, João Marcos volta a Trizidela do Vale carregando a estrela de Aspirante, sempre dedicando todas as suas vitórias à Deus.'},
        { 
            num: '413', 
            name: 'IURY SOUSA', 
            full: 'Asp. Of. Iury Sousa',
            photo: 'assets/images/aspirantes/iury-sousa.jpg',
            description: 'Aspirante Iury Sousa, 24 anos, nascido em São Luís. Tem em ser Bombeiro uma grande satisfação, pois a missão de salvar vidas é a mais nobre forma de servir ao próximo, transformando momentos de aflição em esperança.'
        },
        { num: '414', name: 'DANIEL PEDRO', full: 'Asp. Of. Daniel Pedro', photo: 'assets/images/aspirantes/daniel-pedro.jpg',
            description: 'O Aspirante Daniel Pedro é natural de São Luís do Maranhão. Sua trajetória iniciou-se no colégio militar, onde começou a edificar os pilares de sua carreira com disciplina e resiliência.'
        },
        { num: '415', name: 'AMORIM', full: 'Asp. Of. Amorim', photo: 'assets/images/aspirantes/amorim.jpg',
            description: 'Aspirante Amorim: Nascido em São Luís, 27 anos, graduado em Engenharia Elétrica pela Universidade Federal do Maranhão'},
        { num: '416', name: 'PAULA ALMEIDA', full: 'Asp. Of. Paula Almeida', photo: 'assets/images/aspirantes/paula-almeida.jpg',
            description: 'Paula Almeida, 24 anos, determinada e inteligente, dedicou-se e cumpriu o sonho de ser Bombeiro Militar.'
        },
        { num: '417', name: 'GUSTAVO', full: 'Asp. Of. Gustavo', photo: 'assets/images/aspirantes/gustavo.jpg',
            description: 'Aspirante Gustavo, 30 anos, nascido em São Luís. Fazer parte do Corpo de Bombeiros é uma grande satisfação, haja vista a credibilidade que a instituição possui perante toda a sociedade.'},
        { num: '418', name: 'PRADO', full: 'Asp. Of. Prado', photo: 'assets/images/aspirantes/prado.jpg',
            description: ' O Aspirante Prado é um futuro oficial criativo, inteligente e determinado.'},
        { num: '419', name: 'PIETRO', full: 'Asp. Of. Pietro', photo: 'assets/images/aspirantes/pietro.jpg',
            description: 'Pietro é calmo, dedicado e sempre busca ajudar aos seus pares, um grande homem e um grande oficial.'},
        { num: '420', name: 'FELIPE SOUZA', full: 'Asp. Of. Felipe Souza', photo: 'assets/images/aspirantes/felipe-souza.jpg',
            description: 'Felipe Carvalho de Souza, ludovicense nato, descobriu a vida militar aos 13 anos, quando ainda menino vestiu, pela primeira vez, o sonho de ser Bombeiro Mirim na mesma Academia onde hoje caminha como Cadete. Filho de mãe solteira, aprendeu cedo que a força nasce do amor e que ajudar o próximo é missão que não escolhe hora nem rosto. Encontrou na farda o caminho para servir, proteger e transformar vidas.' },
        { num: '421', name: 'DAMON', full: 'Asp. Of. Damon', photo: 'assets/images/aspirantes/damon.jpg',
            description: 'Damon é natural de Imperatriz-MA, antes um policial penal, realizou seu sonho de ser um oficial.'},
        { num: '422', name: 'GOMES', full: 'Asp. Of. Gomes', photo: 'assets/images/aspirantes/gomes.jpg',
            description: 'Gomes traz sorte para sua turma.'},
        { num: '423', name: 'TEIXEIRA', full: 'Asp. Of. Teixeira', photo: 'assets/images/aspirantes/teixeira.jpg',
            description: 'O Aspirante Teixeira se destaca pelo seu carisma e vigor físico, um bombeiro de aço. Determinado e leal, um amigo e um grande futuro oficial.'},
        { num: '424', name: 'EMERSON', full: 'Asp. Of. Emerson', photo: 'assets/images/aspirantes/emerson.jpg',
            description: 'Se destacando pela sua serenidade e amizade, Emerson é um grande homem, com quem sempre se pode contar. Um bom homem e um bom bombeiro militar.'},
        { num: '425', name: 'HENRIQUE COSTA', full: 'Asp. Of. Henrique Costa', photo: 'assets/images/aspirantes/henrique-costa.jpg',
            description: 'Aspirante Henrique Costa: Nascido em São Luís – MA, no dia 21 de junho de 2005. Com 16 anos descobriu o CFO, e viu ali uma oportunidade de crescimento em uma profissão tão honrada. Hoje, depois de tudo, transformou o sonho em rotina.'},
        { num: '426', name: 'TAINAM', full: 'Asp. Of. Tainam', photo: 'assets/images/aspirantes/tainam.jpg',
            description: 'Tainam, um nadador de elite, se destaca por onde passa, não só pelas suas habilidades na água, mas também pela sua personalidade serena, justa e dedicada.'},
        { num: '427', name: 'LUÍS CÉSAR', full: 'Asp. Of. Luís César', photo: 'assets/images/aspirantes/luis-cesar.jpg',
            description: 'Aspirante Luís César, 24 anos, nascido em Itapecuru Mirim. Tem grande orgulho em fazer parte da instituição de maior credibilidade perante a sociedade maranhense.'
        },
        { num: '429', name: 'JULIANA COELHO', full: 'Asp. Of. Juliana Coelho', photo: 'assets/images/aspirantes/juliana-coelho.jpg',
            description: '23 anos, natural de São Luís, hoje segue seu sonho de ser uma oficial, dedicada e comprometida. Uma grande mulher, uma grande amiga de todos que a conhecem e uma grande oficial.'},
        { num: '430', name: 'RAFAELA', full: 'Asp. Of. Rafaela', photo: 'assets/images/aspirantes/rafaela.jpg',
            description: '​Antes de vestir a farda, a Aspirante Rafaela já trilhava um caminho como Advogada. Essa experiência trouxe para o nosso meio um olhar analítico, rigor e a habilidade de argumentar e liderar com clareza e justiça.'},
        { num: '431', name: 'LUCAS CUNHA', full: 'Asp. Of. Lucas Cunha', photo: 'assets/images/aspirantes/lucas-cunha.jpg',
            description: 'Lucas Cunha, Engenheiro Mecânico, é um jovem dedicado, comprometido, humilde e companheiro.'},
        { num: '432', name: 'JULYENE', full: 'Asp. Of. Julyene', photo: 'assets/images/aspirantes/julyene.jpg',
            description: 'Julyene é exemplo de empatia, dedicação e comprometimento, hoje aplica todo o seu conhecimento para o bem da sociedade.'},
        { num: '433', name: 'BRENO', full: 'Asp. Of. Breno', photo: 'assets/images/aspirantes/breno.jpg',
            description: 'Natural de Turiaçu–MA, Breno Tadeu de Oliveira de Souza vê no CBMMA a oportunidade de atuar em uma missão que vai além de si mesmo: contribuir para o bem-estar e a segurança do próximo. Formado em Educação Física pela UFMA, dedica-se ao aperfeiçoamento técnico-operacional e ao treinamento físico, buscando diariamente evoluir para servir com excelência e compromisso.'},
        { num: '434', name: 'GABRIEL OLIVEIRA', full: 'Asp. Of. Gabriel Oliveira', photo: 'assets/images/aspirantes/gabriel-oliveira.jpg',
            description: 'O Comandante-Aluno do CFO, Gabriel Oliveira, o grande modelo de dedicação, esforço e comprometimento com a formação militar, o representante e líder da Academia.'},
        { num: '435', name: 'FALCÃO', full: 'Asp. Of. Falcão', photo: 'assets/images/aspirantes/falcao.jpg',
            description: 'Falcão: 32 anos, natural de São Luís. Sonho de criança e satisfação pessoal ser BM. Inspiração familiar para ser militar.'},
        { num: '436', name: 'WELLISON', full: 'Asp. Of. Wellison', photo: 'assets/images/aspirantes/wellison.jpg',
            description: 'Mande a sua descrição'},
        { num: '437', name: 'RODOVALHO', full: 'Asp. Of. Rodovalho', photo: 'assets/images/aspirantes/rodovalho.jpg',
            description: 'Aspirante Rodovalho, 38 anos, natural de Jataí-GO. Foi Policial Militar do Estado do Maranhão antes de realizar o grande sonho de passar no CFO BM.'},
        { num: '438', name: 'RONALD', full: 'Asp. Of. Ronald', photo: 'assets/images/aspirantes/ronald.jpg',
            description: 'Aspirante Ronald, 37 anos, Temente a Deus, e ama a Família. Foi Policial Militar, agora Oficial do Corpo de Bom Militar.'},
    ],
    
    imagensColetivas: [
        { src: 'assets/images/sobrevivencia.jpg', title: 'Superação', description: 'Momento de união e disciplina' },
        { src: 'assets/images/principal2.jpeg', title: 'Realização', description: 'Realização do sonho' },
        { src: 'assets/images/travessia.png', title: 'Camaradagem', description: 'Laços forjados na formação' },
        { src: 'assets/images/cerimonial.jpg', title: 'Cerimonial', description: 'Tradição e respeito' },
        { src: 'assets/images/selva.png', title: 'Unidade', description: 'Um só coração, uma só missão' },
        { src: 'assets/images/espadim.png', title: 'Compromisso', description: 'Dedicação ao serviço público' },
        { src: 'assets/images/amizade.jpeg', title: 'Formação', description: 'A jornada de transformação em oficiais' },
        { src: 'assets/images/inicio.jpeg', title: 'Início', description: 'Passando pelas etapas' },
        { src: 'assets/images/FAD_4649.jpg', title: 'Conquista', description: 'A estrela de Aspirante conquistada' },
    ],
    
    eventos: [
        
        {
            title: 'Culto Ecumênico',
            date: { month: 'Dez', day: '20', time: '19:00' },
            type: 'Religioso',
            icon: 'church',
            location: 'IEQ Península',
            address: 'R. dos Gaviões, 344 - Ponta do Farol, São Luís - MA'
        },
        {
            title: 'Formatura Militar',
            date: { month: 'Dez', day: '22', time: '08:00' },
            type: 'Militar',
            icon: 'military_tech',
            location: 'Colégio Militar 2 de Julho',
            address: 'Av. dos Franceses, S/N - Vila Palmeira, São Luís - MA'
        },
        {
            title: 'Baile de Gala',
            date: { month: 'Dez', day: '22', time: '22:00' },
            type: 'Social',
            icon: 'celebration',
            location: 'Ximenes Palace',
            address: 'Rua da Vitória, 189, Turu, São Luís - MA',
            dressCode: 'Traje: Esporte fino'
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
        
        CONFIG.imagensColetivas.forEach((img, index) => {
            const item = document.createElement('div');
            item.className = 'gallery__item';
            item.setAttribute('role', 'button');
            item.setAttribute('tabindex', '0');
            item.setAttribute('aria-label', `Ver ${img.title} em tamanho maior`);
            item.innerHTML = `
                <img src="${img.src}" alt="${img.title}" class="gallery__image" loading="lazy">
                <div class="gallery__zoom-badge" aria-hidden="true">
                    <span class="material-symbols-outlined gallery__zoom-icon">zoom_in</span>
                </div>
                <div class="gallery__overlay">
                    <h3 class="gallery__title">${img.title}</h3>
                    <p class="gallery__description">${img.description}</p>
                </div>
            `;
            
            // Adicionar event listener para abrir modal
            item.addEventListener('click', () => {
                this.openModal(index);
            });
            
            // Suporte para teclado
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.openModal(index);
                }
            });
            
            container.appendChild(item);
        });
    },
    
    openModal(index) {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const prevBtn = document.getElementById('modal-prev');
        const nextBtn = document.getElementById('modal-next');
        
        if (!modal) return;
        
        const currentImage = CONFIG.imagensColetivas[index];
        
        // Atualizar conteúdo do modal
        modalImg.src = currentImage.src;
        modalImg.alt = currentImage.title;
        modalTitle.textContent = currentImage.title;
        modalDescription.textContent = currentImage.description;
        
        // Atualizar índices de navegação
        modal.dataset.currentIndex = index;
        
        // Habilitar/desabilitar botões
        prevBtn.style.display = index === 0 ? 'none' : 'flex';
        nextBtn.style.display = index === CONFIG.imagensColetivas.length - 1 ? 'none' : 'flex';
        
        // Mostrar modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Event listeners para navegação
        prevBtn.onclick = () => {
            if (index > 0) {
                this.openModal(index - 1);
            }
        };
        
        nextBtn.onclick = () => {
            if (index < CONFIG.imagensColetivas.length - 1) {
                this.openModal(index + 1);
            }
        };
        
        // Fechar ao clicar no botão X ou no overlay
        document.getElementById('modal-close').onclick = () => this.closeModal();
        modal.querySelector('.modal__overlay').onclick = (e) => {
            if (e.target === e.currentTarget) {
                this.closeModal();
            }
        };
        
        // Fechar com ESC e navegação com setas
        const keyHandler = (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
                document.removeEventListener('keydown', keyHandler);
            } else if (e.key === 'ArrowLeft' && index > 0) {
                e.preventDefault();
                this.openModal(index - 1);
            } else if (e.key === 'ArrowRight' && index < CONFIG.imagensColetivas.length - 1) {
                e.preventDefault();
                this.openModal(index + 1);
            }
        };
        document.addEventListener('keydown', keyHandler);
        
        // Armazenar handler para remover quando fechar
        modal.dataset.keyHandler = 'true';
    },
    
    closeModal() {
        const modal = document.getElementById('image-modal');
        if (!modal) return;
        
        modal.classList.remove('active');
        document.body.style.overflow = '';
        
        // Remover handlers de teclado se existirem
        if (modal.dataset.keyHandler) {
            // Os handlers serão removidos automaticamente quando o modal fechar
            delete modal.dataset.keyHandler;
        }
    }
};

// ============================================
// MÓDULO: ASPIRANTES
// ============================================

const Aspirantes = {
    init() {
        this.render();
    },
    
    openPhotoModal(photoSrc, aspiranteName) {
        const modal = document.getElementById('image-modal');
        const modalImg = document.getElementById('modal-image');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const prevBtn = document.getElementById('modal-prev');
        const nextBtn = document.getElementById('modal-next');
        
        if (!modal || !modalImg) return;
        
        // Ocultar botões de navegação para fotos individuais
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
        
        // Atualizar conteúdo do modal
        modalImg.src = photoSrc;
        modalImg.alt = `Foto de ${aspiranteName}`;
        if (modalTitle) modalTitle.textContent = aspiranteName;
        if (modalDescription) modalDescription.textContent = '';
        
        // Mostrar modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Fechar ao clicar no botão X ou no overlay
        const closeBtn = document.getElementById('modal-close');
        if (closeBtn) {
            closeBtn.onclick = () => Gallery.closeModal();
        }
        
        const overlay = modal.querySelector('.modal__overlay');
        if (overlay) {
            overlay.onclick = (e) => {
                if (e.target === e.currentTarget) {
                    Gallery.closeModal();
                }
            };
        }
        
        // Fechar com ESC
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                Gallery.closeModal();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
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
            console.log(`Iniciando renderização de ${CONFIG.aspirantes.length} aspirantes`);
            
            CONFIG.aspirantes.forEach((asp, index) => {
                const card = document.createElement('div');
            card.className = 'aspirante-card';
                card.setAttribute('data-num', asp.num);
                card.setAttribute('data-index', index);
                card.setAttribute('tabindex', '0');
                card.setAttribute('role', 'button');
                card.setAttribute('aria-expanded', 'false');
                
                const description = asp.description || '';
                const hasDescription = description.trim().length > 0;
                
                if (hasDescription) {
                    card.classList.add('aspirante-card--expandable');
                }
                
                const photo = asp.photo || '';
                const hasPhoto = photo.trim().length > 0;
                
                card.innerHTML = `
                    <div class="aspirante-card__content">
                        ${hasPhoto ? `
                            <div class="aspirante-card__photo" role="button" tabindex="0" aria-label="Ver foto de ${asp.name} em tamanho maior">
                                <img src="${photo}" alt="Foto de ${asp.name}" class="aspirante-card__photo-img" loading="lazy" onerror="this.parentElement.outerHTML='<div class=\\'aspirante-card__photo-placeholder\\'><span class=\\'material-symbols-outlined\\'>person</span></div>'">
                            </div>
                        ` : `
                            <div class="aspirante-card__photo-placeholder">
                                <span class="material-symbols-outlined">person</span>
                            </div>
                        `}
                <div class="aspirante-card__badge">
                    <span class="aspirante-card__badge-label">Cad</span>
                    <span class="aspirante-card__badge-number">${asp.num}</span>
                </div>
                <h3 class="aspirante-card__name">${asp.name}</h3>
                <p class="aspirante-card__title">Aspirante a Oficial</p>
                    </div>
                    ${hasDescription ? `
                        <div class="aspirante-card__description">
                            <p class="aspirante-card__description-text">${description}</p>
                        </div>
                    ` : ''}
                `;
                
                // Adicionar event listener para zoom na foto
                if (hasPhoto) {
                    const photoElement = card.querySelector('.aspirante-card__photo');
                    if (photoElement) {
                        photoElement.addEventListener('click', function(e) {
                            e.stopPropagation();
                            Aspirantes.openPhotoModal(photo, asp.name);
                        });
                        
                        photoElement.addEventListener('keydown', function(e) {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                e.stopPropagation();
                                Aspirantes.openPhotoModal(photo, asp.name);
                            }
                        });
                    }
                }
                
                // Adicionar event listener para expandir/recolher (exceto quando clicar na foto)
                if (hasDescription) {
                    card.addEventListener('click', function(e) {
                        // Não expandir se clicar na foto
                        if (e.target.closest('.aspirante-card__photo')) {
                            return;
                        }
                        this.classList.toggle('expanded');
                        const isExpanded = this.classList.contains('expanded');
                        this.setAttribute('aria-expanded', isExpanded.toString());
                    });
                    
                    // Suporte para teclado (Enter e Space)
                    card.addEventListener('keydown', function(e) {
                        if (e.target.closest('.aspirante-card__photo')) {
                            return;
                        }
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            this.click();
                        }
                    });
                }
                
            grid.appendChild(card);
                console.log(`✓ Card criado: ${asp.num} - ${asp.name}${hasDescription ? ' (com descrição)' : ''}`);
        });
        
        grid.classList.remove('loading');
            const cardsCriados = grid.querySelectorAll('.aspirante-card').length;
            console.log(`✓ Total renderizado: ${cardsCriados} cards de ${CONFIG.aspirantes.length} aspirantes`);
            
            if (cardsCriados !== CONFIG.aspirantes.length) {
                console.warn(`⚠️ Discrepância: ${cardsCriados} cards criados, mas ${CONFIG.aspirantes.length} aspirantes na lista`);
            }
            
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
                        ${event.dressCode ? `<p class="event-card__info event-card__info--dress"><strong>${event.dressCode}</strong></p>` : ''}
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
        // Animação de stagger removida para os cards dos aspirantes
        // Os cards agora aparecem sem efeito de fade
        window.aspirantesRendered = () => {
            // Não fazer nada - cards aparecem diretamente sem animação
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

// ============================================
// MÓDULO: COUNTDOWN TIMER
// ============================================

const Countdown = {
    targetDate: new Date('2025-12-22T08:00:00'), // 22 de dezembro de 2025, 8:00 - Formatura Militar
    
    init() {
        this.update();
        setInterval(() => this.update(), 1000);
    },
    
    update() {
        const now = new Date().getTime();
        const distance = this.targetDate.getTime() - now;
        
        if (distance < 0) {
            // Data passou
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
};

// Iniciar aplicação
App.init();

// Iniciar countdown
if (document.getElementById('countdown')) {
    Countdown.init();
}

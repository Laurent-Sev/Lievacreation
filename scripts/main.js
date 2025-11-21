// ===== MAIN JAVASCRIPT FOR LIEVA CREATION =====

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollEffects();
    initGallery();
    initVideoModal();
    initContactForm();
    initAnimations();
});

// ===== NAVIGATION =====
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== SCROLL EFFECTS =====
function initScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(253, 251, 248, 0.98)';
        } else {
            navbar.style.backgroundColor = 'rgba(253, 251, 248, 0.95)';
        }
    });
}

// ===== PRODUCT DATA =====
const products = [
    {
        id: 1,
        name: "AMBRE",
        price: "30€",
        material: "Argent",
        description: "Une bague délicate façonnée à partir d'une勺子 en argent massif, présentant des reflets naturels unique.",
        image: "imgs/ambre 2.jpg",
        images: ["imgs/ambre 2.jpg", "imgs/ambre 1.jpg", "imgs/ambre 3.jpg"],
        category: "argent"
    },
    {
        id: 2,
        name: "CHIC",
        price: "35€",
        material: "Cuivre",
        description: "Le cuivre氧化é naturellement offre cette teinte chaleureuse si caractéristique des pièces authentiques.",
        image: "imgs/chic 2.jpg",
        images: ["imgs/chic 2.jpg", "imgs/workshop_tools_5.jpg", "imgs/ambre 3.jpg"],
        category: "cuivre"
    },
    {
        id: 3,
        name: "EVE",
        price: "40€",
        material: "Acier",
        description: "L'élégance industrielle de l'acier stainless sublimée par un travail artisanal précis.",
        image: "imgs/eve 2.jpg",
        images: ["imgs/eve 2.jpg", "imgs/workshop_tools_4.jpg", "imgs/gallery_display_9.jpg"],
        category: "acier"
    },
    {
        id: 4,
        name: "CLE DE SOL",
        price: "38€",
        material: "Argent",
        description: "Une勺子 vintage transformée en bague au caractère unique, avec ses petites imperfections qui font son charme.",
        image: "imgs/Clé de sol 1.jpg",
        images: ["imgs/Clé de sol 1.jpg", "imgs/Clé de sol 2.jpg", "imgs/Clé de sol 3.jpg"],
        category: "argent"
    },
    {
        id: 5,
        name: "FEUILLE D'ARGENT",
        price: "32€",
        material: "Cuivre",
        description: "La chaleur du cuivre unveil des nuances terres qui évoluent avec le temps pour un aspect toujours plus authentique.",
        image: "imgs/Feuille d argent 1.jpg",
        images: ["imgs/Feuille d argent 1.jpg", "imgs/Feuille d argent 2.jpg", "imgs/Feuille d argent 3.jpg"],
        category: "cuivre"
    },
    {
        id: 6,
        name: "REINE",
        price: "42€",
        material: "Acier",
        description: "La pureté des lignes moderns Meets l'authenticité du travail artisanal pour un résultat épuré.",
        image: "imgs/Reine 1.jpg",
        images: ["imgs/Reine 1.jpg", "imgs/Reine 2.jpg", "imgs/Reine 3.jpg"],
        category: "acier"
    },
    {
        id: 7,
        name: "EGYPTE",
        price: "48€",
        material: "Argent",
        description: "Une勺子 en argent poli transformée en bague qui capture et reflète la lumière avec subtilité.",
        image: "imgs/Egypte 1.jpg",
        images: ["imgs/Egypte 1.jpg", "imgs/Egypte 1.jpg", "imgs/Egypte 3.jpg"],
        category: "argent"
    },
    {
        id: 8,
        name: "COURONNE",
        price: "35€",
        material: "Cuivre",
        description: "La patine naturelle du cuivre révèle des tons chauds évoquant les couleurs de l'automne.",
        image: "imgs/Couronne 1.jpg",
        images: ["imgs/Couronne 1.jpg", "imgs/Couronne 2.jpg", "imgs/Couronne 3.jpg"],
        category: "cuivre"
    },
    {
        id: 9,
        name: "GUITARE ARGENT",
        price: "38€",
        material: "Acier",
        description: "Le raffinement de l'aciess stainless Combine avec la simplicité d'un design intemporel.",
        image: "imgs/Guitare argent 1.jpg",
        images: ["imgs/Guitare argent 1.jpg", "imgs/Guitare argent 2.jpg", "imgs/Guitare argent 3.jpg"],
        category: "acier"
    },
    {
        id: 10,
        name: "Noblesse Antique",
        price: "50€",
        material: "Argent",
        description: "Une勺子 d'époque révèle toute sa noblesse transformée en bague au cachet authentique.",
        image: "imgs/workshop_tools_7.webp",
        images: ["imgs/workshop_tools_7.webp", "imgs/spoon_rings_hero_6.jpg", "imgs/spoon_rings_hero_9.jpg"],
        category: "argent"
    },
    {
        id: 11,
        name: "Éclat Doré",
        price: "36€",
        material: "Cuivre",
        description: "Lecuivre poli crée un éclar naturel qui illumine chaque gestes de la main.",
        image: "imgs/contact_background_7.jpg",
        category: "cuivre"
    },
    {
        id: 12,
        name: "Technologie Art",
        price: "41€",
        material: "Acier",
        description: "Lunion harmonieuse entre technologie moderne et savoir-faire artisanal traditionnels.",
        image: "imgs/contact_background_0.jpg",
        category: "acier"
    },
    {
        id: 13,
        name: "Perle d'Argent",
        price: "47€",
        material: "Argent",
        description: "La douceur et l'élégance d'une勺子 en argent massif transformée avec délicatesse.",
        image: "imgs/spoon_rings_hero_6.jpg",
        category: "argent"
    },
    {
        id: 14,
        name: "Ambre Cuivré",
        price: "34€",
        material: "Cuivre",
        description: "Les nuances ambrées du cuivre au cours de son processus d'oxydation naturelle.",
        image: "imgs/spoon_rings_hero_8.jpg",
        category: "cuivre"
    },
    {
        id: 15,
        name: "Éclat Froid",
        price: "39€",
        material: "Acier",
        description: "L'éclat froid et élégant de l'aciess stainlesspolishé avec soin artisanal.",
        image: "imgs/gallery_display_9.jpg",
        category: "acier"
    },
    {
        id: 16,
        name: "Lunière Lunaire",
        price: "49€",
        material: "Argent",
        description: "Les reflets lunaires d'une勺子 en argent sillage transformée en bague mystique.",
        image: "imgs/gallery_display_3.jpg",
        category: "argent"
    },
    {
        id: 17,
        name: "Terre Cuite",
        price: "33€",
        material: "Cuivre",
        description: "La chaleur terre à terre du cuivre avec ses nuances ocres et rougeatres naturelles.",
        image: "imgs/gallery_display_4.jpg",
        category: "cuivre"
    },
    {
        id: 18,
        name: "Acier Brillant",
        price: "40€",
        material: "Acier",
        description: "Le brillant mirror-like de l'aciess obtenu par un polissage artisanal patient.",
        image: "imgs/contact_background_5.jpg",
        category: "acier"
    },
    {
        id: 19,
        name: "Perle Mystique",
        price: "46€",
        material: "Argent",
        description: "La profondeur mysté ese d'une勺子 en argent patiné par le temps et l'usage.",
        image: "imgs/spoon_rings_hero_9.jpg",
        category: "argent"
    },
    {
        id: 20,
        name: "Cuivre Noble",
        price: "37€",
        material: "Cuivre",
        description: "La noblesse naturelle du cuivre revealée par un travail respectueux de ses propriétés.",
        image: "imgs/workshop_tools_5.jpg",
        images: ["imgs/workshop_tools_5.jpg", "imgs/spoon_rings_hero_8.jpg", "imgs/contact_background_7.jpg"],
        category: "cuivre"
    },
    {
        id: 21,
        name: "Modernité Pure",
        price: "43€",
        material: "Acier",
        description: "La pureté des formes modernes s'allie à l'authenticité du matériau et du savoir-faire.",
        image: "imgs/workshop_tools_4.jpg",
        category: "acier"
    },
    {
        id: 22,
        name: "Étoile d'Argent",
        price: "51€",
        material: "Argent",
        description: "L'éclat Stellaire d'une勺子 premium en argent massif transformée avec excellence.",
        image: "imgs/workshop_tools_7.webp",
        category: "argent"
    },
    {
        id: 23,
        name: "Ambre Majestueux",
        price: "38€",
        material: "Cuivre",
        description: "La majesté des tons ambrés que seul le temps peut révéler au cuivre de qualité.",
        image: "imgs/contact_background_7.jpg",
        category: "cuivre"
    },
    {
        id: 24,
        name: "Titan Moderne",
        price: "44€",
        material: "Acier",
        description: "La robustesse du titane jointe à l'élégance d'un design contemporaine et épuré.",
        image: "imgs/contact_background_0.jpg",
        category: "acier"
    },
    {
        id: 25,
        name: "Clarté Crystalline",
        price: "52€",
        material: "Argent",
        description: "La clarté crystallise d'un argent de qualité supérieure transformé en bague d'exception.",
        image: "imgs/spoon_rings_hero_6.jpg",
        category: "argent"
    },
    {
        id: 26,
        name: "Soleil Cuivré",
        price: "36€",
        material: "Cuivre",
        description: "Les nuances solaires du cuivre qui évoluent au fil des saisons et de l'usage.",
        image: "imgs/spoon_rings_hero_8.jpg",
        category: "cuivre"
    },
    {
        id: 27,
        name: "Inox Élégance",
        price: "41€",
        material: "Acier",
        description: "L'élégance Inoxydable de l'aciess avec un finish soigné qui resist aux épreuves du temps.",
        image: "imgs/gallery_display_9.jpg",
        category: "acier"
    },
    {
        id: 28,
        name: "Platine Artisanale",
        price: "55€",
        material: "Argent",
        description: "La rareté du platine meeting l'artisanat d'exception pour une pièce decollection.",
        image: "imgs/gallery_display_3.jpg",
        category: "argent"
    },
    {
        id: 29,
        name: "Feu Sacré",
        price: "35€",
        material: "Cuivre",
        description: "Les tons de feu sacré que révèle le cuivre lors de son oxydation naturelle contrôlée.",
        image: "imgs/gallery_display_4.jpg",
        category: "cuivre"
    },
    {
        id: 30,
        name: "Acier Noble",
        price: "42€",
        material: "Acier",
        description: "La noblesse de l'aciess dévoilée par un processus artisanal qui elevate le matériau.",
        image: "imgs/contact_background_5.jpg",
        images: ["imgs/contact_background_5.jpg", "imgs/workshop_tools_4.jpg", "imgs/gallery_display_9.jpg"],
        category: "acier"
    }
];

// ===== GALLERY =====
function initGallery() {
    const galleryGrid = document.getElementById('gallery-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Create product cards
    function createProductCard(product) {
        return `
            <div class="product-card" data-category="${product.category}" data-id="${product.id}">
                <img src="${encodeURI(product.image)}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">${product.price}</div>
                    <p class="product-description">${product.description}</p>
                    <span class="product-material">${product.material}</span>
                </div>
            </div>
        `;
    }
    
    // Render all products
    function renderProducts(productsToRender) {
        galleryGrid.innerHTML = productsToRender.map(createProductCard).join('');
        
        // Add animation to new cards
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('fade-in-up');
        });

        // Replace hover thumbnails with a click-to-open modal that shows product images
        cards.forEach(card => {
            card.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                const product = products.find(p => p.id === id);
                if (!product) return;

                // Prefer product-specific images array (up to 3). Fallback to main + others in category.
                let images = [];
                if (product.images && product.images.length) {
                    images = product.images.slice(0, 3);
                } else {
                    images = [product.image];
                    const others = products.filter(p => p.category === product.category && p.id !== id).slice(0, 2).map(p => p.image);
                    images.push(...others);
                }

                // Build modal (lightweight): show spinner while images load via fetch+blob, then fade images in
                const modal = document.createElement('div');
                modal.className = 'product-image-modal';
                modal.innerHTML = `
                    <div class="product-image-modal-inner">
                        <button class="product-image-modal-close" aria-label="Fermer">&times;</button>
                        <div class="product-image-modal-spinner">Chargement...</div>
                        <div class="product-image-modal-gallery">
                            ${images.map(src => `<div class="modal-image-wrap"><img data-src="${encodeURI(src)}" alt="${product.name}"></div>`).join('')}
                        </div>
                        <div class="product-image-modal-caption">${product.name} — ${product.price}</div>
                    </div>
                `;

                // Append and lock scroll
                document.body.appendChild(modal);
                const previousOverflow = document.body.style.overflow;
                document.body.style.overflow = 'hidden';

                // Close handlers
                function closeModal() {
                    if (modal && modal.parentNode) modal.parentNode.removeChild(modal);
                    document.body.style.overflow = previousOverflow || 'auto';
                    document.removeEventListener('keydown', onKey);
                }

                function onKey(e) {
                    if (e.key === 'Escape') closeModal();
                }

                modal.querySelector('.product-image-modal-close').addEventListener('click', closeModal);
                modal.addEventListener('click', function(e) {
                    if (e.target === modal) closeModal();
                });
                document.addEventListener('keydown', onKey);

                // Load modal images: assign encoded src IMMEDIATELY for fast display, then fetch blob in background
                const modalSpinner = modal.querySelector('.product-image-modal-spinner');
                const imgEls = modal.querySelectorAll('.product-image-modal-gallery img');

                let anyLoaded = false;
                imgEls.forEach((imgEl, idx) => {
                    const dataSrc = imgEl.getAttribute('data-src');
                    imgEl.style.opacity = '0';
                    imgEl.loading = 'eager';

                    if (!dataSrc) {
                        imgEl.style.opacity = '1';
                        return;
                    }

                    // Assign encoded src IMMEDIATELY so browser starts loading right away (fast display on mobile)
                    imgEl.src = dataSrc;
                    
                    // Fade in when native load completes
                    imgEl.onload = function() {
                        imgEl.style.opacity = '1';
                        if (!anyLoaded) {
                            anyLoaded = true;
                            modalSpinner.style.display = 'none';
                        }
                    };

                    // Try fetch->blob in background (non-blocking) to optimize further if it helps
                    fetch(dataSrc)
                        .then(response => { if (!response.ok) throw new Error('status ' + response.status); return response.blob(); })
                        .then(blob => {
                            const objectUrl = URL.createObjectURL(blob);
                            imgEl._objectUrl = objectUrl;
                            imgEl.src = objectUrl; // replace with blob URL if fetch succeeds
                        })
                        .catch(err => {});

                    // Error handler as fallback
                    imgEl.onerror = function() {
                        this.style.opacity = '1';
                        if (!anyLoaded) {
                            anyLoaded = true;
                            modalSpinner.style.display = 'none';
                        }
                    };
                });
            });
        });
    }
    
    // Initial render
    renderProducts(products);
    
    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            const filter = this.getAttribute('data-filter');
            const filteredProducts = filter === 'all' 
                ? products 
                : products.filter(product => product.category === filter);
            
            // Animate out current cards
            const currentCards = document.querySelectorAll('.product-card');
            currentCards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
            });
            
            // Render filtered products after animation (defer to idle callback to avoid blocking main thread)
            const idle = window.requestIdleCallback || function(cb){ return setTimeout(cb, 100); };
            idle(() => renderProducts(filteredProducts));
        });
    });
}

// ===== VIDEO MODAL =====
function initVideoModal() {
    const videoWrapper = document.getElementById('video-wrapper');
    const videoThumbnail = document.getElementById('video-thumbnail');
    const playButton = document.getElementById('play-button');
    const videoModal = document.getElementById('video-modal');
    const modalClose = document.getElementById('modal-close');
    const videoEmbed = document.getElementById('video-embed');
    
    // YouTube video URL (replace with actual video)
    const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0";
    
    // Open video modal
    playButton.addEventListener('click', function() {
        videoEmbed.innerHTML = `<iframe src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close video modal
    function closeModal() {
        videoModal.classList.remove('active');
        videoEmbed.innerHTML = '';
        document.body.style.overflow = 'auto';
    }
    
    modalClose.addEventListener('click', closeModal);
    
    // Close on outside click
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            closeModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ===== CONTACT FORM =====
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Simple validation
        if (!data.name || !data.email || !data.subject || !data.message) {
            showNotification('Veuillez remplir tous les champs obligatoires.', 'error');
            return;
        }
        
        if (!isValidEmail(data.email)) {
            showNotification('Veuillez entrer une adresse email valide.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Reset form
            this.reset();
            
            // Show success message
            showNotification('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.', 'success');
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Create email link
            const subject = encodeURIComponent(data.subject);
            const body = encodeURIComponent(
                `Nom: ${data.name}\n` +
                `Email: ${data.email}\n` +
                `Téléphone: ${data.phone || 'Non renseigné'}\n\n` +
                `Message:\n${data.message}`
            );
            const mailtoLink = `mailto:contact@lieva-creation.fr?subject=${subject}&body=${body}`;
            
            // Open email client
            setTimeout(() => {
                window.location.href = mailtoLink;
            }, 1500);
            
        }, 2000);
    });
}

// ===== UTILITY FUNCTIONS =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 100px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
            padding: 16px;
            border-radius: 4px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            animation: slideInRight 0.3s ease-out;
        }
        
        .notification-success {
            background-color: var(--success);
            color: white;
        }
        
        .notification-error {
            background-color: var(--error);
            color: white;
        }
        
        .notification-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(notification);
    
    // Close notification
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// ===== ANIMATIONS =====
function initAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about-content, .process-step, .contact-content, .footer-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // Add CSS for scroll animations
    const animationStyle = document.createElement('style');
    animationStyle.textContent = `
        .about-content,
        .process-step,
        .contact-content,
        .footer-content {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(animationStyle);
}

// ===== LAZY LOADING ENHANCEMENT =====
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize lazy loading
initLazyLoading();

// ===== ACCESSIBILITY ENHANCEMENTS =====


// Initialize accessibility features
initAccessibility();

// ===== PERFORMANCE OPTIMIZATIONS =====
function initPerformanceOptimizations() {
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            // Scroll-based animations can be added here
        }, 10);
    });
    
    // Preload critical images
    const criticalImages = [
        'imgs/spoon_rings_hero_9.jpg',
        'imgs/workshop_tools_5.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
initPerformanceOptimizations();

console.log('LIEVA CREATION website initialized successfully!');

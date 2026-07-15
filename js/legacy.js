/*==========================================================
LEGACY SECTION — Interactive Animation Engine
Uses Intersection Observer + CSS transforms only
No external dependencies
==========================================================*/

(function () {
    'use strict';

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let tree, section, bgGrid;
    const cards = {};
    const nodes = {};

    function init() {
        section = document.getElementById('legacy-section');
        if (!section) return;

        tree = document.getElementById('legacy-tree');
        bgGrid = section.querySelector('.legacy-bg-grid');

        /* Collect elements */
        section.querySelectorAll('[data-card]').forEach(el => {
            cards[el.dataset.card] = el;
            if (!prefersReducedMotion) el.dataset.state = 'upcoming';
        });

        section.querySelectorAll('[data-node]').forEach(el => {
            nodes[el.dataset.node] = el;
        });

        if (prefersReducedMotion) {
            showAllImmediately();
            return;
        }

        /* Parallax background grid on scroll */
        if (bgGrid) {
            window.addEventListener('scroll', onScroll, { passive: true });
        }

        setupObservers();
        activateGeneration('1');
    }

    function onScroll() {
        if (!bgGrid || !section) return;
        const rect = section.getBoundingClientRect();
        const progress = -rect.top;
        const shift = Math.max(0, Math.min(progress * 0.05, 12));
        bgGrid.style.transform = `translateY(${shift}px)`;
    }

    function showAllImmediately() {
        Object.values(cards).forEach(c => { c.dataset.state = 'active'; });
        Object.values(nodes).forEach(n => n.classList.add('is-active'));
        section.querySelectorAll('.qual-badge').forEach(b => b.classList.add('is-visible'));
        section.querySelectorAll('.legacy-closing-caption').forEach(el => el.classList.add('is-visible'));
        
        /* Draw all paths instantly */
        section.querySelectorAll('.legacy-path').forEach(p => {
            const len = p.getTotalLength ? p.getTotalLength() : 100;
            p.style.strokeDasharray = len;
            p.style.strokeDashoffset = 0;
        });
    }

    function setupObservers() {
        /* Observer for card activations and progressive reveals */
        const genObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const gen = entry.target.dataset.gen;
                    activateGeneration(gen);
                }
            });
        }, {
            rootMargin: '-30% 0px -30% 0px',
            threshold: 0.05
        });

        /* Observer for path drawing */
        const connectorObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const connectorId = entry.target.dataset.connector;
                    drawConnector(connectorId, entry.target);
                    connectorObserver.unobserve(entry.target); /* Draw once */
                }
            });
        }, {
            rootMargin: '0px 0px -5% 0px',
            threshold: 0.05
        });

        /* Observe generation containers */
        section.querySelectorAll('.legacy-gen').forEach(el => genObserver.observe(el));
        
        /* Observe connector elements */
        section.querySelectorAll('[data-connector]').forEach(el => connectorObserver.observe(el));

        /* Observe final caption */
        const caption = section.querySelector('[data-final-caption]');
        if (caption) {
            const captionObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        caption.classList.add('is-visible');
                        tree.classList.add('is-illuminated');
                        setTimeout(() => tree.classList.remove('is-illuminated'), 1200);
                        captionObserver.disconnect();
                    }
                });
            }, { rootMargin: '0px 0px -5% 0px', threshold: 0.1 });
            captionObserver.observe(caption);
        }
    }

    function activateGeneration(gen) {
        if (gen === '1') {
            activateCard('1');
            activateNode('1');
            
            deactivateCard('2');
            deactivateCard('3');
            deactivateCard('4');
            
            deactivateNode('2');
            deactivateNode('3');
            deactivateNode('4');
            
            resetBadges(section.querySelector('[data-badges="3"]'));
            resetBadges(section.querySelector('[data-badges="4"]'));
        } else if (gen === '2') {
            pastCard('1');
            activateCard('2');
            activateNode('1');
            activateNode('2');
            
            deactivateCard('3');
            deactivateCard('4');
            
            deactivateNode('3');
            deactivateNode('4');
            
            resetBadges(section.querySelector('[data-badges="3"]'));
            resetBadges(section.querySelector('[data-badges="4"]'));
        } else if (gen === '3') {
            pastCard('1');
            pastCard('2');
            activateCard('3');
            activateCard('4');
            activateNode('1');
            activateNode('2');
            activateNode('3');
            activateNode('4');
            
            staggerBadges(section.querySelector('[data-badges="3"]'));
            staggerBadges(section.querySelector('[data-badges="4"]'));
        }
    }

    function drawConnector(id, element) {
        if (id === '1-2') {
            const path = element.querySelector('.legacy-path');
            animatePath(path, 800);
        } else if (id === 'branch') {
            const stem = element.querySelector('.legacy-path-stem');
            const left = element.querySelector('[data-branch="left"]');
            const right = element.querySelector('[data-branch="right"]');

            animatePath(stem, 400, () => {
                animatePath(left, 600);
                animatePath(right, 600);
            });
        }
    }

    function animatePath(pathEl, duration, onComplete) {
        if (!pathEl) { if (onComplete) onComplete(); return; }
        if (pathEl.classList.contains('is-drawn')) { if (onComplete) onComplete(); return; }

        pathEl.classList.add('is-drawn');
        const len = pathEl.getTotalLength ? pathEl.getTotalLength() : 100;
        pathEl.style.strokeDasharray = len;
        pathEl.style.strokeDashoffset = len;

        const svg = pathEl.closest('svg');
        const dot = svg ? svg.querySelector('.path-glow-dot') : null;
        const start = performance.now();

        function step(now) {
            const elapsed = now - start;
            const t = Math.min(elapsed / duration, 1);
            const eased = easeInOutCubic(t);

            pathEl.style.strokeDashoffset = len * (1 - eased);

            if (dot && pathEl.getPointAtLength) {
                const point = pathEl.getPointAtLength(eased * len);
                dot.setAttribute('cx', point.x);
                dot.setAttribute('cy', point.y);
                dot.style.opacity = t < 0.95 ? '1' : String(1 - (t - 0.95) * 20);
            }

            if (t < 1) {
                requestAnimationFrame(step);
            } else {
                pathEl.style.strokeDashoffset = 0;
                if (dot) dot.style.opacity = '0';
                if (onComplete) onComplete();
            }
        }

        if (dot) dot.style.opacity = '1';
        requestAnimationFrame(step);
    }

    function activateCard(id) {
        const card = cards[id];
        if (card) card.dataset.state = 'active';
    }

    function pastCard(id) {
        const card = cards[id];
        if (card) card.dataset.state = 'past';
    }

    function deactivateCard(id) {
        const card = cards[id];
        if (card) card.dataset.state = 'upcoming';
    }

    function activateNode(id) {
        const node = nodes[id];
        if (node) {
            node.classList.add('is-active');
            const ring = node.querySelector('.node-pulse-ring');
            if (ring) {
                ring.style.animation = 'none';
                /* Force reflow */
                void ring.offsetWidth;
                ring.style.animation = '';
            }
        }
    }

    function deactivateNode(id) {
        const node = nodes[id];
        if (node) node.classList.remove('is-active');
    }

    function staggerBadges(wrapper) {
        if (!wrapper) return;
        const badges = wrapper.querySelectorAll('.qual-badge');
        badges.forEach(badge => {
            badge.classList.add('is-visible');
        });
    }

    function resetBadges(wrapper) {
        if (!wrapper) return;
        const badges = wrapper.querySelectorAll('.qual-badge');
        badges.forEach(badge => {
            badge.classList.remove('is-visible');
        });
    }

    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

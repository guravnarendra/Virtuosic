(function () {
/* ============================================
           VIRTUOSIC 2K26 - ENHANCED GS STYLING
        ============================================ */

        /* ═══ STATS COUNT-UP ANIMATION ═══ */
        function animateStats() {
            const duration = 1500;
            function animateValue(el, start, end, suffix = '', prefix = '') {
                let startTime = null;
                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    const value = Math.floor(progress * (end - start) + start);
                    el.textContent = prefix + value + suffix;
                    if (progress < 1) requestAnimationFrame(step);
                    else el.textContent = prefix + end + suffix;
                }
                requestAnimationFrame(step);
            }
            const prize = document.getElementById('stat-prize');
            const events = document.getElementById('stat-events');
            const participants = document.getElementById('stat-participants');
            if (prize) {
                let startTime = null;
                const end = 100;
                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / 1500, 1);
                    const value = Math.floor(progress * end);
                    prize.textContent = value + "K+";
                    if (progress < 1) requestAnimationFrame(step);
                    else prize.textContent = "₹100K+";
                }
                requestAnimationFrame(step);
            }
            if (events) animateValue(events, 0, 9, '+');
            if (participants) animateValue(participants, 0, 500, '+');
            const prizeBanner = document.getElementById('prize-banner');
            if (prizeBanner) {
                let startTime = null;
                const end = 100000;
                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / 1800, 1);
                    const value = Math.floor(progress * end);
                    prizeBanner.textContent = "₹ " + value.toLocaleString('en-IN') + "+";
                    if (progress < 1) requestAnimationFrame(step);
                    else prizeBanner.textContent = "₹ 1,00,000+";
                }
                requestAnimationFrame(step);
            }
        }

        function ensureGsScrollbarStyle() {
            if (document.getElementById('gs-team-scrollbar-style')) return;

            const style = document.createElement('style');
            style.id = 'gs-team-scrollbar-style';
            style.textContent = `
                .gs-team-scroll {
                    scrollbar-width: thin;
                    scrollbar-color: rgba(34, 211, 238, 0.9) rgba(39, 39, 42, 0.75);
                }
                .gs-team-scroll::-webkit-scrollbar {
                    height: 8px;
                }
                .gs-team-scroll::-webkit-scrollbar-track {
                    background: rgba(39, 39, 42, 0.75);
                    border-radius: 9999px;
                }
                .gs-team-scroll::-webkit-scrollbar-thumb {
                    background: linear-gradient(90deg, #22d3ee, #a78bfa);
                    border-radius: 9999px;
                }
            `;
            document.head.appendChild(style);
        }

        // ─── Event Data ───
        const EVENTS_DATA = [
            { id: 'evolution', name: 'Evolution', shortDesc: 'Coding battle — evolve or get eliminated', description: 'A multi-round coding competition...', icon: '💻', accent: '#F43F5E', location: 'Respective Dept', time: '10:00 AM – 1:00 PM', fee: '₹100', teamSize: '1–2', about: 'Evolution is a survival-style coding competition...', rules: ['Teams of 1–2 members allowed.', 'Internet access is strictly prohibited.'], judging: [{ name: 'Correctness', marks: 40 }], coordinators: [{ name: 'Jigisha Mhapasekar', phone: '+91 96994 24099', email: 'jigishadmhapasekar@gmail.com', photo: 'profilephoto/Jigisha-Mhapasekar.jpeg' }], formUrl: 'https://forms.google.com', page: 'evolution.html' },
            { id: 'project-exhibition', name: 'Project Exhibition', shortDesc: 'Showcase your degree-level innovation', icon: '🔬', accent: '#8B5CF6', location: 'ClassRoom No:29,30,119,120', time: '10:00 AM – 4:00 PM', fee: '₹200', teamSize: 'Max 4', about: 'National Level Project Exhibition', rules: ['Each team can have a maximum of 4 members.'], judging: [{ name: 'Innovation', marks: 20 }], coordinators: [{ name: 'Uzair Shaikh', phone: '+91 86007 30728', email: '', photo: '' }], formUrl: 'https://forms.google.com', page: 'project-exhibition.html' }
        ];

        const CONTACT_DATA = {
            gs: { name: 'Vishnu Vejare', phone: '+91 84128 60728', email: 'vishnuvejare@gmail.com', initials: 'VV', photo: 'profilephoto/Vishnu-vejare.jpeg' },
            core: [

                // 🔥 CORE DEV (Special)
                { name: 'Narendra Ratnakar Gurav', event: 'Core Dev', phone: '+91 91376 63880', email: 'narendragurav2004@gmail.com', initials: 'NG', photo: 'profilephoto/Narendra-Gurav.jpg' },

                // 1️⃣ Evolution
                { name: 'Jigisha Darshan Mhapasekar', event: 'Evolution', phone: '+91 96994 24099', email: 'jigishadmhapasekar@gmail.com', initials: 'JM', photo: 'profilephoto/Jigisha-Mhapasekar.jpeg' },
                { name: 'Vasudev Santosh Narvekar', event: 'Evolution', phone: '+91 94208 63918', email: 'vasudevnarvekar737@gmail.com', initials: 'VN', photo: 'profilephoto/Vasudev-Narvekar.jpeg' },

                // 2️⃣ Project Exhibition
                { name: 'Vaishnavi Shivprasad Ghare', event: 'Project Exhibition', phone: '+91 93075 35959', email: 'vaishnavighare531@gmail.com', initials: 'VG', photo: 'profilephoto/Vaishnavi-Ghare.jpeg' },

                // 3️⃣ Debate
                { name: 'Sanika Suhas Sawant', event: 'Debate', phone: '+91 72081 08501', email: 'sanikasawant1735@gmail.com', initials: 'SS', photo: 'profilephoto/Sanika-Sawant.jpeg' },
                { name: 'Xavier Agnel Fernandes', event: 'Debate', phone: '+91 93078 63916', email: 'xavierfernandis276@gmail.com', initials: 'XF', photo: 'profilephoto/Xavier-Fernandes.png' },

                // 4️⃣ Directo
                { name: 'Anushka Pandurang Sawant', event: 'Directo', phone: '+91 93569 70062', email: 'anushka.s9642@gmail.com', initials: 'AS', photo: 'profilephoto/Anushka-Sawant.jpeg' },
                { name: 'Pallavi Parashram Varake', event: 'Directo', phone: '+91 80103 16075', email: 'pallavivarake6075@gmail.com', initials: 'PV', photo: 'profilephoto/Pallavi-Varake.jpeg' },

                // 5️⃣ Robotics
                { name: 'Govind Mahesh Sawant', event: 'Robotics', phone: '+91 94212 87164', email: 'sawantgovind76@gmail.com', initials: 'GS', photo: 'profilephoto/Govind-Sawant.jpeg' },
                { name: 'Ankit Bhiva Gaonkar', event: 'Robotics', phone: '+91 87665 46077', email: 'ankitgaonka007@gmail.com', initials: 'AG', photo: 'profilephoto/Ankit-Gaonkar.jpeg' },

                // 6️⃣ Poster Presentation
                { name: 'Kamakshi Rajendra Keluskar', event: 'Poster Presentation', phone: '+91 81495 84764', email: 'kamakshikeluskar@gmail.com', initials: 'KK', photo: 'profilephoto/Kamakshi-Keluskar.jpeg' },
                { name: 'Bhargawi Sanjay Kavatkar', event: 'Poster Presentation', phone: '+91 96997 02026', email: 'bhargawikavatkar@gmail.com', initials: 'BK', photo: 'profilephoto/Bhargawi-Kavatkar.jpeg' },

                // 7️⃣ Gaming
                { name: 'Vicky Ishwar Rathod', event: 'Gaming (Free Fire)', phone: '+91 81692 22207', email: 'rathodvickey71@gmail.com', initials: 'VR', photo: 'profilephoto/Vicky-Rathod.jpeg' },
                { name: 'Maaz AbuTalib Khan', event: 'Gaming (BGMI)', phone: '+91 93325 579949', email: 'khanmaaz7684@gmail.com', initials: 'MK', photo: 'profilephoto/Maaz-Khan.jpeg' },
                { name: 'Roshan Bhikaji Sawant', event: 'Gaming (Mini Militia)', phone: '+91 93216 58580', email: 'sawantroshan642@gmail.com', initials: 'RS', photo: 'profilephoto/Roshan-Sawant.jpeg' },
                { name: 'Danesh Parab', event: 'Gaming (Mini Militia)', phone: '+91 94215 36963', email: 'parabdanesh9@gmail.com', initials: 'DP', photo: 'profilephoto/Danesh-Parab.jpeg' },

                // 8️⃣ HackSprint
                { name: 'Rajas Taneshwar Gawas', event: 'HackSprint', phone: '+91 98909 59211', email: 'rajasgavas748@gmail.com', initials: 'RG', photo: 'profilephoto/Rajas-Gawas.png' },
                { name: 'Rutuja Sagar Chougule', event: 'HackSprint', phone: '+91 84828 31815', email: 'rutujachougule1825@gmail.com', initials: 'RC', photo: 'profilephoto/Rutuja-Chougule.jpeg' },

                // 9️⃣ Auto Expo
                { name: 'Mufid Rizwan Shaikh', event: 'Auto Expo', phone: '+91 95619 41586', email: 'mufidshaikh9421145786@gmail.com', initials: 'MS', photo: 'profilephoto/Mufid-Shaikh.jpeg' },
                { name: 'Rahul Narayan Gawas', event: 'Auto Expo', phone: '+91 70386 83384', email: 'rahulgawas790@gmail.com', initials: 'RG', photo: 'profilephoto/Rahul-Gawas.jpeg' },

                // 🔟 Other Committees
                { name: 'Disha Vinayak Prabhu', event: 'Registration Committee', phone: '+91 82630 21411', email: 'dishaprabhu8@gmail.com', initials: 'DP', photo: 'profilephoto/Disha-Prabhu.png' },
                { name: 'Vaibhavi Shrikrishna Girkar', event: 'Prize Distribution', phone: '+91 74987 19676', email: 'vaibhavigirkar@gmail.com', initials: 'VG', photo: 'profilephoto/Vaibhavi-Girkar.jpeg' },
                { name: 'Kale Parshuram Santosh', event: 'Inauguration', phone: '+91 90670 68347', email: 'kaleparshuram90@gmail.com', initials: 'KP', photo: 'profilephoto/Parshuram-Kale.jpeg' }

            ]
        };

        const SOCIAL_DATA = [
            { platform: 'Instagram', handle: '@sspmcoesocial', url: 'https://www.instagram.com/sspmcoesocial', iconClass: 'instagram' },
            { platform: 'Website', handle: 'sspmcoe.ac.in', url: 'https://sspmcoe.ac.in', iconClass: 'website' }
        ];

        /* ═══ STAR FIELD GENERATOR ═══ */
        function generateStars() {
            const container = document.getElementById('starField');
            if (!container) return;
            const count = 80;
            let html = '';
            for (let i = 0; i < count; i++) {
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const dur = 3 + Math.random() * 6;
                const delay = Math.random() * 5;
                const peak = 0.3 + Math.random() * 0.5;
                const size = 1 + Math.random() * 1.5;
                html += `<div class="star" style="left:${x}%;top:${y}%;width:${size}px;height:${size}px;--dur:${dur}s;--peak:${peak};animation-delay:${delay}s;"></div>`;
            }
            container.innerHTML = html;
        }

        /* ═══ COUNTDOWN (FLIP-CLOCK) ═══ */
        function initCountdown() {
            const el = document.getElementById('countdown');
            const live = document.getElementById('live-badge');
            if (!el) return;
            const target = new Date('2026-04-08T00:00:00+05:30').getTime();
            const prevValues = { days: '00', hours: '00', minutes: '00', seconds: '00' };
            function flipCard(cardId, newVal) { /* simplified stub for countdown */ }
            function tick() { }
            setTimeout(() => { }, 300);
        }

        /* ═══ FULL-SCREEN EXPAND PAGE TRANSITION ═══ */
        function expandToPage(url, originEl) { }

        function createExpandOverlay() { }

        function renderCompetitionCards() { }

        function initEventPage() { }

        /* ═══ CONTACT PAGE — ENHANCED GS TEAM WITH SAME BOLD/NEON STYLE & REMOVED DUPLICATE TITLE ═══ */
        function renderContactPage() {
            const gsEl = document.getElementById('gs-section');
            if (gsEl) {
                const gs = CONTACT_DATA.gs;
                // Team members list (representatives + sports + cultural) but with style identical to "General Secretary" heading boldness
                // also no redundant "General Secretary" text below Vishnu's name.
                const GS_TEAM = [
                    { name: 'Varun Karle', role: 'College-Cultural Representative', phone: '+91 95296 65461', email: 'karlevarun@gmail.com', photo: 'profilephoto/Varun-Karle.jpeg' },
                    { name: 'Sanika Mhatugade', role: 'Ladies Representative', phone: '+91 77740 10816', email: 'sanumhatugade2411@gmail.com', photo: 'profilephoto/Sanika-Mhatugade.jpeg' },
                    { name: 'Govind Sawant', role: 'Sports Representative', phone: '+91 94212 87164', email: 'sawantgovind76@gmail.com', photo: 'profilephoto/Govind-Sawant.jpeg' }
                ];

                // MAIN GS (Vishnu) with same boldness but WITHOUT the extra "General Secretary" text below name
                // we keep the phone/email but remove the role line beneath name. Also maintain neon styling.
                gsEl.innerHTML = `
                    <!-- 🔥 GS HERO - SAME STYLE, NO REDUNDANT "General Secretary" TEXT -->
                    <div class="flex flex-col items-center mb-14 w-full">
                        <img src="${gs.photo || 'profilephoto/Vishnu-vejare.jpeg'}" 
                            class="w-full max-w-[280px] aspect-square rounded-2xl object-cover mb-6 neon-purple gs-card"
                            style="box-shadow: 0 0 45px rgba(124,58,237,0.45), 0 20px 40px rgba(0,0,0,0.5);">
                        <h3 class="font-outfit text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-tight neon-glow">
                            ${gs.name}
                        </h3>
                        <!-- role text completely removed as requested (no "General Secretary" below name) -->
                        <p class="text-sm text-cyan-400 font-medium mt-2">${gs.phone}</p>
                        <p class="text-xs text-zinc-500 break-all">${gs.email}</p>
                    </div>
                    
                    <!-- 🔥 GS TEAM SCROLL - NOW WITH SAME BOLD/NEON STYLE AS GENERAL SECRETARY HEADER -->
                    <div class="w-full overflow-x-auto pb-4 gs-team-scroll">
                        <div class="flex gap-8 px-1 justify-start">
                            ${GS_TEAM.map(m => `
                                <div class="min-w-[280px] md:min-w-[300px] flex flex-col items-center text-center gs-card transition-all duration-300">
                                    <p class="font-anton text-[2rem] leading-none uppercase tracking-wide text-white mb-2">
                                        ${m.role}
                                    </p>
                                    <div class="relative mb-4">
                                        <img src="${m.photo}" 
                                            class="w-44 h-44 md:w-52 md:h-52 rounded-2xl object-cover shadow-2xl border border-purple-500/30"
                                            style="box-shadow: 0 0 30px rgba(168,85,247,0.3);">
                                    </div>
                                    <h4 class="font-outfit text-xl font-extrabold text-white tracking-tight mb-1">${m.name}</h4>
                                    <p class="text-sm text-cyan-400 font-mono">${m.phone}</p>
                                    <p class="text-[11px] text-zinc-500 break-all max-w-[220px]">${m.email}</p>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="flex items-center justify-end -mt-1 pr-1">
                        <span class="text-cyan-400/90 text-lg leading-none">→</span>
                    </div>
                `;
            }

            // Core team grid remains same but we keep consistent styling
            const coreEl = document.getElementById('core-grid');
            if (coreEl) {
                coreEl.innerHTML = CONTACT_DATA.core.map((m, i) => {
                    const isReversed = i % 2 !== 0;
                    return `
                        <div class="glass-card rounded-2xl p-4 flex items-center gap-5 ${isReversed ? 'flex-row-reverse' : ''} border-gradient hover:bg-white/[0.02] transition-all duration-300">
                            ${m.photo
                            ? `<img src="${m.photo}" alt="${m.name}" class="w-32 h-32 rounded-2xl object-cover shrink-0 shadow-lg shadow-purple-500/10">`
                            : `<div class="w-32 h-32 rounded-2xl flex items-center justify-center bg-zinc-800 text-white text-2xl font-bold neon-purple shadow-inner">${m.initials}</div>`
                        }
                            <div class="flex-1 min-w-0 text-left">
                                <h4 class="font-outfit text-xl font-bold text-white mb-1 tracking-tight">${m.name}</h4>
                                <p class="font-space text-[10px] text-cyan-400 font-bold uppercase tracking-[2px] mb-2">${m.event}</p>
                                <p class="text-[11px] text-zinc-500 mb-0.5 flex items-center gap-1"><span class="inline-block w-3">📱</span> ${m.phone}</p>
                                <p class="text-[11px] text-zinc-500 break-all flex items-start gap-1"><span class="inline-block w-3 shrink-0">✉️</span> ${m.email || '-'}</p>
                            </div>
                        </div>
                    `;
                }).join('');
            }
        }

        function renderSocialPage() {
            const container = document.getElementById('social-links');
            if (!container) return;
            const icons = {
                instagram: '<svg viewBox="0 0 24 24" fill="white" class="w-7 h-7"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
                website: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
            };
            const grads = { instagram: 'from-pink-500 via-purple-500 to-orange-400', website: 'from-sky-500 to-cyan-400' };
            container.innerHTML = SOCIAL_DATA.map(s => `
                <a href="${s.url}" target="_blank" rel="noopener" class="glass-card rounded-2xl p-5 flex items-center gap-5 group border-gradient hover:border-purple-500/30 transition-all">
                    <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${grads[s.iconClass]} flex items-center justify-center shrink-0 shadow-lg">${icons[s.iconClass]}</div>
                    <div class="flex-1"><h3 class="font-outfit text-lg font-bold text-white tracking-tight mb-0.5">${s.platform}</h3><p class="text-sm text-zinc-600">${s.handle}</p></div>
                    <svg class="w-5 h-5 text-zinc-700 group-hover:text-purple-400 transition-all duration-300 group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                </a>
            `).join('');
        }

        /* ═══ INIT ═══ */
        function initVirtuosicContactPage() {
            ensureGsScrollbarStyle();
            generateStars();
            initCountdown();
            renderCompetitionCards();
            initEventPage();
            renderContactPage();
            renderSocialPage();
            setTimeout(animateStats, 500);
        }

        window.__VIRTUOSIC_CONTACT_INIT = initVirtuosicContactPage;

        /* ═══ BFCache Blackout Fix ═══ */
        window.addEventListener('pageshow', (event) => {
            if (event.persisted) {
                const overlay = document.getElementById('page-expand');
                if (overlay) overlay.style.display = 'none';

                const content = document.querySelector('.mobile-frame');
                if (content) content.classList.remove('fade-out-content');
            }
        });
})();

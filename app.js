/* ============================================
   VIRTUOSIC 2K26
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

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = prefix + end + suffix;
      }
    }

    requestAnimationFrame(step);
  }

  // existing stats
  const prize = document.getElementById('stat-prize');
  const events = document.getElementById('stat-events');
  const participants = document.getElementById('stat-participants');

  if (prize) {
    let startTime = null;
    const duration = 1500;
    const end = 100; // for 100K

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const value = Math.floor(progress * end);
      prize.textContent = value + "K+";

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        prize.textContent = "₹100K+";
      }
    }

    requestAnimationFrame(step);
  }
  if (events) animateValue(events, 0, 9, '+');
  if (participants) animateValue(participants, 0, 500, '+');


  // ✅ YAHI PE ADD KAR (last me)
  const prizeBanner = document.getElementById('prize-banner');

  if (prizeBanner) {
    let startTime = null;
    const end = 100000;
    const duration = 1800;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const value = Math.floor(progress * end);
      prizeBanner.textContent = "₹ " + value.toLocaleString('en-IN') + "+";

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        prizeBanner.textContent = "₹ 1,00,000+";
      }
    }

    requestAnimationFrame(step);
  }
}
// ─── Event Data ───
const EVENTS_DATA = [
  {
    id: 'evolution', name: 'Evolution', shortDesc: 'Coding battle — evolve or get eliminated',
    description: 'A multi-round coding competition where each round raises the bar. Only the strongest coders survive the evolution.',
    icon: '💻', accent: '#F43F5E',
    location: 'Respective Dept', time: '10:00 AM – 1:00 PM', fee: '₹100', teamSize: '1–2',
    about: 'Evolution is a survival-style coding competition. Participants face progressively harder algorithmic challenges across multiple rounds. Each round eliminates the weakest — only the most adaptable coders make it to the final.',
    rules: ['Teams of 1–2 members allowed.', 'Internet access is strictly prohibited.', 'Use of AI tools (ChatGPT, Copilot) is banned.', 'Solutions must be original — plagiarism = disqualification.', 'Multiple elimination rounds — survive to win.', 'Languages: C, C++, Java, Python.', 'Decision of judges is final.'],
    judging: [{ name: 'Correctness', marks: 40 }, { name: 'Efficiency', marks: 25 }, { name: 'Code Quality', marks: 20 }, { name: 'Speed Bonus', marks: 15 }],
    coordinators: [{ name: 'Jigisha Mhapasekar', phone: '+91 96994 24099', email: 'jigishadmhapasekar@gmail.com', photo: 'profilephoto/Jigisha-Mhapasekar.jpeg' }, { name: 'Vasudev Narvekar', phone: '+91 94208 63918', email: 'vasudevnarvekar737@gmail.com', photo: 'profilephoto/Vasudev-Narvekar.jpeg' }],
    formUrl: 'https://forms.google.com',
    page: 'evolution.html'
  },
  {
    id: 'project-exhibition', name: 'Project Exhibition', shortDesc: 'Showcase your degree-level innovation',
    description: 'A National Level Project Exhibition providing a platform for students to showcase innovative ideas and technical skills.',
    icon: '🔬', accent: '#8B5CF6',
    location: 'ClassRoom No:29,30,119,120', time: '10:00 AM – 4:00 PM', fee: '₹200', teamSize: 'Max 4',
    about: 'Virtuosic 2K26 is a National Level Project Exhibition Competition that provides a platform for students to showcase their innovative ideas and technical skills. The event encourages participants to present real-world problem-solving projects across domains like AI/ML, IoT, Web Development, and more. It aims to foster creativity, collaboration, and engineering excellence among students. Participants will get an opportunity to interact with experts and gain valuable exposure. This competition is designed to inspire future innovators and leaders in technology.',
    rules: ['Each team can have a maximum of 4 members.', 'Participants must belong to eligible departments (ELECT/EXTC, MECH/METX, COMP, CSE-AIML).', 'Each team must register by filling out the official registration form.', 'Projects must be original and not copied from existing work.', 'Teams should bring their own required setup (laptop, hardware, etc.).', 'Each team will be given a fixed time to present their project.', 'Judges\' decisions will be final and binding.', 'Misconduct or plagiarism will lead to disqualification.'],
    judging: [{ name: 'Innovation & Creativity', marks: 20 }, { name: 'Technical Implementation', marks: 20 }, { name: 'Practical Application', marks: 15 }, { name: 'Presentation & Explanation', marks: 15 }, { name: 'Problem-Solving Approach', marks: 15 }, { name: 'Teamwork & Clarity', marks: 15 }],
    prizes: [{ place: '1st', amount: '₹2500' }, { place: '2nd', amount: '₹1500' }, { place: '3rd', amount: '₹1000' }],
    resources: ['Table and display space for each team', 'Power supply (electricity)', 'Basic presentation setup', 'Certificates for participants', 'Judges panel for evaluation'],
    bannerTitle: 'INNOVATE • EXHIBIT',
    bannerSubtitle: 'Transforming Ideas into Impactful Solutions',
    coordinators: [
      { name: 'Uzair Shaikh', phone: '+91 86007 30728', email: '', photo: '' },
      { name: 'Vaishnavi Ghare', phone: '+91 93075 35959', email: 'vaishnavighare531@gmail.com', photo: 'profilephoto/vaishnavi-ghare.jpeg' }
    ],
    formUrl: 'https://forms.google.com',
    page: 'project-exhibition.html'
  },
  {
    id: 'debate', name: 'Debate', shortDesc: 'Argue, convince, dominate',
    description: 'Battle with words on trending tech and societal topics. Logic, facts, and charisma win.',
    icon: '🎤', accent: '#F59E0B',
    location: 'Seminar Hall No. 1', time: '2:00 PM – 5:00 PM', fee: '₹50', teamSize: '2',
    about: 'The Debate competition brings together articulate thinkers to argue on contemporary tech and social topics. Quick thinking, solid logic, and presentation skills are key.',
    rules: ['Teams of 2 members.', 'Topics revealed 15 min before.', 'Each side: 5 min argument + 2 min rebuttal.', 'English and Hindi both allowed.', 'No props or visual aids.', 'Personal attacks = disqualification.', 'Judge decision is final.'],
    judging: [{ name: 'Content & Logic', marks: 35 }, { name: 'Presentation', marks: 25 }, { name: 'Rebuttal', marks: 25 }, { name: 'Teamwork', marks: 15 }],
    coordinators: [{ name: 'Omkar Shet', phone: '+91 98765 43220', email: 'omkar@example.com' }, { name: 'Tanvi Kale', phone: '+91 98765 43221', email: 'tanvi@example.com' }],
    formUrl: 'https://forms.google.com',
    page: 'debate.html'
  },
  {
    id: 'directo', name: 'Directo', shortDesc: 'Direct a short film masterpiece',
    description: 'Create a compelling short film within the time limit. Storytelling, cinematography, and editing matter.',
    icon: '🎬', accent: '#EC4899',
    location: 'Seminar Hall No. 1', time: '9:00 AM – 5:00 PM', fee: '₹200', teamSize: '3–5',
    about: 'Directo is the ultimate short film competition. Teams receive a theme and must conceptualize, shoot, and edit a 3–5 minute short film within the event duration.',
    rules: ['Teams of 3–5 members.', 'Theme revealed at the start.', 'Film duration: 3–5 minutes (strict).', 'Any genre allowed.', 'Mobile or DSLR cameras only.', 'Background music must be royalty-free.', 'Submit final file in MP4 format.'],
    judging: [{ name: 'Story & Script', marks: 30 }, { name: 'Cinematography', marks: 25 }, { name: 'Editing', marks: 25 }, { name: 'Overall Impact', marks: 20 }],
    coordinators: [{ name: 'Aniket Raut', phone: '+91 98765 43222', email: 'aniket@example.com' }, { name: 'Shruti Patil', phone: '+91 98765 43223', email: 'shruti@example.com' }],
    formUrl: 'https://forms.google.com',
    page: 'directo.html'
  },
  {
    id: 'robotics', name: 'Robotics', shortDesc: 'Build, race, conquer the arena',
    description: 'Design and build a robot to navigate the obstacle course. Speed, precision, and engineering win.',
    icon: '🤖', accent: '#10B981',
    location: 'Corridor (Near Physics Lab)', time: '11:00 AM – 4:00 PM', fee: '₹200', teamSize: '1-2',
    about: 'The Robotics competition challenges teams to build a robot that can navigate a complex obstacle course in the shortest time. A true test of embedded systems and mechanical design.',
    rules: ['Teams of 2–4 members.', 'Robot max size: 30×30×30 cm.', 'Wired and wireless control both allowed.', 'Self-powered only (max 12V).', 'Three attempts — best time counts.', 'Damaging the arena = disqualification.', 'Ready-made kits not allowed.'],
    judging: [{ name: 'Completion Time', marks: 50 }, { name: 'Obstacle Clearance', marks: 30 }, { name: 'Robot Design', marks: 20 }],
    coordinators: [{ name: 'Vikram Jadhav', phone: '+91 98765 43214', email: 'vikram@example.com' }, { name: 'Ananya Parab', phone: '+91 98765 43215', email: 'ananya@example.com' }],
    formUrl: 'https://forms.google.com',
    page: 'robotics.html'
  },
  {
    id: 'poster-presentation', name: 'Poster Presentation', shortDesc: 'Visualize your research brilliantly',
    description: 'Present your research or project through a visually compelling poster. Clarity and creativity are key.',
    icon: '📊', accent: '#06B6D4',
    location: 'Classroom No. 121', time: '10:00 AM – 1:00 PM', fee: '₹80', teamSize: '1',
    about: 'Poster Presentation lets students communicate their research, ideas, or projects through a single visual poster. Judges evaluate clarity, visual quality, and knowledge depth.',
    rules: ['Teams of 1–3 members.', 'Poster size: A1 (594 × 841 mm).', 'Hand-made or digitally printed.', '5 min explanation + 3 min Q&A.', 'Any technical or research topic.', 'Must include abstract, methodology, conclusion.', 'Bring your own poster.'],
    judging: [{ name: 'Visual Design', marks: 25 }, { name: 'Content Depth', marks: 30 }, { name: 'Presentation', marks: 25 }, { name: 'Q&A', marks: 20 }],
    coordinators: [{ name: 'Manish Gawde', phone: '+91 98765 43216', email: 'manish@example.com' }, { name: 'Rutuja Naik', phone: '+91 98765 43217', email: 'rutuja@example.com' }],
    formUrl: 'https://forms.google.com',
    page: 'poster-presentation.html'
  },
  {
    id: 'lan-gaming', name: 'LAN Gaming', shortDesc: 'Dominate the virtual battleground',
    description: 'Compete in intense multiplayer LAN gaming tournaments. Reflexes, strategy, and teamwork decide the champion.',
    icon: '🎮', accent: '#EF4444',
    location: 'Classroom No: 101,102,103', time: '10:00 AM – 6:00 PM', fee: 'Respective to the event', teamSize: '4',
    about: 'LAN Gaming brings competitive esports to Virtuosic 2K26. Teams compete in popular multiplayer titles. Quick reflexes, team coordination, and strategy are essential.',
    rules: ['Teams of 4–5 members.', 'Game title announced before event.', 'Bring your own peripherals.', 'No cheats, hacks, or exploits.', 'Single elimination bracket.', 'Latecomers disqualified.', 'Admin decisions are final.'],
    judging: [{ name: 'Match Wins', marks: 60 }, { name: 'Sportsmanship', marks: 20 }, { name: 'Team Coordination', marks: 20 }],
    coordinators: [{ name: 'Vicky Rathod', phone: '+91 81692 22207', email: 'rathodvickey71@gmail.com', photo: 'profilephoto/vicky-rathod.jpeg' }],
    formUrl: 'https://forms.google.com',
    page: 'lan-gaming.html'
  },
  {
    id: 'hacksprint', name: 'HackSprint', shortDesc: '6-hour hackathon — build something epic',
    description: 'A fast-paced mini hackathon. Ideate, build, and pitch a working prototype in just 6 hours.',
    icon: '⚡', accent: '#A855F7',
    location: 'CAD Lab(M-206)', time: '10:00 AM – 4:00 PM', fee: '₹200', teamSize: '4',
    about: 'HackSprint is a concentrated 6-hour hackathon where teams ideate, develop, and present a working solution to a real-world problem. Bring your laptops, creativity, and caffeine.',
    rules: ['Teams of 2–4 members.', 'Theme announced at 10:00 AM.', 'Any tech stack allowed.', 'Pre-built code not permitted.', 'Must present a working demo.', 'Pitch: 5 min + 3 min Q&A.', 'Open-source libraries/APIs allowed.'],
    judging: [{ name: 'Innovation', marks: 30 }, { name: 'Technical Implementation', marks: 30 }, { name: 'UI/UX', marks: 20 }, { name: 'Pitch Quality', marks: 20 }],
    coordinators: [{ name: 'Rohan Deshmukh', phone: '+91 98765 43224', email: 'rohan@example.com' }, { name: 'Neha Kamat', phone: '+91 98765 43225', email: 'neha@example.com' }],
    formUrl: 'https://forms.google.com',
    page: 'hacksprint.html'
  },
  {
    id: 'auto-expo', name: 'Auto Expo', shortDesc: 'Showcase your automotive engineering',
    description: 'Display your modified vehicles, custom builds, or automotive engineering projects. Innovation meets horsepower.',
    icon: '🏎️', accent: '#F97316',
    location: 'College Ground', time: '9:00 AM – 5:00 PM', fee: '₹250', teamSize: '2–5',
    about: 'Auto Expo is the stage for automobile enthusiasts to showcase custom-built vehicles, modified bikes/cars, or innovative automotive projects. If it has wheels and engineering — it belongs here.',
    rules: ['Teams of 2–5 members.', 'Vehicles must be road-safe and functional.', 'Custom modifications must be documented.', 'Electric and IC engine both welcome.', '8 min presentation to judges.', 'Vehicles at venue by 9 AM.', 'Safety compliance mandatory.'],
    judging: [{ name: 'Innovation', marks: 30 }, { name: 'Engineering Quality', marks: 30 }, { name: 'Aesthetics', marks: 20 }, { name: 'Presentation', marks: 20 }],
    coordinators: [{ name: 'Tushar Sawant', phone: '+91 98765 43226', email: 'tushar@example.com' }, { name: 'Prachi Mane', phone: '+91 98765 43227', email: 'prachi@example.com' }],
    formUrl: 'https://forms.google.com',
    page: 'auto-expo.html'
  }
];

const CONTACT_DATA = {
  gs: {
    name: 'Vishnu Vejare',
    phone: '+91 84128 60728',
    email: 'vishnuvejare@gmail.com',
    initials: 'VV'
  },
  core: [
    {
      name: 'Uzair Abdulla Shaikh',
      event: 'Project Exhibition',
      phone: '+918600730728',
      email: 'uzairshaikh.2034@gmail.com',
      initials: 'US',
      photo: 'profilephoto/Uzair-Shaikh.jpeg'
    },
    {
      name: 'Vaishnavi Shivprasad Ghare',
      event: 'Project Exhibition',
      phone: '+919307535959',
      email: 'vaishnavighare531@gmail.com',
      initials: 'VG',
      photo: 'profilephoto/Vaishnavi-Ghare.jpeg'
    },
    {
      name: 'Jigisha Darshan Mhapasekar',
      event: 'Evolution',
      phone: '+919699424099',
      email: 'jigishadmhapasekar@gmail.com',
      initials: 'JM',
      photo: 'profilephoto/Jigisha-Mhapasekar.jpeg'
    },
    {
      name: 'Vasudev Santosh Narvekar',
      event: 'Evolution',
      phone: '+919420863918',
      email: 'vasudevnarvekar737@gmail.com',
      initials: 'VN',
      photo: 'profilephoto/Vasudev-Narvekar.jpeg'
    },
    {
      name: 'Sanika Suhas Sawant',
      event: 'Debate',
      phone: '+917208108501',
      email: 'sanikasawant1735@gmail.com',
      initials: 'SS',
      photo: 'profilephoto/Sanika-Sawant.jpeg'
    },
    {
      name: 'Xavier Agnel Fernandes',
      event: 'Debate',
      phone: '+919307863916',
      email: 'xavierfernandis276@gmail.com',
      initials: 'XF',
      photo: 'profilephoto/Xavier-Fernandes.png'
    },
    {
      name: 'Vicky Ishwar Rathod',
      event: 'LAN Gaming(Free-Fire)',
      phone: '+918169222207',
      email: 'rathodvickey71@gmail.com',
      initials: 'VR',
      photo: 'profilephoto/Vicky-Rathod.jpeg'
    },
    {
      name: 'Roshan Bhikaji Sawant',
      event: 'LAN Gaming (Mini Militia)',
      phone: '+919321658580',
      email: 'sawantroshan642@gmail.com',
      initials: 'RS',
      photo: 'profilephoto/Roshan-Sawant .jpeg'
    },
    {
      name: 'Danesh Parab',
      event: 'LAN Gaming (Mini Militia)',
      phone: '+919421536963',
      email: 'parabdanesh9@gmail.com',
      initials: 'DP',
      photo: 'profilephoto/Danesh-Parab.jpeg'
    },
    {
      name: 'Maaz AbuTalib Khan',
      event: 'BGMI LAN',
      phone: '+9193325579949',
      email: 'khanmaaz7684@gmail.com',
      initials: 'MK',
      photo: 'profilephoto/Maaz-Khan.jpeg'
    },
    {
      name: 'Kamakshi Rajendra Keluskar',
      event: 'Poster Presentation',
      phone: '+918149584764',
      email: 'kamakshikeluskar@gmail.com',
      initials: 'KK',
      photo: 'profilephoto/Kamakshi-Keluskar.jpeg'
    },
    {
      name: 'Bhargawi Sanjay Kavatkar',
      event: 'Poster Presentation',
      phone: '+9196997020262',
      email: 'bhargawikavatkar@gmail.com',
      initials: 'BK',
      photo: 'profilephoto/Bhargawi-Kavatkar.jpeg'
    },
    {
      name: 'Govind Mahesh Sawant',
      event: 'Robotics',
      phone: '+919421287164',
      email: 'sawantgovind76@gmail.com',
      initials: 'GS',
      photo: 'profilephoto/Govind-Sawant.jpeg'
    },
    {
      name: 'Mufid Rizwan Shaikh',
      event: 'Auto Expo',
      phone: '+919561941586',
      email: 'mufidshaikh9421145786@gmail.com',
      initials: 'MS',
      photo: 'profilephoto/Mufid-Shaikh .jpeg'
    },
    {
      name: 'Rahul Narayan Gawas',
      event: 'Auto Expo',
      phone: '+917038683384',
      email: 'rahulgawas790@gmail.com',
      initials: 'RG',
      photo: 'profilephoto/Rahul-Gawas.jpeg'
    },
    {
      name: 'Sanika Shashikant Mhatugade',
      event: 'Ladies Representative',
      phone: '+917774010816',
      email: 'sanumhatugade2411@gmail.com',
      initials: 'SM',
      photo: 'profilephoto/Sanika-Mhatugade.jpeg'
    },
    {
      name: 'Narendra Ratnakar Gurav',
      event: 'HackSprint',
      phone: '+919137663880',
      email: 'narendragurav2005@gmail.com',
      initials: 'NG',
      photo: 'profilephoto/Narendra-Gurav.jpg'
    },
    {
      name: 'Rajas Taneshwar Gawas',
      event: 'HackSprint',
      phone: '+919890959211',
      email: 'narendragurav2005@gmail.com',
      initials: 'RG',
      photo: 'profilephoto/Rajas-Gawas.jpeg'
    },
    {
      name: 'Varun Prabhakar Karle',
      event: 'Cultural Co-ordinator',
      phone: '+91 95296 65461',
      email: 'karlevarun@gmail.com',
      initials: 'VK',
      photo: 'profilephoto/Varun-Karle.jpeg'
    },
    {
      name: 'Anushka Pandurang Sawant',
      event: 'Directo',
      phone: '+91 93569 70062',
      email: 'anushka.s9642@gmail.com',
      initials: 'AS',
      photo: 'profilephoto/Anushka-Sawant.jpeg'
    },
    {
      name: 'Pallavi Parashram Varake',
      event: 'Directo',
      phone: '+91 80103 16075',
      email: 'pallavivarake6075@gmail.com',
      initials: 'AS',
      photo: 'profilephoto/Pallavi-Varake.jpeg'
    }
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

  function flipCard(cardId, newVal) {
    const card = document.getElementById('flip-' + cardId);
    if (!card) return;
    const oldVal = prevValues[cardId];
    if (oldVal === newVal) return;
    prevValues[cardId] = newVal;

    const topNum = document.getElementById(cardId);
    const botNum = document.getElementById(cardId + '-bot');
    const inner = card.querySelector('.flip-card-inner');

    // Clean up any existing flip panels — finish the previous flip instantly
    const oldPanels = inner.querySelectorAll('.flip-panel');
    if (oldPanels.length > 0) {
      // Complete previous flip: sync BOTH halves to whatever prevValues was before this call
      if (topNum) topNum.textContent = oldVal;
      if (botNum) botNum.textContent = oldVal;
      oldPanels.forEach(el => el.remove());
    }

    // 1. Static BOTTOM stays on OLD value (will be revealed when top folds down)
    if (botNum) botNum.textContent = oldVal;

    // 2. Flip-top panel: covers the top half, shows OLD value, then folds downward
    //    When it folds away, it reveals the NEW value underneath
    const panelTop = document.createElement('div');
    panelTop.className = 'flip-panel flip-panel-top';
    panelTop.innerHTML = `<span class="flip-num">${oldVal}</span>`;
    inner.appendChild(panelTop);

    // 3. Update static TOP to NEW value (hidden behind the flip-top panel)
    if (topNum) topNum.textContent = newVal;

    // 4. Flip-bottom panel: shows NEW value, unfolds from top (after top finishes folding)
    const panelBot = document.createElement('div');
    panelBot.className = 'flip-panel flip-panel-bottom';
    panelBot.innerHTML = `<span class="flip-num">${newVal}</span>`;
    inner.appendChild(panelBot);

    // 5. After full animation, update static bottom to NEW and clean up
    setTimeout(() => {
      if (botNum) botNum.textContent = newVal;
      panelTop.remove();
      panelBot.remove();
    }, 600);
  }

  function getTimeValues() {
    const diff = target - Date.now();
    if (diff <= 0) return null;
    return {
      days: String(Math.floor(diff / 86400000)).padStart(2, '0'),
      hours: String(Math.floor((diff % 86400000) / 3600000)).padStart(2, '0'),
      minutes: String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0'),
      seconds: String(Math.floor((diff % 60000) / 1000)).padStart(2, '0'),
    };
  }

  function tick() {
    const vals = getTimeValues();
    if (!vals) {
      el.classList.add('hidden');
      if (live) { live.classList.remove('hidden'); live.classList.add('flex'); }
      return;
    }
    flipCard('days', vals.days);
    flipCard('hours', vals.hours);
    flipCard('minutes', vals.minutes);
    flipCard('seconds', vals.seconds);
  }

  // ── Startup: slot-machine spin then sequential settle ──
  function startupAnimation() {
    const actual = getTimeValues();
    if (!actual) { tick(); return; }

    // Reset all to 00
    const ids = ['days', 'hours', 'minutes', 'seconds'];
    ids.forEach(id => {
      prevValues[id] = '00';
      const top = document.getElementById(id);
      const bot = document.getElementById(id + '-bot');
      if (top) top.textContent = '00';
      if (bot) bot.textContent = '00';
    });

    // ── Phase 1: ALL cards spin simultaneously with random numbers ──
    const spinIntervals = {};
    ids.forEach(id => {
      spinIntervals[id] = setInterval(() => {
        const rand = String(Math.floor(Math.random() * 60)).padStart(2, '0');
        flipCard(id, rand);
      }, 140); // Flips fast but gives animation time to fold
    });

    // ── Phase 2: Settle one by one after spin phase ──
    const spinDuration = 1800; // Spin for 1.8 seconds
    const settleDelay = 500;   // Gap between each card settling
    const actualVals = { days: actual.days, hours: actual.hours, minutes: actual.minutes, seconds: actual.seconds };

    setTimeout(() => {
      // Stop & settle each card sequentially: days → hours → mins → secs
      ids.forEach((id, idx) => {
        setTimeout(() => {
          // Stop the spin for this card
          clearInterval(spinIntervals[id]);

          // Quick deceleration: 4 slower flips then land on real value
          const finalVal = actualVals[id];
          let slowStep = 0;
          const slowFlips = 4;
          const slowInterval = setInterval(() => {
            slowStep++;
            if (slowStep < slowFlips) {
              // Decelerating random flips
              const rand = String(Math.floor(Math.random() * 60)).padStart(2, '0');
              flipCard(id, rand);
            } else {
              // Final: land on actual value
              clearInterval(slowInterval);
              flipCard(id, finalVal);

              // If last card settled, start normal countdown
              if (id === 'seconds') {
                setTimeout(() => {
                  tick();
                  setInterval(tick, 1000);
                }, 600);
              }
            }
          }, 180 + (slowStep * 40)); // Each flip gets slower
        }, idx * settleDelay); // Stagger: 0ms, 500ms, 1000ms, 1500ms
      });
    }, spinDuration);
  }

  // Start with the spin intro
  setTimeout(startupAnimation, 300);
}


/* ═══ FULL-SCREEN EXPAND PAGE TRANSITION ═══ */
function expandToPage(url, originEl) {
  const overlay = document.getElementById('page-expand') || createExpandOverlay();
  const circle = overlay.querySelector('#expand-circle') || overlay.firstElementChild;
  overlay.style.display = 'block';

  // Get origin point — center of the clicked element or center of viewport
  let cx = window.innerWidth / 2;
  let cy = window.innerHeight / 2;
  if (originEl) {
    const rect = originEl.getBoundingClientRect();
    cx = rect.left + rect.width / 2;
    cy = rect.top + rect.height / 2;
  }

  // Calculate the diameter needed to cover the entire viewport
  const maxDist = Math.max(
    Math.hypot(cx, cy),
    Math.hypot(window.innerWidth - cx, cy),
    Math.hypot(cx, window.innerHeight - cy),
    Math.hypot(window.innerWidth - cx, window.innerHeight - cy)
  ) * 2 + 50;

  circle.style.width = maxDist + 'px';
  circle.style.height = maxDist + 'px';
  circle.style.left = (cx - maxDist / 2) + 'px';
  circle.style.top = (cy - maxDist / 2) + 'px';
  circle.style.transform = 'scale(0)';

  // Fade out content
  const content = document.querySelector('.mobile-frame');
  if (content) content.classList.add('fade-out-content');

  // Expand circle
  requestAnimationFrame(() => {
    circle.style.transform = 'scale(1)';
  });

  setTimeout(() => { window.location.href = url; }, 550);
}

function createExpandOverlay() {
  const overlay = document.createElement('div');
  overlay.id = 'page-expand';
  overlay.className = 'fixed inset-0 z-[9999] pointer-events-none';
  overlay.style.display = 'none';
  overlay.innerHTML = '<div id="expand-circle" class="absolute rounded-full bg-black" style="transform:scale(0);transition:transform 0.6s cubic-bezier(0.4,0,0.2,1);"></div>';
  document.body.appendChild(overlay);
  return overlay;
}


/* ═══ COMPETITION CARDS — Full Card Click with Expand ═══ */
function renderCompetitionCards() {
  const grid = document.getElementById('comp-grid');
  if (!grid) return;

  grid.innerHTML = EVENTS_DATA.map(ev => {
    const targetPage = ev.page || `event.html?id=${ev.id}`;
    return `
    <div class="glass-card rounded-2xl p-6 cursor-pointer relative group"
         style="border-top: 2px solid ${ev.accent}; box-shadow: 0 -4px 20px ${ev.accent}33, inset 0 1px 0 ${ev.accent}22;"
         onclick="expandToPage('${targetPage}', this)">
      <div class="flex items-start gap-4 mb-5">
        <div class="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shrink-0"
             style="background: ${ev.accent}15; border: 1px solid ${ev.accent}30;">
          ${ev.icon}
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="font-outfit text-xl font-extrabold tracking-tight mb-1 uppercase" style="color: ${ev.accent};">${ev.name}</h3>
          <p class="text-sm text-zinc-500 leading-snug">${ev.shortDesc}</p>
        </div>
        <svg class="w-5 h-5 transition-all duration-300 group-hover:translate-x-1 shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="${ev.accent}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
      <div class="flex items-center gap-2 flex-wrap mb-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold font-space uppercase tracking-wider" style="background: ${ev.accent}0D; border: 1px solid ${ev.accent}22; color: ${ev.accent};">📍 ${ev.location}</span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/[0.06] border border-cyan-500/[0.12] text-cyan-300 text-[11px] font-bold font-space uppercase tracking-wider">⏰ ${ev.time}</span>
      </div>
      <div class="flex items-center gap-2 flex-wrap">
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/[0.06] border border-emerald-500/[0.12] text-emerald-300 text-[11px] font-bold font-space uppercase tracking-wider">💰 ${ev.fee}</span>
        <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/[0.06] border border-amber-500/[0.12] text-amber-300 text-[11px] font-bold font-space uppercase tracking-wider">👥 Team: ${ev.teamSize}</span>
      </div>
      <button class="w-full mt-5 py-3.5 rounded-xl font-outfit font-black text-xs uppercase tracking-[3px] active:scale-95 transition-transform"
              style="background: ${ev.accent}; color: #000; box-shadow: 0 0 20px ${ev.accent}44, 0 0 50px ${ev.accent}18;"
              onclick="event.stopPropagation(); expandToPage('${targetPage}', this)">
        Initiate Access →
      </button>
    </div>
  `;
  }).join('');
}


/* ═══ EVENT PAGE — Quantexera Style ═══ */
function initEventPage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id) return;
  const ev = EVENTS_DATA.find(e => e.id === id);
  if (!ev) return;

  document.getElementById('event-title').textContent = ev.name;
  document.getElementById('event-desc').textContent = ev.description;

  // Banner description
  const bannerDesc = document.getElementById('event-banner-desc');
  if (bannerDesc) bannerDesc.textContent = ev.description;

  // Info blocks — Quantexera style with colored icons
  const infos = [
    { icon: '📍', label: 'Location', value: ev.location, borderColor: 'border-purple-500/20', bg: 'bg-purple-500/[0.03]' },
    { icon: '💰', label: 'Entry Fee', value: ev.fee, borderColor: 'border-cyan-500/20', bg: 'bg-cyan-500/[0.03]' },
    { icon: '👥', label: 'Team Size', value: ev.teamSize, borderColor: 'border-amber-500/20', bg: 'bg-amber-500/[0.03]' }
  ];
  document.getElementById('info-blocks').innerHTML = infos.map(i => `
    <div class="flex-shrink-0 rounded-xl p-5 min-w-[140px] ${i.bg} border ${i.borderColor} backdrop-blur-sm">
      <div class="text-2xl mb-3">${i.icon}</div>
      <div class="font-space text-[9px] text-zinc-600 uppercase tracking-[2px] font-bold mb-1">${i.label}</div>
      <div class="font-outfit text-lg font-extrabold text-white">${i.value}</div>
    </div>
  `).join('');

  // About
  document.getElementById('event-about').textContent = ev.about;

  // Rules — Quantexera numbered grid boxes
  document.getElementById('event-rules').innerHTML = ev.rules.map((r, i) => `
    <div class="glass-card rounded-xl p-4 flex gap-4 items-start">
      <span class="rule-number text-lg font-extrabold shrink-0 w-8">${String(i + 1).padStart(2, '0')}</span>
      <p class="text-sm text-zinc-400 leading-relaxed">${r}</p>
    </div>
  `).join('');

  // Judging — Progress bars (Quantexera style)
  const total = ev.judging.reduce((s, j) => s + j.marks, 0);
  document.getElementById('event-judging').innerHTML = ev.judging.map(j => `
    <div>
      <div class="flex justify-between items-center mb-2">
        <span class="text-sm font-semibold text-zinc-300">${j.name}</span>
        <span class="font-outfit text-sm font-bold text-cyan-400">${j.marks}</span>
      </div>
      <div class="h-2.5 bg-white/[0.04] rounded-full overflow-hidden">
        <div class="h-full rounded-full bg-gradient-to-r from-purple-600 to-cyan-400 bar-fill" style="width:0%;" data-w="${(j.marks / total * 100)}%"
             onload=""></div>
      </div>
    </div>
  `).join('') + `
    <div class="flex justify-between items-center pt-5 mt-3 border-t border-white/[0.06]">
      <span class="font-outfit text-lg font-black text-white uppercase tracking-wide">Total</span>
      <span class="font-outfit text-lg font-black text-glow">${total} Marks</span>
    </div>
  `;
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(b => { b.style.width = b.dataset.w; });
  }, 500);

  // Coordinators — Same style as "The Core" cards
  document.getElementById('event-coordinators').innerHTML = ev.coordinators.map((c, i) => {
    const isReversed = i % 2 !== 0;
    return `
      <div class="glass-card rounded-2xl p-4 flex items-center gap-5 ${isReversed ? 'flex-row-reverse' : ''} border-gradient">
        <img src="${c.photo || 'profilephoto/Narendra-gurav.jpg'}" alt="${c.name}"
             class="w-32 h-32 rounded-2xl object-cover shrink-0 neon-purple">
        <div class="flex-1 min-w-0 text-left">
          <h4 class="font-outfit text-xl font-bold text-white mb-1 tracking-tight">${c.name}</h4>
          <p class="font-space text-[10px] text-cyan-400 font-bold uppercase tracking-[2px] mb-2">Coordinator</p>
          <a href="tel:${c.phone}" class="block text-[11px] text-zinc-500 mb-0.5 hover:text-cyan-400 transition-colors">📱 ${c.phone}</a>
          <a href="mailto:${c.email}" class="block text-[11px] text-zinc-500 break-all hover:text-purple-400 transition-colors">✉️ ${c.email}</a>
        </div>
      </div>
    `;
  }).join('');

  const btn = document.getElementById('floating-register');
  if (btn) btn.onclick = () => window.open(ev.formUrl, '_blank');
}


//* ═══ CONTACT PAGE ═══ */
function renderContactPage() {
  const gsEl = document.getElementById('gs-section');
  if (gsEl) {
    const gs = CONTACT_DATA.gs;
    gsEl.innerHTML = `
      <img src="profilephoto/Vishnu-vejare.jpeg" alt="${gs.name}" class="w-full max-w-[280px] aspect-square rounded-2xl object-cover mb-6 neon-purple" style="box-shadow: 0 0 40px rgba(124,58,237,0.35), 0 20px 60px rgba(0,0,0,0.5);">
      <h3 class="font-outfit text-2xl font-extrabold text-white mb-3 tracking-tight">${gs.name}</h3>
      <a href="tel:${gs.phone}" class="flex items-center gap-2.5 text-base text-cyan-400 hover:text-cyan-300 transition-colors mb-2">
        📱 ${gs.phone}
      </a>
      <a href="mailto:${gs.email}" class="flex items-center gap-2.5 text-sm text-zinc-500 hover:text-purple-400 transition-colors">
        ✉️ ${gs.email}
      </a>
    `;
  }

  const coreEl = document.getElementById('core-grid');
  if (coreEl) {
    coreEl.innerHTML = CONTACT_DATA.core.map((m, i) => {
      const isReversed = i % 2 !== 0;

      return `
        <div class="glass-card rounded-2xl p-4 flex items-center gap-5 ${isReversed ? 'flex-row-reverse' : ''} border-gradient">

          ${m.photo
          ? `<img src="${m.photo}" alt="${m.name}"
                 class="w-32 h-32 rounded-2xl object-cover shrink-0 neon-purple">`
          : `<div class="w-32 h-32 rounded-2xl flex items-center justify-center bg-zinc-800 text-white text-2xl font-bold neon-purple">
                 ${m.initials}
               </div>`
        }

          <div class="flex-1 min-w-0 text-left">
            <h4 class="font-outfit text-xl font-bold text-white mb-1 tracking-tight">${m.name}</h4>
            <p class="font-space text-[10px] text-cyan-400 font-bold uppercase tracking-[2px] mb-2">${m.event}</p>
            <p class="text-[11px] text-zinc-500 mb-0.5">📱 ${m.phone}</p>
            <p class="text-[11px] text-zinc-500 break-all">✉️ ${m.email || '-'}</p>
          </div>

        </div>
      `;
    }).join('');
  }
}


/* ═══ SOCIAL PAGE ═══ */
function renderSocialPage() {
  const container = document.getElementById('social-links');
  if (!container) return;
  const icons = {
    instagram: '<svg viewBox="0 0 24 24" fill="white" class="w-7 h-7"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="white" class="w-7 h-7"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="white" class="w-7 h-7"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    website: '<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>'
  };
  const grads = { instagram: 'from-pink-500 via-purple-500 to-orange-400', website: 'from-sky-500 to-cyan-400' };

  container.innerHTML = SOCIAL_DATA.map(s => `
    <a href="${s.url}" target="_blank" rel="noopener"
       class="glass-card rounded-2xl p-5 flex items-center gap-5 group border-gradient">
      <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${grads[s.iconClass]} flex items-center justify-center shrink-0 shadow-lg">
        ${icons[s.iconClass]}
      </div>
      <div class="flex-1">
        <h3 class="font-outfit text-lg font-bold text-white tracking-tight mb-0.5">${s.platform}</h3>
        <p class="text-sm text-zinc-600">${s.handle}</p>
      </div>
      <svg class="w-5 h-5 text-zinc-700 group-hover:text-purple-400 transition-all duration-300 group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </a>
  `).join('');
}


/* ═══ INIT ═══ */
document.addEventListener('DOMContentLoaded', () => {
  generateStars();
  initCountdown();
  renderCompetitionCards();
  initEventPage();
  renderContactPage();
  renderSocialPage();

  setTimeout(animateStats, 500); // smooth start after load
});

/* ═══ BFCache Blackout Fix ═══ */
window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    const overlay = document.getElementById('page-expand');
    if (overlay) overlay.style.display = 'none';

    const content = document.querySelector('.mobile-frame');
    if (content) content.classList.remove('fade-out-content');
  }
});
const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navTeam: "Team",
    navContact: "Contact",

    heroTitle: "Just Do",
    heroSubtitle: "Fast and reliable logistics solutions.",

    aboutTitle: "Who we are",
    aboutP1: "We are a logistics company dedicated to fast, safe, and affordable transport across Europe.",
    aboutP2: "With years of experience and a reliable fleet, we make sure your cargo arrives on time.",

    servicesTitle: "Our Services",
    service1Title: "International Shipping",
    service1Desc: "Efficient cross-border freight delivery.",
    service2Title: "Express Delivery",
    service2Desc: "Speedy shipments within 24-48 hours.",

    teamTitle: "Our Team",
    teamDesc: "Meet the dedicated professionals behind Just Do.",

    contactTitle: "Contact Us",
    contactEmailBtn: "✉️ Write to us",
    contactEmail: "Email: contact@justdo.com",
    contactPhone: "Phone: +48 123 456 789",
    contactAddress: "Address: Warsaw, Poland",
    contactSocials: 'Socials: <a href="#" class="text-blue-600">Facebook</a>, <a href="#" class="text-blue-600">Instagram</a>',
  },
  pl: {
    navHome: "Strona główna",
    navAbout: "O nas",
    navServices: "Usługi",
    navTeam: "Zespół",
    navContact: "Kontakt",

    heroTitle: "Just Do",
    heroSubtitle: "Szybkie i niezawodne rozwiązania logistyczne.",

    aboutTitle: "Kim jesteśmy",
    aboutP1: "Jesteśmy firmą logistyczną, która oferuje szybki, bezpieczny i przystępny transport po całej Europie.",
    aboutP2: "Dzięki wieloletniemu doświadczeniu i niezawodnej flocie, dbamy o to, aby Twoje ładunki dotarły na czas.",

    servicesTitle: "Nasze Usługi",
    service1Title: "Transport międzynarodowy",
    service1Desc: "Efektywna dostawa towarów przez granice.",
    service2Title: "Ekspresowa dostawa",
    service2Desc: "Szybka wysyłka w ciągu 24-48 godzin.",

    teamTitle: "Nasz zespół",
    teamDesc: "Poznaj oddanych profesjonalistów stojących za Just Do.",

    contactTitle: "Kontakt",
    contactEmailBtn: "✉️ Napisz do nas",
    contactEmail: "Email: contact@justdo.com",
    contactPhone: "Telefon: +48 123 456 789",
    contactAddress: "Adres: Warszawa, Polska",
    contactSocials: 'Social: <a href="#" class="text-blue-600">Facebook</a>, <a href="#" class="text-blue-600">Instagram</a>',
  },
  ua: {
    navHome: "Головна",
    navAbout: "Про нас",
    navServices: "Послуги",
    navTeam: "Команда",
    navContact: "Контакти",

    heroTitle: "Just Do",
    heroSubtitle: "Швидкі та надійні логістичні рішення.",

    aboutTitle: "Хто ми",
    aboutP1: "Ми — логістична компанія, що пропонує швидкий, безпечний та доступний транспорт по всій Європі.",
    aboutP2: "Завдяки багаторічному досвіду та надійному автопарку, ми гарантуємо своєчасну доставку вашого вантажу.",

    servicesTitle: "Наші послуги",
    service1Title: "Міжнародні перевезення",
    service1Desc: "Ефективна доставка вантажів через кордони.",
    service2Title: "Експрес-доставка",
    service2Desc: "Швидке відправлення протягом 24-48 годин.",

    teamTitle: "Наша команда",
    teamDesc: "Познайомтесь із відданими професіоналами Just Do.",

    contactTitle: "Контакти",
    contactEmailBtn: "✉️ Напишіть нам",
    contactEmail: "Ел. пошта: contact@justdo.com",
    contactPhone: "Телефон: +48 123 456 789",
    contactAddress: "Адреса: Варшава, Польща",
    contactSocials: 'Соцмережі: <a href="#" class="text-blue-600">Facebook</a>, <a href="#" class="text-blue-600">Instagram</a>',
  }
};


// Updates all text elements according to the selected language
function updateLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  // Save selected language
  localStorage.setItem('selectedLanguage', lang);

  // Navigation
  document.getElementById('nav-home').textContent = t.navHome;
  document.getElementById('nav-about').textContent = t.navAbout;
  document.getElementById('nav-services').textContent = t.navServices;
  document.getElementById('nav-team').textContent = t.navTeam;
  document.getElementById('nav-contact').textContent = t.navContact;

  // Hero section
  document.getElementById('hero-title').textContent = t.heroTitle;
  document.getElementById('hero-subtitle').textContent = t.heroSubtitle;

  // About section
  document.getElementById('about-title').textContent = t.aboutTitle;
  document.getElementById('about-p1').textContent = t.aboutP1;
  document.getElementById('about-p2').textContent = t.aboutP2;

  // Services
  document.getElementById('services-title').textContent = t.servicesTitle;
  document.getElementById('service1-title').textContent = t.service1Title;
  document.getElementById('service1-desc').textContent = t.service1Desc;
  document.getElementById('service2-title').textContent = t.service2Title;
  document.getElementById('service2-desc').textContent = t.service2Desc;

  // Team
  document.getElementById('team-title').textContent = t.teamTitle;
  document.getElementById('team-desc').textContent = t.teamDesc;

  // Contact
  document.getElementById('contact-title').textContent = t.contactTitle;
  document.getElementById('contact-email-btn').textContent = t.contactEmailBtn;
  document.getElementById('contact-email').textContent = t.contactEmail;
  document.getElementById('contact-phone').textContent = t.contactPhone;
  document.getElementById('contact-address').textContent = t.contactAddress;
  document.getElementById('contact-socials').innerHTML = t.contactSocials;

  // Update the selector to match current language
  document.getElementById('language').value = lang;
}

// Detect and apply preferred or stored language
function detectLanguage() {
  const storedLang = localStorage.getItem('selectedLanguage');
  if (storedLang && translations[storedLang]) {
    return storedLang;
  }

  const browserLangs = navigator.languages.map(l => l.slice(0, 2).toLowerCase());
  if (browserLangs.includes('ua') || browserLangs.includes('uk')) {
    return 'ua';
  } else if (browserLangs.includes('pl')) {
    return 'pl';
  } else {
    return 'en';
  }
}

// Handle manual language selection
document.getElementById('language').addEventListener('change', (e) => {
  const selected = e.target.value;
  updateLanguage(selected);
});

// Hide search input when clicking outside
document.addEventListener('click', function (e) {
  const input = document.getElementById('pageSearch');
  if (!input.classList.contains('hidden') && e.target !== input) {
    hideSearchInput();
  }
});

// Initialize
const initialLang = detectLanguage();
updateLanguage(initialLang);


const themeToggleBtn = document.getElementById('theme-toggle');

const sunIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
       stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
`;

const moonIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" 
       stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
    <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>
  </svg>
`;

// Read saved theme from localStorage or default to system preference
let currentTheme = localStorage.getItem('theme');

if (!currentTheme) {
  // If no saved theme, detect system preference
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  currentTheme = prefersLight ? 'theme-light' : 'theme-dark';
}

function applyTheme(theme) {
  document.body.classList.remove('theme-dark', 'theme-light');
  document.body.classList.add(theme);
  localStorage.setItem('theme', theme);

  // Change icon depending on theme
  if (theme === 'theme-dark') {
    themeToggleBtn.innerHTML = sunIcon;  // Sun icon to switch to light
  } else {
    themeToggleBtn.innerHTML = moonIcon; // Moon icon to switch to dark
  }
}

// Initial apply
applyTheme(currentTheme);

themeToggleBtn.addEventListener('click', () => {
  if (currentTheme === 'theme-dark') {
    currentTheme = 'theme-light';
  } else {
    currentTheme = 'theme-dark';
  }
  applyTheme(currentTheme);
});
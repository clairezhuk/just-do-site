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


function updateLanguage(lang) {
  const t = translations[lang];

  // Update navigation links
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
}



document.getElementById('language').addEventListener('change', (e) => {
  updateLanguage(e.target.value);
});

// Ініціалізуємо початкову мову
const browserLang = navigator.language || navigator.userLanguage;
const langCode = browserLang.slice(0, 2).toLowerCase();

if (langCode === 'uk') {
  updateLanguage('uk');
} else if (langCode === 'pl') {
  updateLanguage('pl');
} else {
  updateLanguage('en');
}



function triggerSearch() {
  const input = document.getElementById('pageSearch');
  input.classList.remove('hidden');
  input.focus();

    // При введенні тексту — підсвічуємо збіги
  input.onkeydown = (e) => {
    if (e.key === 'Enter') {
      clearHighlights();
      const query = input.value.trim();
      if (query.length > 2) {
        highlightText(query);
      }
    } else if (e.key === 'Escape') {
      hideSearchInput();
    }
  };

    // При натисканні Escape ховаємо поле і очищаємо підсвітку
    input.onkeydown = (e) => {
      if (e.key === 'Escape') {
        input.classList.add('hidden');
        input.value = '';
        clearHighlights();
      }
    };
  }

function highlightText(text) {
  if (!text) return;
  const regex = new RegExp(text, 'gi');
  const bodyText = document.body.innerHTML;

  document.body.innerHTML = bodyText.replace(regex, match => `<mark>${match}</mark>`);
}

function clearHighlights() {
  document.querySelectorAll('mark').forEach(el => {
    el.replaceWith(el.textContent);
  });
}

function hideSearchInput() {
  const input = document.getElementById('pageSearch');
  input.classList.add('hidden');
  input.value = '';
  clearHighlights();
}

document.addEventListener('click', function (e) {
  const input = document.getElementById('pageSearch');
  if (!input.classList.contains('hidden') && e.target !== input) {
    hideSearchInput();
  }
});



// MENÚ MÓVIL
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
  });
});

// ACORDEÓN PROGRAMA
document.querySelectorAll(".accordion-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const day = button.parentElement;
    day.classList.toggle("active");
  });
});

// PRECIO AUTOMÁTICO POR FECHA
const today = new Date();

const phases = [
  { id: "phase1", name: "Fase 1", price: "80 €",  start: new Date("2026-04-30"), end: new Date("2026-06-03") },
  { id: "phase2", name: "Fase 2", price: "135 €", start: new Date("2026-06-04"), end: new Date("2026-07-08") },
  { id: "phase3", name: "Fase 3", price: "190 €", start: new Date("2026-07-09"), end: new Date("2026-08-12") }
];

const currentPrice = document.getElementById("currentPrice");
const pricePhase = document.getElementById("pricePhase");

function updateTicketPrice() {
  let activePhase = phases[0];
  phases.forEach((phase) => {
    if (today >= phase.start && today <= phase.end) activePhase = phase;
  });

  if (currentPrice) currentPrice.textContent = activePhase.price;
  if (pricePhase) pricePhase.textContent = activePhase.name;

  phases.forEach((phase) => {
    const el = document.getElementById(phase.id);
    if (el) el.classList.remove("active");
  });

  const activeEl = document.getElementById(activePhase.id);
  if (activeEl) activeEl.classList.add("active");
}

updateTicketPrice();

// MAPA INTERACTIVO
const mapButtons = document.querySelectorAll(".map-point");
const mapInfo = document.getElementById("mapInfo");

mapButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.dataset.title;
    const text = button.dataset.text;
    mapInfo.innerHTML = `<h3>${title}</h3><p>${text}</p>`;
    mapButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
  });
});

// HEADER
const siteHeader = document.querySelector(".site-header");

function handleHeader() {
  if (window.innerWidth <= 767) {
    siteHeader.classList.add("visible");
  } else {
    if (window.scrollY > 80) {
      siteHeader.classList.add("visible");
    } else {
      siteHeader.classList.remove("visible");
    }
  }
}

handleHeader();
window.addEventListener("scroll", handleHeader);
window.addEventListener("resize", handleHeader);

// ── DROPDOWN IDIOMA MÓVIL ──────────────────────────────────────
const langSwitcher = document.querySelector(".language-switcher");

langSwitcher.addEventListener("click", (e) => {
  // Solo actúa en móvil
  if (window.innerWidth > 767) return;

  const clickedBtn = e.target.closest(".lang-btn");
  if (!clickedBtn) return;

  // Si está cerrado, abrir (el botón activo hace de trigger)
  if (!langSwitcher.classList.contains("open")) {
    e.stopPropagation();
    langSwitcher.classList.add("open");
    return;
  }

  // Si está abierto, cerrar tras seleccionar idioma
  langSwitcher.classList.remove("open");
});

// Cierra el dropdown al hacer clic fuera
document.addEventListener("click", () => {
  langSwitcher.classList.remove("open");
});

// Cierra también si se abre el menú nav (y viceversa)
menuToggle.addEventListener("click", () => {
  langSwitcher.classList.remove("open");
});

// ── TRADUCCIONES ───────────────────────────────────────────────
const translations = {
  es: {
  nav_eclipse: "El eclipse",
  nav_programa: "Programa",
  nav_entradas: "Entradas",
  nav_mapa: "Mapa",
  nav_seguridad: "Seguridad",
  nav_contacto: "FAQ",

  hero_kicker: "✦ FESTIVAL ASTRONÓMICO ✦",
  hero_subtitle: "ASTRONOMÍA + MÚSICA + NATURALEZA",
  hero_text: "Un encuentro único bajo el cielo, ven a ver el eclipse y disfruta de una experiencia inolvidable.",
  hero_btn_tickets: "ENTRADAS PRÓXIMAMENTE",
  hero_btn_program: "Ver programa",
  hero_card_date: "11 - 14<br>Agosto 2026",
  hero_card_location: "Gargallo<br>Teruel",
  hero_card_tickets: "Entradas",
  hero_card_soon: "Ticketmaster",

  summary_eclipse_title: "Eclipse",
  summary_eclipse_text: "Sé testigo de un eclipse total de Sol desde una ubicación privilegiada.",
  summary_camping_title: "Camping",
  summary_camping_text: "Zona de acampada en plena naturaleza para vivir el festival.",
  summary_music_title: "Música",
  summary_music_text: "Conciertos y sesiones para disfrutar bajo las estrellas.",
  summary_nature_title: "Naturaleza",
  summary_nature_text: "Rutas, talleres y actividades para conectar con el entorno.",

  eclipse_kicker: "12 de agosto de 2026",
  eclipse_title: "El eclipse total de Sol de 2026",
  eclipse_text_1: "Ekleipsis Fest nace para vivir uno de los fenómenos astronómicos más impresionantes: un eclipse total de Sol. Gargallo, Teruel, se encuentra dentro de la franja de totalidad, una zona privilegiada para contemplar el momento en el que el día se convierte en noche.",
  eclipse_text_2: "La experiencia se completa con observación guiada, divulgación astronómica, actividades familiares, música, Perseidas y una conexión directa con el territorio.",

  eclipse_highlight_1_value: "100%",
  eclipse_highlight_1_label: "ZONA DE TOTALIDAD",
  eclipse_highlight_2_value: "OPEN SKY",
  eclipse_highlight_2_label: "HORIZONTE SIN OBSTÁCULOS",
  eclipse_highlight_3_value: "2026",
  eclipse_highlight_3_label: "EVENTO IRREPETIBLE",

  map_title: "Mapa de totalidad",
  map_location: "Gargallo · Teruel",
  map_caption: "Gargallo se sitúa dentro de la franja de totalidad del eclipse solar del 12 de agosto de 2026.",

  tickets_kicker: "Entradas",
  tickets_title: "Elige cómo quieres vivir <span>EKLEIPSIS FEST</span",
  tickets_intro: "Todas las modalidades incluyen acceso al festival, zona de acampada y Parking. La compra final se realizará de forma segura PRÓXIMAMENTE.",

  ticket_per_person: "/ persona",
  ticket_total_word: "total",
  ticket_buy: "ENTRADAS PRÓXIMAMENTE",

  ticket_own_tent_2_badge: "Tienda propia x2",
  ticket_own_tent_2_total: "270€ total · 2 personas",

  ticket_own_tent_4_badge: "Tienda propia x4",
  ticket_own_tent_4_total: "500€ total · 4 personas",

  ticket_camper_badge: "Autocaravana o camper",
  ticket_camper_total: "600€ total · hasta 4 personas",

  ticket_glamping_4_badge: "Glamping x4",
  ticket_glamping_4_total: "1.020€ total · 4 personas",

  ticket_glamping_8_badge: "Glamping x8",
  ticket_glamping_8_total: "1.960€ total · 8 personas",

  ticket_family_badge: "Pack familiar",
  ticket_family_total: "2 adultos + 1 o 2 niños",

  ticket_include_festival: "Entrada al festival",
  ticket_include_own_tent: "Acampada con tienda propia",
  ticket_include_plot: "Parcela incluida",
  ticket_include_small_groups: "Ideal para grupos pequeños",
  ticket_include_35: "Parcela de 35m²",
  ticket_include_camper: "Para camper o autocaravana",
  ticket_include_glamping: "Alojamiento glamping",
  ticket_include_comfort: "Más comodidad",
  ticket_include_groups: "Ideal para grupos",
  ticket_include_general: "Entrada general",
  ticket_include_families: "Pensado para familias",

  program_kicker: "Line up",
  program_title: "PROGRAMACIÓN DEL FESTIVAL",
  program_morning: "Mañana",
  program_afternoon: "Tarde",
  program_night: "Noche",

  program_day_11_title: "Día 11 · Bienvenido al festival",
  program_day_11_morning: "Recogida de pulseras, montaje de acampada.",
  program_day_11_afternoon: "Introducción a los eclipses, Sistema Solar, apps astronómicas, planisferio y protección ocular. Observación del cielo nocturno, tipos de telescopios, contaminación lumínica, espectroscopia y actividades infantiles.",
  program_day_11_night: "19:00–23:00 actuación de bandas. 23:00–01:00 actuación musical DJ.",

  program_day_12_title: "Día 12 · Eclipse y experiencias",
  program_day_12_morning: "Vía Láctea, galaxias, nebulosas, astrofotografía, astronomía vs astrología, cielo del nacimiento y seguridad visual.",
  program_day_12_afternoon_title: "Tarde · Evento principal",
  program_day_12_afternoon: "Preparación y visualización del eclipse en la zona de observación junto al recinto, explicación guiada y actividades infantiles adaptadas.",
  program_day_12_night: "Observación de Perseidas, astrofotografía nocturna, fiesta temática espacial, conciertos y DJ hasta las 02:00.",

  program_day_13_title: "Día 13 · Futuro y cosmos",
  program_day_13_morning: "Programa Artemis, James Webb, Hubble, astrofilosofía, cosmología, origen del universo y agujeros negros.",
  program_day_13_afternoon: "Astroturismo, la Tierra, observatorios terrestres, asociaciones astronómicas y preparación del eclipse total de 2027 en España.",
  program_day_13_night: "19:00–23:00 conciertos. 23:00–02:00 actuación musical DJ.",

  interactive_map_kicker: "Recinto",
  interactive_map_title: "Mapa interactivo del festival",
  map_point_camping: "Camping",
  map_point_viewing: "Visionado",
  map_point_stage: "Escenario",
  map_point_activities: "Actividades",
  map_point_parking: "Parking",
  map_point_acceso: "Acceso Principal",
  map_info_title: "Selecciona una zona",
  map_info_text: "Haz clic sobre una zona del mapa para ver información del camping, visionado, escenario o actividades.",

  camping_kicker: "Camping y estancia",
  camping_title: "Duerme bajo el cielo de Teruel",
  camping_text_1: "El festival contará con zona de acampada para asistentes, parcelas para tiendas propias, opciones de glamping, autocaravanas y campers.",
  camping_text_2: "La información definitiva sobre tipos de estancia, accesos, servicios y condiciones se actualizará antes de la apertura oficial de ventas.",
  camping_options_title: "Opciones previstas",
  camping_option_1: "Tienda estándar.",
  camping_option_2: "Domo o glamping premium.",
  camping_option_3: "Autocaravana o camper propia.",
  camping_option_4: "Parking para asistentes.",

  safety_kicker: "Recomendaciones",
  safety_title: "Seguridad ante todo",
  safety_intro: "Un eclipse solar es un fenómeno extraordinario, pero también requiere precaución. La observación del Sol nunca es segura sin la protección adecuada.",

  safety_eye_title: "Protección ocular",
  safety_eye_text: "Utiliza siempre gafas homologadas para observación solar. Mirar directamente al Sol sin protección puede causar daños irreversibles.",
  safety_supervision_title: "Supervisión",
  safety_supervision_text: "Los menores deben observar el eclipse bajo supervisión de un adulto y con protección adecuada.",
  safety_info_title: "Información",
  safety_info_text: "Durante el festival se dará información a los asistentes sobre cómo observar el eclipse correctamente.",

  faq_kicker: "FAQ",
  faq_title: "Preguntas frecuentes",
  faq_q1: "¿Dónde se celebra Ekleipsis Fest?",
  faq_a1: "En Gargallo, Teruel.",
  faq_q2: "¿Cuándo será el eclipse?",
  faq_a2: "El eclipse total de Sol será el 12 de agosto de 2026.",
  faq_q3: "¿Dónde se compran las entradas?",
  faq_a3: "Las entradas se venderán a través de Ticketmaster.",
  faq_q4: "¿Habrá camping?",
  faq_a4: "Sí, habrá zona de acampada con diferentes opciones.",

  footer_location: "Ekleipsis Fest 2026 · Gargallo, Teruel",
  footer_contact: "Contacto",
  footer_cta: "ENTRADAS PRÓXIMAMENTE"
  },

  en: {
    nav_eclipse: "The eclipse",
    nav_programa: "Programme",
    nav_entradas: "Tickets",
    nav_mapa: "Map",
    nav_seguridad: "Safety",
    nav_contacto: "FAQ",
    hero_kicker: "✦ ASTRONOMY FESTIVAL ✦",
    hero_subtitle: "ASTRONOMY + MUSIC + NATURE",
    hero_text: "A unique gathering under the sky. Come and witness the eclipse while enjoying an unforgettable experience.",
    hero_btn_tickets: "SOON tickets",
    hero_btn_program: "View program",
    hero_card_date: "11 - 14<br>August 2026",
    hero_card_location: "Gargallo<br>Teruel",
    hero_card_tickets: "Tickets",
    hero_card_soon: "Ticketmaster",

    summary_eclipse_title: "Eclipse",
    summary_eclipse_text: "Witness a total solar eclipse from a privileged location.",
    summary_camping_title: "Camping",
    summary_camping_text: "A camping area surrounded by nature to fully experience the festival.",
    summary_music_title: "Music",
    summary_music_text: "Concerts and DJ sessions to enjoy under the stars.",
    summary_nature_title: "Nature",
    summary_nature_text: "Routes, workshops and activities to connect with the surroundings.",

    eclipse_kicker: "August 12, 2026",
    eclipse_title: "The total solar eclipse of 2026",
    eclipse_text_1: "Ekleipsis Fest was created to experience one of the most impressive astronomical phenomena: a total solar eclipse. Gargallo, Teruel, lies within the path of totality, a privileged location to witness the moment when day turns into night.",
    eclipse_text_2: "The experience is enhanced with guided observation, astronomy outreach, family activities, music, the Perseids and a deep connection with the surrounding landscape.",

    eclipse_highlight_1_value: "100%",
    eclipse_highlight_1_label: "PATH OF TOTALITY",
    eclipse_highlight_2_value: "OPEN SKY",
    eclipse_highlight_2_label: "UNOBSTRUCTED HORIZON",
    eclipse_highlight_3_value: "2026",
    eclipse_highlight_3_label: "ONCE IN A LIFETIME EVENT",

    map_title: "Path of totality map",
    map_location: "Gargallo · Teruel",
    map_caption: "Gargallo is located within the path of totality of the August 12, 2026 solar eclipse.",

    tickets_kicker: "Tickets",
    tickets_title: "Choose how you want to experience <span>EKLEIPSIS FEST</span>",
    tickets_intro: "All options include festival access, camping area and Parking. Final purchase will be completed securely through Ticketmaster.",

    ticket_per_person: "/ person",
    ticket_total_word: "total",
    ticket_buy: "SOON TICKETS",

    ticket_own_tent_2_badge: "Own tent x2",
    ticket_own_tent_2_total: "€270 total · 2 people",
    ticket_own_tent_4_badge: "Own tent x4",
    ticket_own_tent_4_total: "€500 total · 4 people",
    ticket_camper_badge: "Motorhome or campervan",
    ticket_camper_total: "€600 total · up to 4 people",
    ticket_glamping_4_badge: "Glamping x4",
    ticket_glamping_4_total: "€1,020 total · 4 people",
    ticket_glamping_8_badge: "Glamping x8",
    ticket_glamping_8_total: "€1,960 total · 8 people",
    ticket_family_badge: "Family pack",
    ticket_family_total: "2 adults + 1 or 2 children",

    ticket_include_festival: "Festival ticket",
    ticket_include_own_tent: "Camping with your own tent",
    ticket_include_plot: "Pitch included",
    ticket_include_small_groups: "Ideal for small groups",
    ticket_include_35: "35m² pitch",
    ticket_include_camper: "For campervan or motorhome",
    ticket_include_glamping: "Glamping accommodation",
    ticket_include_comfort: "Extra comfort",
    ticket_include_groups: "Ideal for groups",
    ticket_include_general: "General admission",
    ticket_include_families: "Designed for families",

    program_kicker: "Line up",
    program_title: "Festival program",
    program_morning: "Morning",
    program_afternoon: "Afternoon",
    program_night: "Night",

    program_day_11_title: "Day 11 · Welcome to the festival",
    program_day_11_morning: "Wristband collection and campsite setup.",
    program_day_11_afternoon: "Introduction to eclipses, the Solar System, astronomy apps, planispheres and eye protection. Night sky observation, telescope types, light pollution, spectroscopy and children's activities.",
    program_day_11_night: "19:00–23:00 live bands. 23:00–01:00 DJ set.",

    program_day_12_title: "Day 12 · Eclipse and experiences",
    program_day_12_morning: "The Milky Way, galaxies, nebulae, astrophotography, astronomy vs astrology, the sky on the day you were born and visual safety.",
    program_day_12_afternoon_title: "Afternoon · Main event",
    program_day_12_afternoon: "Preparation and eclipse viewing in the observation area next to the venue, guided explanation and adapted children's activities.",
    program_day_12_night: "Perseids observation, night astrophotography, space-themed costume party, concerts and DJ until 02:00.",

    program_day_13_title: "Day 13 · The future and the cosmos",
    program_day_13_morning: "Artemis programme, James Webb, Hubble, astrophilosophy, cosmology, the origin of the universe and black holes.",
    program_day_13_afternoon: "Astrotourism, Earth, ground-based observatories, astronomy associations and preparation for the 2027 total eclipse in Spain.",
    program_day_13_night: "19:00–23:00 concerts. 23:00–02:00 DJ set.",

    interactive_map_kicker: "Venue",
    interactive_map_title: "Interactive festival map",
    map_point_camping: "Camping",
    map_point_viewing: "Viewing area",
    map_point_stage: "Main stage",
    map_point_activities: "Activities",
    map_point_parking: "Parking",
    map_point_access: "Main entrance",
    map_info_title: "Select an area",
    map_info_text: "Click on an area of the map to see information about camping, viewing, stage or activities.",

    camping_kicker: "Camping and stay",
    camping_title: "Sleep under the skies of Teruel",
    camping_text_1: "The festival will include a camping area for attendees, pitches for own tents, glamping options, motorhomes and campervans.",
    camping_text_2: "Final information about stay options, access, services and conditions will be updated before official ticket sales open.",
    camping_options_title: "Planned options",
    camping_option_1: "Standard tent.",
    camping_option_2: "Dome or premium glamping.",
    camping_option_3: "Own motorhome or campervan.",
    camping_option_4: "Parking for attendees.",

    safety_kicker: "Guidelines",
    safety_title: "Safety first",
    safety_intro: "A solar eclipse is an extraordinary event, but it requires caution. Looking at the Sun is never safe without proper protection.",
    safety_eye_title: "Eye protection",
    safety_eye_text: "Always use certified solar viewing glasses. Looking directly at the Sun without protection can cause permanent damage.",
    safety_supervision_title: "Supervision",
    safety_supervision_text: "Children must observe the eclipse under adult supervision and with proper protection.",
    safety_info_title: "Information",
    safety_info_text: "During the festival, attendees will be given information on how to properly observe the eclipse.",

    faq_kicker: "FAQ",
    faq_title: "Frequently asked questions",
    faq_q1: "Where is Ekleipsis Fest held?",
    faq_a1: "In Gargallo, Teruel.",
    faq_q2: "When is the eclipse?",
    faq_a2: "The total solar eclipse will take place on August 12, 2026.",
    faq_q3: "Where can I buy tickets?",
    faq_a3: "Tickets will be sold via Ticketmaster.",
    faq_q4: "Will there be camping?",
    faq_a4: "Yes, there will be several camping options.",

    footer_location: "Ekleipsis Fest 2026 · Gargallo, Teruel",
    footer_contact: "Contact",
    footer_cta: "SOON tickets"
  },

  fr: {
    nav_eclipse: "L'éclipse",
    nav_programa: "Programme",
    nav_entradas: "Billets",
    nav_mapa: "Carte",
    nav_seguridad: "Sécurité",
    nav_contacto: "FAQ",
    hero_kicker: "✦ FESTIVAL D'ASTRONOMIE ✦",
    hero_subtitle: "ASTRONOMIE + MUSIQUE + NATURE",
    hero_text: "Une rencontre unique sous le ciel. Venez observer l'éclipse et vivre une expérience inoubliable.",
    hero_btn_tickets: "BILLETS BIENTÔT DISPONIBLES",
    hero_btn_program: "Voir le programme",
    hero_card_date: "11 - 14<br>Août 2026",
    hero_card_location: "Gargallo<br>Teruel",
    hero_card_tickets: "Billets",
    hero_card_soon: "Ticketmaster",

    summary_eclipse_title: "Éclipse",
    summary_eclipse_text: "Assistez à une éclipse solaire totale depuis un lieu privilégié.",
    summary_camping_title: "Camping",
    summary_camping_text: "Une zone de camping en pleine nature pour vivre pleinement le festival.",
    summary_music_title: "Musique",
    summary_music_text: "Concerts et sessions DJ à apprécier sous les étoiles.",
    summary_nature_title: "Nature",
    summary_nature_text: "Itinéraires, ateliers et activités pour se connecter à l'environnement.",

    eclipse_kicker: "12 août 2026",
    eclipse_title: "L'éclipse totale de Soleil de 2026",
    eclipse_text_1: "Ekleipsis Fest est né pour vivre l'un des phénomènes astronomiques les plus impressionnants : une éclipse totale de Soleil. Gargallo, Teruel, se situe dans la bande de totalité, un emplacement privilégié pour observer le moment où le jour devient nuit.",
    eclipse_text_2: "L'expérience est complétée par une observation guidée, de la vulgarisation scientifique, des activités familiales, de la musique, les Perséides et une connexion directe avec le territoire.",

    eclipse_highlight_1_value: "100%",
    eclipse_highlight_1_label: "ZONE DE TOTALITÉ",
    eclipse_highlight_2_value: "OPEN SKY",
    eclipse_highlight_2_label: "HORIZON DÉGAGÉ",
    eclipse_highlight_3_value: "2026",
    eclipse_highlight_3_label: "ÉVÉNEMENT UNIQUE",

    map_title: "Carte de la totalité",
    map_location: "Gargallo · Teruel",
    map_caption: "Gargallo se situe dans la bande de totalité de l'éclipse solaire du 12 août 2026.",

    tickets_kicker: "Billets",
    tickets_title: "Choisissez comment vivre <span>EKLEIPSIS FEST</span>",
    tickets_intro: "Toutes les formules incluent l'accès au festival, zone de camping et Parking. L'achat final se fera en toute sécurité via Ticketmaster.",

    ticket_per_person: "/ personne",
    ticket_total_word: "total",
    ticket_buy: "BILLETS BIENTÔT DISPONIBLES",

    ticket_own_tent_2_badge: "Tente personnelle x2",
    ticket_own_tent_2_total: "270€ total · 2 personnes",
    ticket_own_tent_4_badge: "Tente personnelle x4",
    ticket_own_tent_4_total: "500€ total · 4 personnes",
    ticket_camper_badge: "Camping-car ou van",
    ticket_camper_total: "600€ total · jusqu'à 4 personnes",
    ticket_glamping_4_badge: "Glamping x4",
    ticket_glamping_4_total: "1.020€ total · 4 personnes",
    ticket_glamping_8_badge: "Glamping x8",
    ticket_glamping_8_total: "1.960€ total · 8 personnes",
    ticket_family_badge: "Pack famille",
    ticket_family_total: "2 adultes + 1 ou 2 enfants",

    ticket_include_festival: "Entrée au festival",
    ticket_include_own_tent: "Camping avec votre propre tente",
    ticket_include_plot: "Emplacement inclus",
    ticket_include_small_groups: "Idéal pour petits groupes",
    ticket_include_35: "Emplacement de 35m²",
    ticket_include_camper: "Pour van ou camping-car",
    ticket_include_glamping: "Hébergement glamping",
    ticket_include_comfort: "Plus de confort",
    ticket_include_groups: "Idéal pour groupes",
    ticket_include_general: "Entrée générale",
    ticket_include_families: "Pensé pour les familles",

    program_kicker: "Line up",
    program_title: "FESTIVAL PROGRAMME",
    program_morning: "Matin",
    program_afternoon: "Après-midi",
    program_night: "Nuit",

    program_day_11_title: "Jour 11 · Bienvenue au festival",
    program_day_11_morning: "Retrait des bracelets et installation du camping.",
    program_day_11_afternoon: "Introduction aux éclipses, au Système solaire, aux applications d'astronomie, au planisphère et à la protection oculaire. Observation du ciel nocturne, types de télescopes, pollution lumineuse, spectroscopie et activités pour enfants.",
    program_day_11_night: "19:00–23:00 concerts de groupes. 23:00–01:00 session DJ.",

    program_day_12_title: "Jour 12 · Éclipse et expériences",
    program_day_12_morning: "La Voie lactée, galaxies, nébuleuses, astrophotographie, astronomie vs astrologie, le ciel le jour de votre naissance et sécurité visuelle.",
    program_day_12_afternoon_title: "Après-midi · Événement principal",
    program_day_12_afternoon: "Préparation et observation de l'éclipse dans la zone d'observation près du site, explication guidée et activités adaptées aux enfants.",
    program_day_12_night: "Observation des Perséides, astrophotographie nocturne, fête costumée sur le thème de l'espace, concerts et DJ jusqu'à 02:00.",

    program_day_13_title: "Jour 13 · Futur et cosmos",
    program_day_13_morning: "Programme Artemis, James Webb, Hubble, astrophilosophie, cosmologie, origine de l'univers et trous noirs.",
    program_day_13_afternoon: "Astrotourisme, la Terre, observatoires terrestres, associations astronomiques et préparation de l'éclipse totale de 2027 en Espagne.",
    program_day_13_night: "19:00–23:00 concerts. 23:00–02:00 session DJ.",

    interactive_map_kicker: "Site",
    interactive_map_title: "Carte interactive du festival",
    map_point_camping: "Camping",
    map_point_viewing: "Observation",
    map_point_stage: "Scène",
    map_point_activities: "Activités",
    map_point_parking: "Parking",
    map_point_access: "Entrée principale",
    map_info_title: "Sélectionnez une zone",
    map_info_text: "Cliquez sur une zone de la carte pour voir les informations sur le camping, l'observation, la scène ou les activités.",

    camping_kicker: "Camping et séjour",
    camping_title: "Dormez sous le ciel de Teruel",
    camping_text_1: "Le festival disposera d'une zone de camping pour les participants, avec des emplacements pour tentes personnelles, des options de glamping, des camping-cars et des vans.",
    camping_text_2: "Les informations définitives sur les types de séjour, les accès, les services et les conditions seront mises à jour avant l'ouverture officielle des ventes.",
    camping_options_title: "Options prévues",
    camping_option_1: "Tente standard.",
    camping_option_2: "Dôme ou glamping premium.",
    camping_option_3: "Camping-car ou van personnel.",
    camping_option_4: "Parking pour les participants.",

    safety_kicker: "Recommandations",
    safety_title: "La sécurité avant tout",
    safety_intro: "Une éclipse solaire est un phénomène extraordinaire, mais elle nécessite des précautions. Observer le Soleil sans protection adéquate n'est jamais sûr.",
    safety_eye_title: "Protection oculaire",
    safety_eye_text: "Utilisez toujours des lunettes certifiées pour l'observation solaire. Regarder directement le Soleil sans protection peut causer des dommages irréversibles.",
    safety_supervision_title: "Supervision",
    safety_supervision_text: "Les enfants doivent observer l'éclipse sous la supervision d'un adulte et avec une protection appropriée.",
    safety_info_title: "Information",
    safety_info_text: "Durant le festival, les participants recevront des informations sur la manière d'observer correctement l'éclipse.",

    faq_kicker: "FAQ",
    faq_title: "Questions fréquentes",
    faq_q1: "Où se déroule Ekleipsis Fest ?",
    faq_a1: "À Gargallo, Teruel.",
    faq_q2: "Quand aura lieu l'éclipse ?",
    faq_a2: "L'éclipse totale de Soleil aura lieu le 12 août 2026.",
    faq_q3: "Où acheter les billets ?",
    faq_a3: "Les billets seront vendus via Ticketmaster.",
    faq_q4: "Y aura-t-il un camping ?",
    faq_a4: "Oui, plusieurs options de camping seront disponibles.",

    footer_location: "Ekleipsis Fest 2026 · Gargallo, Teruel",
    footer_contact: "Contact",
    footer_cta: "BILLETS BIENTÔT DISPONIBLES"
  },

  de: {
    nav_eclipse: "Die Sonnenfinsternis",
    nav_programa: "Programm",
    nav_entradas: "Tickets",
    nav_mapa: "Karte",
    nav_seguridad: "Sicherheit",
    nav_contacto: "FAQ",
    hero_kicker: "✦ ASTRONOMIE-FESTIVAL ✦",
    hero_subtitle: "ASTRONOMIE + MUSIK + NATUR",
    hero_text: "Ein einzigartiges Treffen unter dem Himmel. Erlebe die Sonnenfinsternis und genieße ein unvergessliches Erlebnis.",
    hero_btn_tickets: "BALD",
    hero_btn_program: "Programm ansehen",
    hero_card_date: "11. - 14.<br>August 2026",
    hero_card_location: "Gargallo<br>Teruel",
    hero_card_tickets: "Tickets",
    hero_card_soon: "Ticketmaster",

    summary_eclipse_title: "Sonnenfinsternis",
    summary_eclipse_text: "Erleben Sie eine totale Sonnenfinsternis von einem privilegierten Ort aus.",
    summary_camping_title: "Camping",
    summary_camping_text: "Ein Campingbereich mitten in der Natur, um das Festival vollständig zu erleben.",
    summary_music_title: "Musik",
    summary_music_text: "Konzerte und DJ-Sessions unter dem Sternenhimmel.",
    summary_nature_title: "Natur",
    summary_nature_text: "Routen, Workshops und Aktivitäten, um die Umgebung zu entdecken.",

    eclipse_kicker: "12. August 2026",
    eclipse_title: "Die totale Sonnenfinsternis 2026",
    eclipse_text_1: "Ekleipsis Fest wurde geschaffen, um eines der beeindruckendsten astronomischen Phänomene zu erleben: eine totale Sonnenfinsternis. Gargallo in Teruel liegt innerhalb des Totalitätsstreifens, einem privilegierten Ort, um den Moment zu beobachten, in dem sich der Tag in Nacht verwandelt.",
    eclipse_text_2: "Das Erlebnis wird durch geführte Beobachtung, astronomische Inhalte, Familienaktivitäten, Musik, die Perseiden und eine direkte Verbindung zur Umgebung ergänzt.",

    eclipse_highlight_1_value: "100%",
    eclipse_highlight_1_label: "TOTALITÄTSZONE",
    eclipse_highlight_2_value: "OPEN SKY",
    eclipse_highlight_2_label: "FREIER HORIZONT",
    eclipse_highlight_3_value: "2026",
    eclipse_highlight_3_label: "EINMALIGES EREIGNIS",

    map_title: "Karte der Totalität",
    map_location: "Gargallo · Teruel",
    map_caption: "Gargallo liegt innerhalb des Totalitätsstreifens der Sonnenfinsternis am 12. August 2026.",

    tickets_kicker: "Tickets",
    tickets_title: "Wähle, wie du <span>EKLEIPSIS FEST</span> erleben möchtest",
    tickets_intro: "Alle Optionen sind im Festivaleintritt, im Campingbereich und im Parkplatz inbegriffen. Der Kauf wird sicher über Ticketmaster abgewickelt.",

    ticket_per_person: "/ Person",
    ticket_total_word: "gesamt",
    ticket_buy: "BALD",

    ticket_own_tent_2_badge: "Eigenes Zelt x2",
    ticket_own_tent_2_total: "270€ gesamt · 2 Personen",
    ticket_own_tent_4_badge: "Eigenes Zelt x4",
    ticket_own_tent_4_total: "500€ gesamt · 4 Personen",
    ticket_camper_badge: "Wohnmobil oder Camper",
    ticket_camper_total: "600€ gesamt · bis zu 4 Personen",
    ticket_glamping_4_badge: "Glamping x4",
    ticket_glamping_4_total: "1.020€ gesamt · 4 Personen",
    ticket_glamping_8_badge: "Glamping x8",
    ticket_glamping_8_total: "1.960€ gesamt · 8 Personen",
    ticket_family_badge: "Familienpaket",
    ticket_family_total: "2 Erwachsene + 1 oder 2 Kinder",

    ticket_include_festival: "Festivaleintritt",
    ticket_include_own_tent: "Camping mit eigenem Zelt",
    ticket_include_plot: "Stellplatz inklusive",
    ticket_include_small_groups: "Ideal für kleine Gruppen",
    ticket_include_35: "35m² Stellplatz",
    ticket_include_camper: "Für Camper oder Wohnmobil",
    ticket_include_glamping: "Glamping-Unterkunft",
    ticket_include_comfort: "Mehr Komfort",
    ticket_include_groups: "Ideal für Gruppen",
    ticket_include_general: "Allgemeiner Eintritt",
    ticket_include_families: "Für Familien gedacht",

    program_kicker: "line up",
    program_title: "Festivalprogramm",
    program_morning: "Vormittag",
    program_afternoon: "Nachmittag",
    program_night: "Nacht",

    program_day_11_title: "Tag 11 · Willkommen beim Festival",
    program_day_11_morning: "Abholung der Armbänder und Aufbau des Campingbereichs.",
    program_day_11_afternoon: "Einführung in Sonnenfinsternisse, das Sonnensystem, Astronomie-Apps, Planisphären und Augenschutz. Beobachtung des Nachthimmels, Teleskoparten, Lichtverschmutzung, Spektroskopie und Kinderaktivitäten.",
    program_day_11_night: "19:00–23:00 Live-Bands. 23:00–01:00 DJ-Set.",

    program_day_12_title: "Tag 12 · Sonnenfinsternis und Erlebnisse",
    program_day_12_morning: "Milchstraße, Galaxien, Nebel, Astrofotografie, Astronomie vs. Astrologie, der Himmel am Tag deiner Geburt und Augensicherheit.",
    program_day_12_afternoon_title: "Nachmittag · Hauptereignis",
    program_day_12_afternoon: "Vorbereitung und Beobachtung der Sonnenfinsternis im Beobachtungsbereich neben dem Gelände, geführte Erklärung und angepasste Kinderaktivitäten.",
    program_day_12_night: "Beobachtung der Perseiden, nächtliche Astrofotografie, Weltraum-Kostümparty, Konzerte und DJ bis 02:00 Uhr.",

    program_day_13_title: "Tag 13 · Zukunft und Kosmos",
    program_day_13_morning: "Artemis-Programm, James Webb, Hubble, Astrophilosophie, Kosmologie, Ursprung des Universums und schwarze Löcher.",
    program_day_13_afternoon: "Astrotourismus, die Erde, bodengebundene Observatorien, astronomische Vereinigungen und Vorbereitung auf die totale Sonnenfinsternis 2027 in Spanien.",
    program_day_13_night: "19:00–23:00 Konzerte. 23:00–02:00 DJ-Set.",

    interactive_map_kicker: "Gelände",
    interactive_map_title: "Interaktive Festival-Karte",
    map_point_camping: "Camping",
    map_point_viewing: "Beobachtung",
    map_point_stage: "Bühne",
    map_point_activities: "Aktivitäten",
    map_point_parking: "Parking",
    map_point_access: "Haupteingang",
    map_info_title: "Wähle einen Bereich",
    map_info_text: "Klicke auf einen Bereich der Karte, um Informationen zu Camping, Beobachtung, Bühne oder Aktivitäten zu sehen.",

    camping_kicker: "Camping und Aufenthalt",
    camping_title: "Schlafe unter dem Himmel von Teruel",
    camping_text_1: "Das Festival bietet einen Campingbereich für Besucher, Stellplätze für eigene Zelte, Glamping-Optionen, Wohnmobile und Campervans.",
    camping_text_2: "Die endgültigen Informationen zu Aufenthaltsarten, Zugängen, Services und Bedingungen werden vor dem offiziellen Verkaufsstart aktualisiert.",
    camping_options_title: "Geplante Optionen",
    camping_option_1: "Standardzelt.",
    camping_option_2: "Dome oder Premium-Glamping.",
    camping_option_3: "Eigenes Wohnmobil oder eigener Camper.",
    camping_option_4: "Parkplatz für Besucher.",

    safety_kicker: "Empfehlungen",
    safety_title: "Sicherheit zuerst",
    safety_intro: "Eine Sonnenfinsternis ist ein außergewöhnliches Ereignis, erfordert aber Vorsicht. Das Beobachten der Sonne ohne geeigneten Schutz ist niemals sicher.",
    safety_eye_title: "Augenschutz",
    safety_eye_text: "Verwende immer zertifizierte Sonnenfinsternis-Brillen. Direkt in die Sonne zu schauen kann ohne Schutz zu irreversiblen Schäden führen.",
    safety_supervision_title: "Aufsicht",
    safety_supervision_text: "Kinder sollten die Sonnenfinsternis nur unter Aufsicht eines Erwachsenen und mit geeignetem Schutz beobachten.",
    safety_info_title: "Information",
    safety_info_text: "Im Rahmen des Festivals erhalten die Teilnehmer Informationen darüber, wie man die Sonnenfinsternis richtig beobachtet.",

    faq_kicker: "FAQ",
    faq_title: "Häufig gestellte Fragen",
    faq_q1: "Wo findet das Ekleipsis Fest statt?",
    faq_a1: "In Gargallo, Teruel.",
    faq_q2: "Wann findet die Sonnenfinsternis statt?",
    faq_a2: "Die totale Sonnenfinsternis findet am 12. August 2026 statt.",
    faq_q3: "Wo kann ich Tickets kaufen?",
    faq_a3: "Tickets werden über Ticketmaster verkauft.",
    faq_q4: "Gibt es Camping?",
    faq_a4: "Ja, es gibt mehrere Camping-Optionen.",

    footer_location: "Ekleipsis Fest 2026 · Gargallo, Teruel",
    footer_contact: "Kontakt",
    footer_cta: "BALD"
  }
};

const langButtons = document.querySelectorAll(".lang-btn");
const translatableElements = document.querySelectorAll("[data-i18n]");

function setLanguage(lang) {
  translatableElements.forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  localStorage.setItem("ekleipsisLang", lang);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("ekleipsisLang") || "es";
setLanguage(savedLanguage);
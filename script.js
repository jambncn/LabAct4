const TIMELINE = [
  { year:"~10,000 BC", era:"Prehistoric",        title:"Wildcats & Grain",              text:"As humans settled into agricultural communities in the Fertile Crescent, wildcats (Felis silvestris lybica) began associating with these settlements. Grain stores attracted rodents; rodents attracted cats. This mutually beneficial relationship marks the first steps toward domestication." },
  { year:"~7500 BC",   era:"Neolithic",           title:"Cyprus Burial",                 text:"A wildcat is deliberately buried alongside a human in Cyprus — the earliest known evidence of an intentional human-cat relationship. The cat's bones show no signs of captivity, suggesting it was a companion, not a working animal." },
  { year:"~4000 BC",   era:"Ancient Egypt",       title:"Sacred Cats of Egypt",          text:"Cats become increasingly revered in Egyptian society, associated with the goddess Bastet. They guard grain stores, protect homes from snakes, and become symbols of grace and power. Harming a cat becomes punishable by death." },
  { year:"~1500 BC",   era:"Ancient Egypt",       title:"Bastet Cult & Mummies",         text:"The Bastet cult reaches its peak at Bubastis. Millions of cats are mummified as religious offerings over the centuries. The Egyptian word for cat, 'miu' (meaning 'to see'), reflects their status as sacred observers." },
  { year:"~500 BC",    era:"Classical Antiquity", title:"Cats Reach Greece & Rome",      text:"Greek and Roman merchants and soldiers encounter Egyptian cats and bring them west. Their rat-catching ability is prized on ships and in granaries. Cat imagery appears in Greek art and mosaics. The word 'felis' enters Latin." },
  { year:"~200 BC",    era:"Classical Antiquity", title:"Silk Road Companions",          text:"Cats travel the ancient trade routes of Asia, spreading into Persia, India, and China. Buddhist monks bring cats to monasteries to protect sacred texts from rodents. Their spread across Asia leads to the development of distinct regional breeds." },
  { year:"~600 AD",    era:"Early Medieval",      title:"The Prophet's Cat",             text:"Islamic tradition records the Prophet Muhammad's affection for cats. Cats gain elevated status in Islamic culture and are permitted in mosques and homes. This protection helps cats thrive across the vast Islamic world." },
  { year:"~1000 AD",   era:"Medieval",            title:"Viking Ship Cats",              text:"Norse seafarers spread the Norwegian Forest Cat and other domestic cats along their trade and exploration routes from Scandinavia to Iceland, Greenland, and North America. Cats become indispensable sailors." },
  { year:"1200s",      era:"Medieval Europe",     title:"The Dark Age of Cats",          text:"Growing association with witchcraft and paganism leads to widespread persecution of cats in medieval Europe. Pope Gregory IX's papal bull links black cats to the Devil. The decimation of cat populations is later linked to explosive rat proliferation and the spread of plague." },
  { year:"1347-1351",  era:"Black Death",         title:"Plague & the Cat's Return",     text:"The Black Death kills roughly a third of Europe's population. Rats carrying plague-infected fleas thrive in part due to suppressed cat populations. Survivors begin to recognize cats' vital role in pest control, slowly restoring their status." },
  { year:"1600s",      era:"Early Modern",        title:"Cats in Colonial America",      text:"Cats arrive in North America aboard the Mayflower and other colonial ships to protect food stores. They quickly establish themselves in the New World, eventually developing into America's own native breeds including the Maine Coon." },
  { year:"1745",       era:"Enlightenment",       title:"Literary Cats",                 text:"Cats appear increasingly in European art and literature as symbols of independence and mystery. Horace Walpole, Samuel Johnson, and other notable figures write fondly of their feline companions, signaling cultural rehabilitation." },
  { year:"1871",       era:"Victorian Era",       title:"The First Cat Show",            text:"Harrison Weir organizes the world's first formal cat show at Crystal Palace in London. 170 cats are exhibited and judged against written standards — the birth of the modern 'cat fancy' movement and pedigree cat culture." },
  { year:"1887",       era:"Victorian Era",       title:"National Cat Club Founded",     text:"Harrison Weir founds the National Cat Club in the UK, the world's first cat breed registry. Official breed standards are written and the systematic recording of pedigrees begins, formalizing the modern concept of cat breeds." },
  { year:"1906",       era:"Edwardian Era",       title:"Cat Fanciers' Association",     text:"The Cat Fanciers' Association (CFA) is founded in the United States, establishing official breed standards, pedigrees, and shows for North American cat breeders. It becomes the world's largest registry of pedigreed cats." },
  { year:"1940s-60s",  era:"Modern Era",          title:"New Breeds Emerge",             text:"Post-war prosperity and interest in genetics spark a boom in cat breeding. Rex mutations in Cornwall and Devon, spontaneous fold mutations in Scotland, and deliberate wild-domestic crosses produce dozens of new breeds in two decades." },
  { year:"1966",       era:"Modern Era",          title:"The First Sphynx",              text:"A hairless kitten named Prune is born in Toronto, Canada — the result of a natural mutation. Breeders begin developing the Sphynx breed, capturing global fascination and becoming one of the most iconic breeds of the modern era." },
  { year:"1963",       era:"Modern Era",          title:"The Bengal Is Born",            text:"Geneticist Dr. Jean Mill crosses the Asian leopard cat with a domestic cat in California, beginning the Bengal breeding program. It takes decades to stabilize the breed, which is formally recognized in the 1980s." },
  { year:"2007",       era:"Scientific Era",      title:"The Cat Genome Is Sequenced",   text:"Scientists publish the complete domestic cat genome, confirming that all domestic cats descend from a Middle Eastern wildcat lineage that split from African wildcats approximately 10,000 years ago in the Fertile Crescent." },
  { year:"2010s",      era:"Digital Age",         title:"Cats Conquer the Internet",     text:"Cats become the defining animal of internet culture. Grumpy Cat, Lil Bub, Nyan Cat, and thousands of viral felines generate billions of views. The 'cat video' becomes a cultural institution, deepening the human-cat bond globally." },
  { year:"Today",      era:"Present Day",         title:"600 Million Strong",            text:"Over 600 million domestic cats live worldwide, making them among the most successful large mammals on Earth. With 70+ recognized breeds and countless mixed-breed companions, the human-cat relationship continues to evolve." },
];

const FACTS = [
  "Cats spend 70% of their lives sleeping — roughly 13-16 hours per day. In the wild, this conserves energy between hunts.",
  "A cat's hearing range extends to about 79,000 Hz — far beyond the 20,000 Hz limit of human hearing, allowing them to detect ultrasonic rodent communication.",
  "Cats cannot taste sweetness. A genetic mutation deleted two of the three 'sweet receptor' genes, making sugary foods completely flavorless to them.",
  "The ridged pattern on a cat's nose is completely unique — no two cats share the same nose print, much like human fingerprints.",
  "The Egyptian Mau holds the speed record for domestic cats at approximately 30 mph, thanks to an extra flap of skin on the belly that extends stride length.",
  "Cats purr at frequencies between 25 and 150 Hz — a range scientifically shown to promote bone density, accelerate healing, and reduce stress in humans.",
  "A group of cats is called a clowder. A group of kittens is a kindle. A male cat is a tom; a female is a queen.",
  "Cats have a specialized 'floating' clavicle that allows them to fit through any opening their head can pass through — a key hunting advantage.",
  "The average cat has 244 bones — 24 more than the average human — and 32 muscles in each ear, allowing independent 180° rotation.",
  "Cats use a unique 'chattering' vocalization when watching birds, thought to mimic prey sounds or express predatory frustration.",
  "Unlike dogs, cats domesticated themselves. Wildcats approached human settlements voluntarily, and humans encouraged the relationship for pest control.",
  "Cats have a second 'nose' — the Jacobson's organ in the roof of the mouth. The Flehmen response (open-mouthed gaping) draws scent molecules to it.",
];

const STATS = [
  { num:"600M+", label:"Domestic cats worldwide",   desc:"The most successful large mammal domestication in history" },
  { num:"70+",   label:"Recognized cat breeds",     desc:"By the world's major feline registries" },
  { num:"10,000",label:"Years of domestication",    desc:"Beginning in the Fertile Crescent of the Middle East" },
  { num:"130+",  label:"Vocalizations",             desc:"Dogs have about 10 — cats are far more communicative" },
];


document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initNavbar();

 
  if (document.getElementById('breedsGrid')) {
    initBreedControls();
  }

  if (document.getElementById('timelineList')) {
    renderTimeline();
  }
  if (document.getElementById('factsList')) {
    renderFacts();
  }

  initScrollReveal();
});

function initCursor() {
  const dot  = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  let rx = 0, ry = 0, mx = 0, my = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  (function loop() {
    rx += (mx - rx) * 0.13;
    ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();
}

function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}


function initBreedControls() {
  const cards      = Array.from(document.querySelectorAll('.breed-card'));
  const countEl    = document.getElementById('breedsShown');
  const searchInput= document.getElementById('breedSearch');
  let activeFilter = 'all';
  let searchQuery  = '';

  countEl.textContent = cards.length;

  function applyFilters() {
    const q = searchQuery.toLowerCase().trim();
    let shown = 0;

    cards.forEach(card => {
      const category = (card.dataset.category || '').toLowerCase();
      const name     = (card.dataset.name     || '').toLowerCase();
      const origin   = (card.dataset.origin   || '').toLowerCase();
      const traits   = (card.dataset.traits   || '').toLowerCase();

      const matchFilter = activeFilter === 'all' || category === activeFilter;
      const matchSearch = !q || name.includes(q) || origin.includes(q) || traits.includes(q);

      const show = matchFilter && matchSearch;
      card.style.display = show ? '' : 'none';
      if (show) shown++;
    });

    let noRes = document.getElementById('noResults');
    if (shown === 0) {
      if (!noRes) {
        noRes = document.createElement('div');
        noRes.id = 'noResults';
        noRes.className = 'no-results';
        noRes.textContent = 'No breeds match your search';
        document.getElementById('breedsGrid').appendChild(noRes);
      }
    } else {
      noRes && noRes.remove();
    }
    countEl.textContent = shown;
  }

  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    applyFilters();
  });
}

function renderTimeline() {
  const list = document.getElementById('timelineList');
  TIMELINE.forEach((item, i) => {
    const el = document.createElement('div');
    el.className = 'tl-item';
    const content = `
      <div class="tl-year">${item.year}</div>
      <div class="tl-era">${item.era}</div>
      <div class="tl-title">${item.title}</div>
      <p class="tl-text">${item.text}</p>`;
    el.innerHTML = i % 2 === 0
      ? `<div class="tl-content">${content}</div><div class="tl-dot"></div><div class="tl-blank"></div>`
      : `<div class="tl-blank"></div><div class="tl-dot"></div><div class="tl-content">${content}</div>`;
    list.appendChild(el);
  });
}

function renderFacts() {
  const list  = document.getElementById('factsList');
  const stats = document.getElementById('statsGrid');

  FACTS.forEach((f, i) => {
    const div = document.createElement('div');
    div.className = 'fact-item';
    div.innerHTML = `<span class="fact-num">${String(i + 1).padStart(2,'0')}</span><p class="fact-text">${f}</p>`;
    list.appendChild(div);
  });

  STATS.forEach((s, i) => {
    const box = document.createElement('div');
    box.className = 'stat-box';
    box.style.transitionDelay = (i * 0.12) + 's';
    box.innerHTML = `
      <span class="stat-num">${s.num}</span>
      <span class="stat-label">${s.label}</span>
      <span class="stat-desc">${s.desc}</span>`;
    stats.appendChild(box);
  });
}


function initScrollReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.tl-item, .fact-item, .stat-box').forEach(el => obs.observe(el));
}

const BREED_DB = [
  
  { name:"Abyssinian",          origin:"Ethiopia",      category:"Ancient",  coat:"short",    size:"medium", energy:"active",   personality:"independent",  emoji:"🏺", traits:["Active","Curious","Ticked coat","Athletic","Ancient"] },
  { name:"Egyptian Mau",        origin:"Egypt",         category:"Ancient",  coat:"short",    size:"medium", energy:"active",   personality:"loyal",        emoji:"🐈‍⬛", traits:["Natural spots","Speed","Loyal","Green eyes","Fast"] },
  { name:"Turkish Angora",      origin:"Turkey",        category:"Ancient",  coat:"long",     size:"medium", energy:"active",   personality:"vocal",        emoji:"🕊️", traits:["Silky white","Elegant","Athletic","Vocal","Playful"] },
  { name:"Turkish Van",         origin:"Turkey",        category:"Ancient",  coat:"long",     size:"large",  energy:"active",   personality:"independent",  emoji:"🏊", traits:["Water-loving","Bold","Energetic","Swimmer","Mischievous"] },
  { name:"Siamese",             origin:"Thailand",      category:"Ancient",  coat:"short",    size:"medium", energy:"active",   personality:"vocal",        emoji:"💙", traits:["Vocal","Social","Blue eyes","Pointed","Intense"] },
  { name:"Korat",               origin:"Thailand",      category:"Ancient",  coat:"short",    size:"small",  energy:"calm",     personality:"loyal",        emoji:"🍀", traits:["Silver-blue","Quiet","Lucky","Loyal","Rare"] },
  { name:"Burmese",             origin:"Myanmar",       category:"Ancient",  coat:"short",    size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🌸", traits:["Affectionate","Compact","Silky coat","Social","Loyal"] },
  { name:"Japanese Bobtail",    origin:"Japan",         category:"Ancient",  coat:"short",    size:"medium", energy:"active",   personality:"vocal",        emoji:"🎋", traits:["Pom-pom tail","Lucky","Agile","Vocal","Playful"] },
  { name:"Chartreux",           origin:"France",        category:"Ancient",  coat:"short",    size:"large",  energy:"calm",     personality:"loyal",        emoji:"🫐", traits:["Blue-grey","Quiet","Robust","Smiling face","Hardy"] },
  { name:"Sokoke",              origin:"Kenya",         category:"Ancient",  coat:"short",    size:"medium", energy:"active",   personality:"independent",  emoji:"🌍", traits:["Rare","Wild-pattern","Agile","African","Forest cat"] },
  { name:"Siberian",            origin:"Russia",        category:"Ancient",  coat:"long",     size:"large",  energy:"moderate", personality:"affectionate",  emoji:"🧊", traits:["Triple coat","Hypoallergenic","Powerful","Hardy","Agile"] },
  { name:"Aegean",              origin:"Greece",        category:"Ancient",  coat:"medium",   size:"medium", energy:"moderate", personality:"independent",  emoji:"🏛️", traits:["Natural","Island cat","Athletic","Heritage","Hardy"] },
  { name:"Khao Manee",          origin:"Thailand",      category:"Ancient",  coat:"short",    size:"medium", energy:"active",   personality:"vocal",        emoji:"💠", traits:["Pure white","Odd eyes","Royal","Lucky","Talkative"] },
  { name:"Cyprus Cat",          origin:"Cyprus",        category:"Ancient",  coat:"short",    size:"medium", energy:"moderate", personality:"independent",  emoji:"🏝️", traits:["Ancient","Robust","Rare","Natural","Oldest lineage"] },
  { name:"Suphalak",            origin:"Thailand",      category:"Ancient",  coat:"short",    size:"medium", energy:"moderate", personality:"loyal",        emoji:"🟤", traits:["Copper-red","Rare","Ancient","Thai royal","Auspicious"] },
  { name:"Dragon Li",           origin:"China",         category:"Ancient",  coat:"short",    size:"medium", energy:"moderate", personality:"independent",  emoji:"🐉", traits:["Wild tabby","Natural","Rare","Muscular","Chinese native"] },
 
  { name:"Maine Coon",          origin:"USA",           category:"Western",  coat:"long",     size:"large",  energy:"moderate", personality:"loyal",        emoji:"🦁", traits:["Gentle","Dog-like","Tufted ears","Large","Hardy"] },
  { name:"Norwegian Forest Cat",origin:"Norway",        category:"Western",  coat:"long",     size:"large",  energy:"moderate", personality:"loyal",        emoji:"🌲", traits:["Double coat","Hardy","Climber","Nordic","Majestic"] },
  { name:"British Shorthair",   origin:"UK",            category:"Western",  coat:"short",    size:"large",  energy:"calm",     personality:"independent",  emoji:"🩶", traits:["Calm","Plush coat","Easy-going","Cheshire","Dignified"] },
  { name:"Scottish Fold",       origin:"Scotland",      category:"Western",  coat:"short",    size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🦉", traits:["Folded ears","Calm","Owl-face","Adaptable","Sweet"] },
  { name:"Russian Blue",        origin:"Russia",        category:"Western",  coat:"short",    size:"medium", energy:"calm",     personality:"loyal",        emoji:"❄️", traits:["Blue-grey","Reserved","Green eyes","Loyal","Plush coat"] },
  { name:"Manx",                origin:"Isle of Man",   category:"Western",  coat:"short",    size:"medium", energy:"moderate", personality:"loyal",        emoji:"🐇", traits:["Tailless","Athletic","Dog-like","Rumpy","Island born"] },
  { name:"Persian",             origin:"Iran",          category:"Western",  coat:"long",     size:"large",  energy:"calm",     personality:"independent",  emoji:"👑", traits:["Flat-face","Silky coat","Quiet","Regal","Calm"] },
  { name:"Birman",              origin:"Myanmar",       category:"Western",  coat:"long",     size:"large",  energy:"calm",     personality:"affectionate",  emoji:"🪷", traits:["White gloves","Pointed","Sacred","Blue eyes","Serene"] },
  { name:"Cymric",              origin:"Canada",        category:"Western",  coat:"long",     size:"medium", energy:"moderate", personality:"loyal",        emoji:"🍃", traits:["Tailless","Long coat","Dog-like","Loyal","Dense"] },
  { name:"Exotic Shorthair",    origin:"USA",           category:"Western",  coat:"short",    size:"large",  energy:"calm",     personality:"affectionate",  emoji:"🧸", traits:["Flat-face","Plush","Calm","Lazy Persian","Sweet"] },
  { name:"British Longhair",    origin:"UK",            category:"Western",  coat:"long",     size:"large",  energy:"calm",     personality:"independent",  emoji:"🌥️", traits:["Calm","Plush","Fluffy","Gentle","Easygoing"] },
  { name:"Himalayan",           origin:"USA",           category:"Western",  coat:"long",     size:"large",  energy:"calm",     personality:"affectionate",  emoji:"🏔️", traits:["Blue eyes","Pointed","Flat-face","Silky","Calm"] },
  { name:"Scottish Straight",   origin:"Scotland",      category:"Western",  coat:"short",    size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🏴󠁧󠁢󠁳󠁣󠁴󠁿", traits:["Straight ears","Round","Sweet","Calm","Healthy"] },
  { name:"Nebelung",            origin:"USA",           category:"Western",  coat:"long",     size:"medium", energy:"calm",     personality:"loyal",        emoji:"🌫️", traits:["Silver-blue","Shy","Silky","Loyal","Rare"] },
 
  { name:"Balinese",            origin:"USA",           category:"Asian",    coat:"long",     size:"medium", energy:"active",   personality:"vocal",        emoji:"🌺", traits:["Graceful","Vocal","Silky","Social","Elegant"] },
  { name:"Tonkinese",           origin:"Canada",        category:"Asian",    coat:"short",    size:"medium", energy:"active",   personality:"affectionate",  emoji:"💎", traits:["Aqua eyes","Playful","Social","Silky","Friendly"] },
  { name:"Singapura",           origin:"Singapore",     category:"Asian",    coat:"short",    size:"small",  energy:"active",   personality:"affectionate",  emoji:"✨", traits:["Tiny","Big eyes","Curious","Kitten-faced","Bold"] },
  { name:"Burmilla",            origin:"UK",            category:"Asian",    coat:"short",    size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🥈", traits:["Silver sheen","Gentle","Sociable","Shimmering","Calm"] },
  { name:"Asian Semi-longhair", origin:"UK",            category:"Asian",    coat:"long",     size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🎐", traits:["Playful","Affectionate","Silky","Flowing","Tiffanie"] },
  { name:"Colorpoint Shorthair",origin:"USA",           category:"Asian",    coat:"short",    size:"medium", energy:"active",   personality:"vocal",        emoji:"🎨", traits:["Pointed","Vocal","Lean","Chatty","Colorful"] },
  { name:"Oriental Shorthair",  origin:"USA",           category:"Asian",    coat:"short",    size:"medium", energy:"active",   personality:"vocal",        emoji:"🦎", traits:["300+ colors","Chatty","Sleek","Diverse","Bold"] },
  { name:"Oriental Longhair",   origin:"UK",            category:"Asian",    coat:"long",     size:"medium", energy:"active",   personality:"vocal",        emoji:"🎍", traits:["Silky","Social","Playful","Sleek","Vocal"] },
  { name:"Tiffanie",            origin:"UK",            category:"Asian",    coat:"long",     size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🌿", traits:["Long-haired","Gentle","Silky","Flowing","Sociable"] },
  
  { name:"American Shorthair",  origin:"USA",           category:"American", coat:"short",    size:"large",  energy:"moderate", personality:"independent",  emoji:"🇺🇸", traits:["Hardy","Calm","Adaptable","Long-lived","Family cat"] },
  { name:"American Bobtail",    origin:"USA",           category:"American", coat:"medium",   size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🪶", traits:["Bobbed tail","Wild look","Dog-like","Alert","Loyal"] },
  { name:"American Curl",       origin:"USA",           category:"American", coat:"long",     size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🌙", traits:["Curled ears","Playful","Kitten-like","Gentle","Curious"] },
  { name:"American Wirehair",   origin:"USA",           category:"American", coat:"short",    size:"medium", energy:"moderate", personality:"independent",  emoji:"🌾", traits:["Wiry coat","Unique","Resilient","Calm","Springy"] },
  { name:"Ragdoll",             origin:"USA",           category:"American", coat:"long",     size:"large",  energy:"calm",     personality:"affectionate",  emoji:"🤍", traits:["Docile","Blue eyes","Floppy","Large","Gentle"] },
  { name:"Ragamuffin",          origin:"USA",           category:"American", coat:"long",     size:"large",  energy:"calm",     personality:"affectionate",  emoji:"☁️", traits:["Plush coat","Calm","Friendly","Walnut eyes","Patient"] },
  { name:"Selkirk Rex",         origin:"USA",           category:"American", coat:"medium",   size:"large",  energy:"moderate", personality:"affectionate",  emoji:"🐑", traits:["Curly","Patient","Plush","Sheep-like","Tolerant"] },
  { name:"Havana Brown",        origin:"England",       category:"American", coat:"short",    size:"medium", energy:"moderate", personality:"affectionate",  emoji:"☕", traits:["Chocolate","Curious","Vocal","Green eyes","Tactile"] },
  { name:"Bombay",              origin:"USA",           category:"American", coat:"short",    size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🖤", traits:["Jet-black","Gold eyes","Mini panther","Social","Warm"] },
  { name:"Snowshoe",            origin:"USA",           category:"American", coat:"short",    size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🥿", traits:["White paws","Blue eyes","Pointed","Rare","Social"] },
  { name:"Somali",              origin:"USA",           category:"American", coat:"long",     size:"medium", energy:"active",   personality:"independent",  emoji:"🦊", traits:["Fox-like","Active","Ticked","Bushy tail","Athletic"] },
  { name:"Pixiebob",            origin:"USA",           category:"American", coat:"medium",   size:"large",  energy:"moderate", personality:"loyal",        emoji:"🐾", traits:["Bobcat look","Dog-like","Loyal","Polydactyl","Wild"] },
  { name:"Australian Mist",     origin:"Australia",     category:"American", coat:"short",    size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🌅", traits:["Spotted","Calm","Playful","Misty coat","Gentle"] },
  { name:"Chantilly-Tiffany",   origin:"USA",           category:"American", coat:"long",     size:"medium", energy:"calm",     personality:"affectionate",  emoji:"🍫", traits:["Chocolate","Semi-long","Gentle","Golden eyes","Quiet"] },
  { name:"California Spangled", origin:"USA",           category:"American", coat:"short",    size:"medium", energy:"active",   personality:"independent",  emoji:"⭐", traits:["Spotted","Wild look","Rare","Sleek","Bold"] },
  
  { name:"Sphynx",              origin:"Canada",        category:"Rex",      coat:"hairless", size:"medium", energy:"active",   personality:"affectionate",  emoji:"🫶", traits:["Hairless","Warm","Extrovert","Wrinkled","Suede skin"] },
  { name:"Donskoy",             origin:"Russia",        category:"Rex",      coat:"hairless", size:"medium", energy:"active",   personality:"affectionate",  emoji:"🫧", traits:["Hairless","Wrinkled","Dog-like","Social","Velvety"] },
  { name:"Peterbald",           origin:"Russia",        category:"Rex",      coat:"hairless", size:"medium", energy:"active",   personality:"vocal",        emoji:"🔮", traits:["Elegant","Hairless","Vocal","Svelte","Oriental"] },
  { name:"Devon Rex",           origin:"England",       category:"Rex",      coat:"short",    size:"small",  energy:"active",   personality:"affectionate",  emoji:"🧝", traits:["Wavy coat","Elfin ears","Mischievous","Pixie","Playful"] },
  { name:"Cornish Rex",         origin:"England",       category:"Rex",      coat:"short",    size:"small",  energy:"active",   personality:"vocal",        emoji:"🌀", traits:["Curly coat","Lean","Warm","Athletic","Greyhound-like"] },
  { name:"LaPerm",              origin:"USA",           category:"Rex",      coat:"medium",   size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🌱", traits:["Curly ringlets","Affectionate","Lively","Oregon","Hypoallergenic"] },
  { name:"German Rex",          origin:"Germany",       category:"Rex",      coat:"short",    size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🥨", traits:["Curly","Gentle","Rare","Early mutation","People-loving"] },
  { name:"Ukrainian Levkoy",    origin:"Ukraine",       category:"Rex",      coat:"hairless", size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🌻", traits:["Hairless","Folded ears","Unusual","Dog-faced","Unique"] },
 
  { name:"Bengal",              origin:"USA",           category:"Hybrid",   coat:"short",    size:"large",  energy:"active",   personality:"vocal",        emoji:"🐆", traits:["Leopard spots","Athletic","Wild-look","Dog-like","Bold"] },
  { name:"Savannah",            origin:"USA",           category:"Hybrid",   coat:"short",    size:"large",  energy:"active",   personality:"vocal",        emoji:"🌿", traits:["Tallest breed","Spotted","Exotic","Tall","Bold"] },
  { name:"Chausie",             origin:"USA",           category:"Hybrid",   coat:"short",    size:"large",  energy:"active",   personality:"vocal",        emoji:"🦅", traits:["Jungle look","Athletic","Wild","Leggy","Rare"] },
  { name:"Serengeti",           origin:"USA",           category:"Hybrid",   coat:"short",    size:"medium", energy:"active",   personality:"vocal",        emoji:"🦒", traits:["Spotted","Sleek","Active","Large ears","Long legs"] },
  
  { name:"Munchkin",            origin:"USA",           category:"Unique",   coat:"short",    size:"small",  energy:"active",   personality:"affectionate",  emoji:"🍄", traits:["Short legs","Playful","Ferret-like","Fast","Curious"] },
  { name:"Ojos Azules",         origin:"USA",           category:"Unique",   coat:"short",    size:"medium", energy:"moderate", personality:"affectionate",  emoji:"🔵", traits:["Deep blue eyes","Rare","Unusual","Sapphire","Gentle"] },
  { name:"Lykoi",               origin:"USA",           category:"Unique",   coat:"medium",   size:"medium", energy:"active",   personality:"affectionate",  emoji:"🐺", traits:["Werewolf cat","Roan","Moults","Curious","Wild look"] },
  { name:"Aphrodite Giant",     origin:"Cyprus",        category:"Unique",   coat:"long",     size:"large",  energy:"moderate", personality:"affectionate",  emoji:"🏛️", traits:["Large","Gentle","Natural","Island giant","Hardy"] },
];


const CROSS_RESULTS = {
 
  "Maine Coon×Ragdoll":               { name:"Ragcoon",           desc:"A supremely gentle giant — the Ragdoll's docility meets the Maine Coon's rugged majesty. Enormous, fluffy, and utterly devoted.", traits:["Massive","Silky long coat","Incredibly gentle","Dog-like loyalty","Tufted ears"] },
  "Bengal×Siamese":                   { name:"Bengamese",         desc:"Striking spotted points and boundless chatter. An exotic beauty with the Siamese's social fire and Bengal's wild markings.", traits:["Spotted points","Highly vocal","Energetic","Striking eyes","Athletic"] },
  "Sphynx×Devon Rex":                 { name:"Pixie Nude",        desc:"Bare skin meets elfin curls — the warmest, most social cat imaginable. Tiny, wrinkled, and utterly irresistible.", traits:["Nearly hairless","Curly whiskers","Lap magnet","Comedian","Warm to touch"] },
  "Persian×Ragdoll":                  { name:"Persiandoll",       desc:"Cloud-like fur, flat expressive face, and completely undemanding. The ultimate luxury companion for quiet homes.", traits:["Ultra-fluffy","Flat face","Serene","Blue eyes possible","Regal calm"] },
  "Abyssinian×Bengal":                { name:"Bengyssinian",      desc:"A ticked-coat athlete with leopard ambitions. Double the energy, double the curiosity — pure adventure.", traits:["Ticked spots","Hyper-active","Wild look","Climber","Ancient roots"] },
  "British Shorthair×Russian Blue":   { name:"Russian Brit",      desc:"Dense double plush in pure silvery blue. Calm, dignified, and quietly devoted — the most elegant lap cat.", traits:["Dense blue coat","Very calm","Loyal","Round face","Plush paws"] },
  "Maine Coon×Norwegian Forest Cat":  { name:"Nordic Giant",      desc:"Two great forest cats united — waterproof coat, enormous size, and calm confidence. Nature's perfect outdoor cat.", traits:["Waterproof coat","Massive","Hardy","Excellent climber","Gentle"] },
  "Balinese×Siamese":                 { name:"Silinese",          desc:"A silky-haired Siamese — all the pointed beauty and fierce personality, wrapped in a flowing semi-long coat.", traits:["Silky pointed coat","Very vocal","Intense bond","Graceful","Social"] },
  "Bengal×Sphynx":                    { name:"Spotted Sphinx",    desc:"Hairless with ghost leopard spots — a true showstopper. Wild markings on bare skin, with energy to match.", traits:["Hairless","Ghost spots","High energy","Fearless","Head-turner"] },
  "British Shorthair×Scottish Fold":  { name:"Folded Brit",       desc:"The calmest, roundest, most huggable cat ever conceived. Folded ears on a plush, sturdy British frame.", traits:["Folded ears","Round face","Plush coat","Very calm","Sturdy"] },
  "Ragdoll×Siamese":                  { name:"Siamoll",           desc:"Blue eyes guaranteed. The Ragdoll's docility softens the Siamese's intensity — still chatty, endlessly patient.", traits:["Blue eyes","Pointed markings","Gentle chatter","Affectionate","Large"] },
  "Burmese×Tonkinese":                { name:"Tonmese",           desc:"The most sociable cat alive — two people-obsessed breeds merged into one silky, aqua-eyed companion.", traits:["Aqua-gold eyes","Silky coat","Extremely social","Compact","Playful"] },
  "British Shorthair×Persian":        { name:"Exotic Brit",       desc:"Round, flat-faced, and plushly coated — a teddy bear in cat form. Permanently mildly surprised.", traits:["Flat face","Dense coat","Round eyes","Calm","Low-energy"] },
  "Bengal×Savannah":                  { name:"Savengal",          desc:"The wildest legal cat — tall, spotted, athletic, and utterly fearless. Not for the faint-hearted.", traits:["Tall","Vivid spots","Bold","Dog-like","Wild energy"] },
  "Cornish Rex×Devon Rex":            { name:"Double Rex",        desc:"Maximum curl, minimum fur — wavy whiskers, huge ears, and clown-level personality in a tiny warm body.", traits:["Double curl","Nearly bare","Giant ears","Comedian","Warm"] },
  "Maine Coon×Siamese":               { name:"Maine-ese",         desc:"A large pointed cat with a big voice and bigger heart. Tufted, vocal, and deeply family-devoted.", traits:["Large","Pointed markings","Vocal","Tufted","Family-devoted"] },
  "Abyssinian×Siamese":               { name:"Abyssamese",        desc:"Ancient meets ancient — a ticked, pointed, incredibly vocal athlete. Relentlessly curious and endlessly chatty.", traits:["Ticked points","Very vocal","Athletic","Ancient lineage","Curious"] },
  
  "Donskoy×Sphynx":                   { name:"Double Bare",       desc:"Two hairless genes collide — suede-warm skin, enormous social energy, and a face that demands affection.", traits:["Ultra-hairless","Very warm","Extrovert","Wrinkled","Clingy"] },
  "Peterbald×Siamese":                { name:"Petersburg Blue",   desc:"Svelte, hairless, and devastatingly vocal — the Siamese personality amplified on a naked, whippy frame.", traits:["Hairless","Very vocal","Svelte","Intense bond","Theatrical"] },
  "Cornish Rex×Sphynx":               { name:"Velour Rex",        desc:"Downy, curly fuzz over warm bare skin — maximum softness with zero grooming. Tiny, cuddly, irresistible.", traits:["Velour fuzz","Curly","Warm","Lap cat","Playful"] },
  "Devon Rex×Sphynx":                 { name:"Gremlin",           desc:"Huge ears, bare wrinkled skin, and unstoppable mischief. Looks like a gremlin, acts like a clown.", traits:["Large ears","Nearly bare","Mischievous","Warm","Comedian"] },
  "LaPerm×Selkirk Rex":               { name:"Super Curl",        desc:"Two curl genes combined — ringlets on ringlets, impossibly soft, with a teddy-bear temperament to match.", traits:["Double curl","Ultra-soft","Patient","Ringlets","Affectionate"] },
  "Ukrainian Levkoy×Sphynx":          { name:"Levkoy Nude",       desc:"Hairless with inward-folding ears — the most alien-looking cat imaginable. Gentle and deeply social.", traits:["Hairless","Folded ears","Alien look","Gentle","Social"] },
  "German Rex×Devon Rex":             { name:"Euro Curl",         desc:"Two early European rex mutations merged — fine wavy coat, enormous personality, perpetual kitten energy.", traits:["Fine waves","Playful","Warm","European","Social"] },

  "Chausie×Savannah":                 { name:"Jungle King",       desc:"Two wild-blooded giants united — tall, leggy, spotted, and possessed of boundless athletic energy.", traits:["Jungle tall","Bold spots","Wild energy","Fearless","Athletic"] },
  "Bengal×Chausie":                   { name:"Leopard Chaus",     desc:"Spotted jungle athleticism squared — a wild-looking powerhouse with a surprisingly devoted temperament.", traits:["Wild spots","Leggy","Athletic","Bold","Rare"] },
  "Serengeti×Savannah":               { name:"Serengeti King",    desc:"Both breeds built to resemble wild servals — together they create the closest thing to a legal miniature serval.", traits:["Long legs","Large ears","Bold spots","Wild look","Tall"] },
  "Bengal×Serengeti":                 { name:"Spot Fusion",       desc:"Spots on spots — two separately developed wild-looking breeds that together produce the boldest patterned coat imaginable.", traits:["Vivid spots","Sleek","Athletic","Energetic","Wild"] },
  "Abyssinian×Chausie":               { name:"Desert Runner",     desc:"Ancient ticked athleticism meets jungle cat stature — a long-legged, endlessly curious, impossibly fast cat.", traits:["Leggy","Ticked","Fast","Curious","Athletic"] },
 
  "Birman×Ragdoll":                   { name:"Sacred Rag",        desc:"Two docile, blue-eyed breeds create a serene, silky giant with white gloves and the temperament of an angel.", traits:["White gloves","Blue eyes","Silky","Serene","Large"] },
  "Norwegian Forest Cat×Siberian":    { name:"Boreal Giant",      desc:"Two great Eurasian forest cats — massive, triple-coated, hypoallergenic, and utterly unshakeable.", traits:["Triple coat","Massive","Hypoallergenic","Hardy","Majestic"] },
  "Maine Coon×Siberian":              { name:"Sibermaine",        desc:"A hypoallergenic gentle giant — massive frame, triple coat, tufted ears, and calm dog-like devotion.", traits:["Massive","Triple coat","Tufted","Dog-like","Hypoallergenic"] },
  "Ragdoll×Ragamuffin":               { name:"Cloudpuff",         desc:"Two of the softest, calmest cats combined — an impossibly fluffy, floppy, affectionate cushion of a cat.", traits:["Ultra-fluffy","Very calm","Floppy","Walnut eyes","Gentle"] },
  "Persian×Norwegian Forest Cat":     { name:"Nordic Persian",    desc:"Persian elegance meets Nordic hardiness — long lustrous coat on a sturdy, weatherproof frame.", traits:["Long coat","Sturdy","Regal","Hardy","Calm"] },
  "Himalayan×Birman":                 { name:"Sacred Himalayan",  desc:"Blue eyes, white gloves, pointed silk coat — a regal, sacred-feeling giant with the calmest soul.", traits:["Blue eyes","White gloves","Pointed","Silky","Serene"] },
  "Aphrodite Giant×Maine Coon":       { name:"Titan",             desc:"The two largest natural cat breeds combined — a magnificent, gentle island giant with a tufted, majestic coat.", traits:["Enormous","Gentle","Tufted","Hardy","Island-born"] },
 
  "Oriental Shorthair×Siamese":       { name:"Chromapoint",       desc:"300+ colors with Siamese points — the most visually diverse pointed cat imaginable, endlessly vocal.", traits:["Colorful points","Very vocal","Sleek","Diverse","Chatty"] },
  "Oriental Longhair×Balinese":       { name:"Silk Dragon",       desc:"Two long-haired oriental breeds — flowing, silky, colourful, and irrepressibly chatty all day long.", traits:["Flowing silk","Colorful","Vocal","Graceful","Social"] },
  "Colorpoint Shorthair×Tonkinese":   { name:"Aquapoint",         desc:"Colorpoint variety with aquamarine mink eyes — striking coloured points meet jewel-like eye colour.", traits:["Colorful points","Aqua eyes","Vocal","Social","Lean"] },
  "Burmilla×Tonkinese":               { name:"Silver Tonk",       desc:"A shimmering silver mink coat with aqua-green eyes — social, gentle, and impossibly glamorous.", traits:["Silver-mink coat","Aqua eyes","Sociable","Gentle","Glamorous"] },
  "Tiffanie×Balinese":                { name:"Florentine",        desc:"Two silky longhairs with Asian social personality — a flowing, vocal, graceful companion.", traits:["Flowing silk","Graceful","Vocal","Affectionate","Elegant"] },
  "Siamese×Tonkinese":                { name:"Tonsiamese",        desc:"Siamese intensity meets Burmese warmth — the perfect social cat, vocal but never overwhelming.", traits:["Mink coat","Blue eyes","Very social","Vocal","Warm"] },
 
  "Egyptian Mau×Abyssinian":          { name:"Pharaoh's Runner",  desc:"The two oldest spotted breeds — blazing speed, ticked patterns, and ancient Egyptian heritage.", traits:["Natural spots","Speed","Ticked","Ancient","Athletic"] },
  "Korat×Russian Blue":               { name:"Sapphire",          desc:"Two silver-blue breeds from opposite ends of Eurasia — rare, calm, intensely loyal and shimmering.", traits:["Silver-blue","Calm","Rare","Loyal","Shimmering"] },
  "Chartreux×Russian Blue":           { name:"Blue Monk",         desc:"Two contemplative European blues — the most serene, quietly devoted, beautiful cat in any room.", traits:["Rich blue","Very calm","Devoted","Robust","Dignified"] },
  "Turkish Angora×Balinese":          { name:"Anatolian Silk",    desc:"Two of the most ancient silky breeds — graceful, vocal, and wrapped in flowing single-layer silk.", traits:["Silky","Graceful","Vocal","Ancient","Elegant"] },
  "Turkish Van×Maine Coon":           { name:"Viking Swimmer",    desc:"A water-loving giant — bold, energetic, and large enough to make a splash in any room or puddle.", traits:["Water-loving","Large","Bold","Hardy","Tufted"] },
  "Japanese Bobtail×Manx":            { name:"Bobtail Twins",     desc:"Two naturally tailless breeds — one a lucky Japanese icon, one a rugged Celtic dog-cat. Compact, loyal, and unique.", traits:["Short tail","Lucky","Athletic","Dog-like","Unique"] },
  "Siberian×Russian Blue":            { name:"Russian Forest",    desc:"Two great Russian breeds — hypoallergenic triple coat in shimmering silver-blue, loyal and powerful.", traits:["Silver-blue","Triple coat","Hypoallergenic","Loyal","Powerful"] },
  "Khao Manee×Turkish Angora":        { name:"White Jewel",       desc:"Pure white with odd jewel eyes — two ancient white cats combined into the rarest, most striking cat alive.", traits:["Pure white","Odd eyes","Silky","Rare","Royal"] },
  "Aegean×Cyprus Cat":                { name:"Mediterranean",     desc:"Two ancient Greek island cats — natural, hardy, athletic, and carrying millennia of island history.", traits:["Natural","Island heritage","Athletic","Robust","Ancient"] },
  "Dragon Li×Abyssinian":             { name:"Silk Road Runner",  desc:"China's wild tabby meets Ethiopia's ancient athlete — ticked, lean, and lightning-fast with wild charm.", traits:["Wild tabby","Ticked","Athletic","Ancient","Rare"] },
  "Suphalak×Burmese":                 { name:"Copper Temple",     desc:"Two ancient Southeast Asian breeds — warm copper tones, compact silky body, and deeply people-devoted.", traits:["Copper-warm","Compact","Silky","Devoted","Ancient"] },
 
  "American Shorthair×British Shorthair": { name:"Atlantic Brit", desc:"East meets West in the plushest way — two working shorthairs from either side of the Atlantic, calm and rock-solid.", traits:["Plush","Calm","Hardy","Classic","Family cat"] },
  "Ragdoll×Birman":                   { name:"Sacred Doll",       desc:"Two docile, gloved, blue-eyed beauties — serene, pointed, and impossibly gentle in every way.", traits:["White gloves","Blue eyes","Silk coat","Docile","Sacred"] },
  "Bombay×British Shorthair":         { name:"Panther Brit",      desc:"Jet-black panther looks on a plush British frame — sleek, dark, dignified, and quietly affectionate.", traits:["Jet-black","Plush","Copper eyes","Calm","Dignified"] },
  "Savannah×Serengeti":               { name:"African Prince",    desc:"Two serval-inspired breeds together — impossibly tall, bold spots, large ears, and a voice like a wild cat.", traits:["Very tall","Bold spots","Large ears","Fearless","Wild"] },
  "Somali×Abyssinian":                { name:"Fox Aby",           desc:"Long-haired Abyssinian meets short — double the ticked agouti beauty, with a fox-like bushy tail.", traits:["Ticked","Bushy tail","Athletic","Fox-like","Active"] },
  "Snowshoe×Birman":                  { name:"Snowbird",          desc:"White paws, white gloves, blue eyes — two gloved, pointed cats that create the most elegantly dressed cat.", traits:["White paws","Blue eyes","Pointed","Elegant","Calm"] },
  "Pixiebob×American Bobtail":        { name:"Wild Bob",          desc:"Two American bobcats in spirit — wild-looking, dog-like, loyal, and built like a compact powerhouse.", traits:["Bobbed tail","Wild look","Dog-like","Loyal","Rugged"] },
  "Havana Brown×Bombay":              { name:"Midnight Espresso", desc:"Chocolate meets jet-black — two of the richest, deepest coat colours in an incredibly warm, social cat.", traits:["Deep chocolate","Warm","Social","Green-gold eyes","Rare"] },
  "California Spangled×Bengal":       { name:"Hollywood Leopard", desc:"Two spotted breeds deliberately designed to mimic wildcats — together they're the boldest patterned cat.", traits:["Bold spots","Wild look","Athletic","Sleek","Statement cat"] },
  "Australian Mist×Burmese":          { name:"Misty Temple",      desc:"The mist pattern meets Burmese devotion — a gentle, sociable cat with a shimmering spotted coat.", traits:["Misty spots","Gentle","Social","Devoted","Calm"] },
  "Chantilly-Tiffany×Persian":        { name:"Velvet Truffle",    desc:"Chocolate silk meets Persian luxury — the softest, calmest, most indulgent cat in rich mocha tones.", traits:["Chocolate silk","Ultra-calm","Soft","Golden eyes","Regal"] },
 
  "Munchkin×Persian":                 { name:"Teacup Doll",       desc:"Short legs, flat face, enormous fluff — the world's most impractically adorable cat.", traits:["Short legs","Flat face","Fluffy","Tiny","Adorable"] },
  "Munchkin×Bengal":                  { name:"Pocket Leopard",    desc:"Leopard spots on little legs — all the wild Bengal energy in the smallest, most surprising package.", traits:["Short legs","Leopard spots","Energetic","Bold","Tiny"] },
  "Munchkin×Scottish Fold":           { name:"Cinnamon Roll",     desc:"Folded ears, short legs, round face — a cat that looks like it was designed by committee to be maximum cute.", traits:["Folded ears","Short legs","Round","Sweet","Tiny"] },
  "Lykoi×Devon Rex":                  { name:"Goblin",            desc:"Werewolf fur meets elfin ears and wavy coat — the most unearthly-looking cat that somehow also fits in your lap.", traits:["Roan wavy","Elfin","Eerie look","Mischievous","Unique"] },
  "Lykoi×Sphynx":                     { name:"Specter",           desc:"Bare skin with ghostly roan patches — a werewolf going bald, with the warmest, most social personality.", traits:["Patchy bare","Roan","Warm skin","Social","Dramatic"] },
  "Ojos Azules×Siamese":              { name:"Sapphire Point",    desc:"Blue eyes deeper than the deepest Siamese — two blue-eyed breeds that together achieve impossible eye colour.", traits:["Deep sapphire eyes","Pointed","Vocal","Rare","Striking"] },
  "Ojos Azules×Russian Blue":         { name:"Azure Dream",       desc:"Blue coat, blue eyes — the most monochromatic, serene, otherworldly blue cat ever conceived.", traits:["Blue-grey","Sapphire eyes","Calm","Rare","Ethereal"] },
  "Aphrodite Giant×Norwegian Forest Cat": { name:"Olympus",       desc:"Two ancient large natural breeds — a massive, mythic cat with a double coat and the temperament of a gentle god.", traits:["Enormous","Double coat","Hardy","Gentle","Majestic"] },
  
  "Sphynx×Scottish Fold":             { name:"Foldless",          desc:"Hairless with folded ears — the most alien-looking cat on earth, but endlessly warm and adoring.", traits:["Hairless","Folded ears","Warm","Social","Head-turner"] },
  "Persian×Siamese":                  { name:"Himalayan",         desc:"This cross already exists and it's called the Himalayan — flat-faced perfection with Siamese blue points.", traits:["Blue eyes","Flat face","Silky","Pointed","Serene"] },
  "Burmese×Russian Blue":             { name:"Cobalt",            desc:"Compact silky Burmese with Russian Blue's shimmering coat — a small, devoted, blue-grey shadow.", traits:["Blue-grey","Compact","Devoted","Silky","Quiet"] },
  "Cornish Rex×Abyssinian":           { name:"Curly Aby",         desc:"Ticked curls — the Abyssinian's ancient athletic fire wrapped in a Cornish Rex's fine wavy coat.", traits:["Ticked curls","Athletic","Lean","Warm","Energetic"] },
  "Singapura×Burmese":                { name:"Micro Muse",        desc:"Tiny, compact, golden-eyed, and completely obsessed with their owner — the smallest devotion possible.", traits:["Tiny","Golden eyes","Devoted","Social","Compact"] },
  "Chartreux×British Shorthair":      { name:"Blue Gargoyle",     desc:"Two stocky, plush, blue-grey breeds — a beautifully round, serene, smile-faced cat of great dignity.", traits:["Blue-grey","Plush","Round","Dignified","Smiling"] },
  "Aegean×Turkish Angora":            { name:"Aegean Silk",       desc:"Mediterranean island heritage wrapped in Turkish silk — athletic, vocal, and historically magnificent.", traits:["Silky","Athletic","Vocal","Ancient","Island cat"] },
  "German Rex×LaPerm":                { name:"Continental Curl",  desc:"Two independently discovered European curly breeds — layers of fine waves and ringlets, gentle and rare.", traits:["Layered curls","Gentle","Rare","Soft","European"] },
};

function getOffspring(a, b) {
  const key1 = [a.name, b.name].sort().join('×');
  if (CROSS_RESULTS[key1]) return CROSS_RESULTS[key1];


  const coatMap = { long:'long', short:'short', hairless:'very short', medium:'medium' };
  const blendedTraits = [...new Set([...a.traits.slice(0,2), ...b.traits.slice(0,2), 'Hybrid vigour'])];
  const energyBlend = a.energy === b.energy ? a.energy
    : (a.energy === 'active' || b.energy === 'active') ? 'active' : 'moderate';
  return {
    name: a.name.split(' ')[0].substring(0,4) + b.name.split(' ')[0].substring(0,4),
    desc: `A unique blend of the ${a.name}'s ${a.traits[0].toLowerCase()} nature and the ${b.name}'s ${b.traits[0].toLowerCase()} character — ${energyBlend} energy with a ${coatMap[a.coat] || a.coat} coat.`,
    traits: blendedTraits,
  };
}

(function initBuilder() {
  const grid      = document.getElementById('breedPickerGrid');
  if (!grid) return;

  const slot1El   = document.getElementById('slot1');
  const slot2El   = document.getElementById('slot2');
  const crossEl   = document.getElementById('bpCrossSymbol');
  const submitBtn = document.getElementById('builderSubmit');
  const resultEl  = document.getElementById('builderResult');
  const selected  = [null, null];

  BREED_DB.forEach(breed => {
    const card = document.createElement('button');
    card.className = 'bp-deck-card';
    card.dataset.name = breed.name;
    card.innerHTML = `
      <span class="bp-deck-card-emoji">${breed.emoji}</span>
      <span class="bp-deck-card-name">${breed.name}</span>
      <span class="bp-deck-card-meta">${breed.origin}</span>
      <span class="bp-deck-card-energy">${breed.energy} · ${breed.size}</span>`;
    card.addEventListener('click', () => pickBreed(breed, card));
    grid.appendChild(card);
  });

  function pickBreed(breed, card) {
    const idx = selected.indexOf(breed);
    if (idx > -1) {
      selected[idx] = null;
      card.classList.remove('selected-1', 'selected-2');
      card.removeAttribute('data-badge');
      fillSlot(idx + 1, null);
      syncState(); return;
    }
    const emptySlot = selected[0] === null ? 0 : selected[1] === null ? 1 : null;
    if (emptySlot === null) return;
    selected[emptySlot] = breed;
    card.classList.add(emptySlot === 0 ? 'selected-1' : 'selected-2');
    card.dataset.badge = emptySlot === 0 ? 'P1' : 'P2';
    fillSlot(emptySlot + 1, breed);
    syncState();
  }

  function fillSlot(slotNum, breed) {
    const slotEl = slotNum === 1 ? slot1El : slot2El;
    slotEl.innerHTML = '';
    if (!breed) {
      slotEl.classList.remove('has-card');
      slotEl.innerHTML = `<div class="bp-slot-placeholder">
        <span class="bp-slot-placeholder-icon">🐱</span>
        <span class="bp-slot-placeholder-text">Pick a breed</span>
      </div>`;
      return;
    }
    slotEl.classList.add('has-card');
    const filled = document.createElement('div');
    filled.className = 'bp-filled-card';
    filled.innerHTML = `
      <span class="bp-fc-emoji">${breed.emoji}</span>
      <span class="bp-fc-name">${breed.name}</span>
      <span class="bp-fc-origin">${breed.origin}</span>
      <div class="bp-fc-traits">${breed.traits.slice(0,3).map(t=>`<span class="trait">${t}</span>`).join('')}</div>`;
    const removeBtn = document.createElement('button');
    removeBtn.className = 'bp-remove-btn';
    removeBtn.textContent = '✕';
    removeBtn.addEventListener('click', e => {
      e.stopPropagation();
      const i = slotNum - 1;
      const b = selected[i];
      if (b) {
        const c = grid.querySelector(`[data-name="${b.name}"]`);
        if (c) { c.classList.remove('selected-1','selected-2'); c.removeAttribute('data-badge'); }
        selected[i] = null;
        fillSlot(slotNum, null);
        syncState();
      }
    });
    filled.appendChild(removeBtn);
    slotEl.appendChild(filled);
  }

  function syncState() {
    const ready = selected[0] !== null && selected[1] !== null;
    submitBtn.disabled = !ready;
    submitBtn.classList.toggle('ready', ready);
    crossEl.classList.toggle('ready', ready);
  }

  submitBtn.addEventListener('click', () => {
    const [a, b] = selected;
    const offspring = getOffspring(a, b);
    resultEl.style.display = 'block';
    resultEl.innerHTML = `
      <div class="br-result-wrapper">
        <div class="br-result-center">
          <p class="br-result-eyebrow">✦ &nbsp; Hybrid Offspring Revealed &nbsp; ✦</p>
          <div class="br-result-parents">
            <div class="br-result-parent">
              <span class="br-result-parent-emoji">${a.emoji}</span>
              <span class="br-result-parent-name">${a.name}</span>
            </div>
            <span class="br-result-plus">×</span>
            <div class="br-result-parent">
              <span class="br-result-parent-emoji">${b.emoji}</span>
              <span class="br-result-parent-name">${b.name}</span>
            </div>
          </div>
          <div class="br-result-name"><em>${offspring.name}</em></div>
          <p class="br-result-desc">${offspring.desc}</p>
          <div class="br-result-traits">
            ${offspring.traits.map(t => `<span class="trait">${t}</span>`).join('')}
          </div>
          <div class="br-result-dna">
            <span class="br-dna-label">${a.name}</span>
            <div class="br-dna-track"><div class="br-dna-track-fill"></div></div>
            <span class="br-dna-label">${b.name}</span>
          </div>
          <button class="br-try-again" id="brTryAgain">← Try a Different Pair</button>
        </div>
      </div>`;
    resultEl.scrollIntoView({ behavior:'smooth', block:'nearest' });
    document.getElementById('brTryAgain').addEventListener('click', () => {
      resultEl.style.display = 'none';
      selected[0] = null; selected[1] = null;
      grid.querySelectorAll('.bp-deck-card').forEach(c => {
        c.classList.remove('selected-1','selected-2');
        c.removeAttribute('data-badge');
      });
      fillSlot(1, null); fillSlot(2, null);
      syncState();
    });
  });

  syncState();
})();


const LS_QUESTIONS = [
  { q:"How would you describe your home?",
    opts:[
      { icon:"🏠", text:"Small apartment — cosy and compact",       tags:{ energy:"calm",     size:"small",  personality:"independent" } },
      { icon:"🏡", text:"House with a garden — space to roam",      tags:{ energy:"active",   size:"large",  personality:"independent" } },
      { icon:"👨‍👩‍👧", text:"Busy family home — always someone around", tags:{ energy:"moderate",              personality:"affectionate" } },
      { icon:"🤫", text:"Quiet home — I value peace and calm",      tags:{ energy:"calm",                  personality:"loyal"        } },
    ]
  },
  { q:"How much time can you dedicate to your cat each day?",
    opts:[
      { icon:"⏱️", text:"Under an hour — I'm quite busy",          tags:{ personality:"independent", energy:"calm"     } },
      { icon:"🕐", text:"1–2 hours of play and cuddles",            tags:{ energy:"moderate",         personality:"affectionate" } },
      { icon:"🎮", text:"As much as it needs — I love interaction", tags:{ energy:"active",           personality:"vocal"        } },
      { icon:"🛋️", text:"I want a lap cat, not a workout partner", tags:{ energy:"calm",             personality:"affectionate" } },
    ]
  },
  { q:"How do you feel about cat hair around the home?",
    opts:[
      { icon:"✂️", text:"I'll groom daily — I love the fluff",     tags:{ coat:"long"     } },
      { icon:"🪮", text:"Some shedding is fine, nothing extreme",   tags:{ coat:"short"    } },
      { icon:"🧼", text:"Prefer low-shedding or hypoallergenic",    tags:{ coat:"medium"   } },
      { icon:"❌", text:"Absolutely no fur — I have allergies",     tags:{ coat:"hairless" } },
    ]
  },
  { q:"What size cat appeals to you most?",
    opts:[
      { icon:"🐭", text:"Tiny and delicate — easy to carry",        tags:{ size:"small"  } },
      { icon:"🐱", text:"Average — a classic cat size",             tags:{ size:"medium" } },
      { icon:"🦁", text:"Big and majestic — a presence in the room",tags:{ size:"large"  } },
      { icon:"🤷", text:"Size doesn't matter to me",                tags:{}              },
    ]
  },
  { q:"How do you feel about a vocal cat?",
    opts:[
      { icon:"🔇", text:"Quiet please — I prefer silent companions",tags:{ personality:"independent", energy:"calm"   } },
      { icon:"💬", text:"Some chatter is lovely",                   tags:{ personality:"affectionate"                } },
      { icon:"📢", text:"I love a chatty cat — the more the better",tags:{ personality:"vocal",        energy:"active"} },
      { icon:"🎵", text:"Only speaks when it really matters",       tags:{ personality:"loyal"                       } },
    ]
  },
  { q:"Do you have children or other pets?",
    opts:[
      { icon:"👶", text:"Yes — young children at home",             tags:{ personality:"affectionate", energy:"calm"     } },
      { icon:"🐶", text:"Yes — dogs or other cats",                 tags:{ personality:"affectionate", energy:"moderate" } },
      { icon:"🙅", text:"No — just me (or adults only)",            tags:{ personality:"loyal"                          } },
      { icon:"🐟", text:"Other quiet pets, like fish or birds",     tags:{ energy:"calm", personality:"independent"     } },
    ]
  },
  { q:"What's your ideal cat personality?",
    opts:[
      { icon:"🤗", text:"Velcro cat — always wants to cuddle",      tags:{ personality:"affectionate" } },
      { icon:"😎", text:"Independent — does its own thing",         tags:{ personality:"independent"  } },
      { icon:"🎭", text:"Entertainer — playful and expressive",     tags:{ personality:"vocal", energy:"active" } },
      { icon:"🛡️", text:"Loyal shadow — follows just me",          tags:{ personality:"loyal"        } },
    ]
  },
  { q:"Your lifestyle is best described as…",
    opts:[
      { icon:"📚", text:"Homebody — I'm here most of the day",     tags:{ personality:"affectionate", energy:"moderate" } },
      { icon:"🏃", text:"Active — outdoorsy and energetic",         tags:{ energy:"active", size:"large"                } },
      { icon:"💼", text:"Professional — out during the day",        tags:{ personality:"independent", energy:"calm"     } },
      { icon:"🧘", text:"Relaxed and low-key",                      tags:{ energy:"calm", personality:"loyal"           } },
    ]
  },
];

const LS_BREEDS = [
  { name:"Ragdoll",           tagline:"The perfect companion for a calm, loving home",
    desc:"Ragdolls go limp in your arms, follow you room to room, and greet every family member with equal warmth. The most laid-back large breed in existence.",
    why:"Your answers suggest you want warmth without demanding energy — a cat that's present, affectionate, and completely drama-free.",
    traits:["Docile","Gentle","Large","Blue eyes","Family-friendly"],
    scores:{ energy:"calm", personality:"affectionate", coat:"long", size:"large" } },
  { name:"British Shorthair", tagline:"Dignified, easygoing, and quietly devoted",
    desc:"The ultimate low-maintenance companion — affectionate without being needy, calm without being boring. Adapts to any lifestyle effortlessly.",
    why:"Your lifestyle calls for a cat that's steady and unfussy — one that integrates into your routine rather than disrupting it.",
    traits:["Calm","Plush coat","Hardy","Adaptable","Easygoing"],
    scores:{ energy:"calm", personality:"independent", coat:"short", size:"large" } },
  { name:"Siamese",           tagline:"For those who want a true conversationalist",
    desc:"Strikingly beautiful, fiercely social, and famously chatty. They form intense bonds and aren't shy about expressing every opinion.",
    why:"You crave connection and interaction — the Siamese matches your energy and wants to be involved in everything you do.",
    traits:["Vocal","Pointed","Blue eyes","Social","Intense"],
    scores:{ energy:"active", personality:"vocal", coat:"short", size:"medium" } },
  { name:"Maine Coon",        tagline:"A majestic, dog-like companion for active homes",
    desc:"The largest domestic breed with the warmest personality. They walk beside you like a dog, play enthusiastically, and still have true feline independence.",
    why:"You have the energy and space to match a big personality — the Maine Coon will fill your home with character.",
    traits:["Gentle giant","Dog-like","Tufted ears","Playful","Loyal"],
    scores:{ energy:"moderate", personality:"loyal", coat:"long", size:"large" } },
  { name:"Sphynx",            tagline:"The hairless extrovert who demands your attention",
    desc:"No fur — and no filter. Warm to the touch, acrobatic, and endlessly entertaining. Thrives when they're the centre of attention.",
    why:"You want interaction and connection — and don't mind a cat that's a little dramatic about getting it.",
    traits:["Hairless","Warm","Clingy","Extrovert","Unique"],
    scores:{ energy:"active", personality:"affectionate", coat:"hairless", size:"medium" } },
  { name:"Russian Blue",      tagline:"A loyal, reserved companion for quieter lives",
    desc:"Bonds deeply to one person, maintains dignified reserve with everyone else. Quiet, intelligent, and thrives in calm homes.",
    why:"You value loyalty over noise — the Russian Blue will be your devoted shadow without demanding constant attention.",
    traits:["Reserved","Loyal","Blue-grey","Intelligent","Quiet"],
    scores:{ energy:"calm", personality:"loyal", coat:"short", size:"medium" } },
  { name:"Bengal",            tagline:"For active owners who want a wild edge",
    desc:"Miniature leopard looks and matching energy. Needs space, stimulation, and an owner who can match their athleticism.",
    why:"Your active lifestyle and desire for a dynamic companion make the Bengal a natural match.",
    traits:["Leopard spots","Athletic","Bold","Energetic","Wild-look"],
    scores:{ energy:"active", personality:"vocal", coat:"short", size:"large" } },
  { name:"Persian",           tagline:"Aristocratic serenity for the devoted homebody",
    desc:"The royalty of the cat world — calm, beautiful, and utterly non-demanding of activity. Requires daily grooming but rewards with regal presence.",
    why:"Your calm home and preference for a peaceful companion aligns perfectly with the Persian's serene nature.",
    traits:["Flat-face","Silky coat","Quiet","Regal","Calm"],
    scores:{ energy:"calm", personality:"independent", coat:"long", size:"large" } },
  { name:"Devon Rex",         tagline:"The elfin comedian who lives in your lap",
    desc:"Large ears, curly whiskers, and an impish personality to match. Loves warmth and brings non-stop entertainment.",
    why:"You want a cat full of character and affection who thrives in an interactive, playful environment.",
    traits:["Curly coat","Elfin ears","Playful","Lap cat","Warm"],
    scores:{ energy:"active", personality:"affectionate", coat:"hairless", size:"small" } },
  { name:"Abyssinian",        tagline:"The athlete for curious, active owners",
    desc:"Ancient, lean, and relentlessly inquisitive. Every surface is a climbing frame. Bonds well but prizes independence.",
    why:"Your active lifestyle and appreciation for independent spirit makes the Abyssinian an ideal match.",
    traits:["Active","Curious","Ticked coat","Athletic","Ancient"],
    scores:{ energy:"active", personality:"independent", coat:"short", size:"medium" } },
  { name:"Burmese",           tagline:"A warm-hearted companion for busy families",
    desc:"Follows owners everywhere, gets along with children and dogs. Compact, affectionate, and endlessly entertaining.",
    why:"Your busy, social household calls for an adaptable companion who thrives in the middle of family life.",
    traits:["Affectionate","Social","Compact","Silky","People-lover"],
    scores:{ energy:"moderate", personality:"affectionate", coat:"short", size:"medium" } },
  { name:"Singapura",         tagline:"Tiny in size, enormous in personality",
    desc:"The world's smallest breed — bold, curious, and constantly engaged. Their permanently wide eyes are irresistible.",
    why:"You want something small and manageable but bursting with life — the Singapura delivers far beyond its size.",
    traits:["Tiny","Big eyes","Curious","Kitten-faced","Bold"],
    scores:{ energy:"active", personality:"affectionate", coat:"short", size:"small" } },
];

function scoreLifestyle(tags) {
  return LS_BREEDS.map(b => {
    let s = 0;
    if (tags.energy      && b.scores.energy      === tags.energy)      s += 3;
    if (tags.personality && b.scores.personality === tags.personality) s += 4;
    if (tags.coat        && b.scores.coat        === tags.coat)        s += 2;
    if (tags.size        && b.scores.size        === tags.size)        s += 1;
    return { ...b, score: s };
  }).sort((a, b) => b.score - a.score);
}

(function initLifestyle() {
  const startBtn = document.getElementById('lifestyleStartBtn');
  if (!startBtn) return;
  startBtn.addEventListener('click', run);

  function run() {
    let current = 0;
    const tags = {};
    const content   = document.getElementById('lifestyleContent');
    const qNumEl    = document.getElementById('lsQNum');
    const progLabel = document.getElementById('lsProgressLabel');

    function render() {
      const q = LS_QUESTIONS[current];
      qNumEl.textContent    = current + 1;
      progLabel.textContent = `${current + 1} of ${LS_QUESTIONS.length}`;

      content.innerHTML = `
        <div class="ls-progress">
          <div class="ls-progress-bar" style="width:${(current/LS_QUESTIONS.length)*100}%"></div>
        </div>
        <p class="ls-question">${q.q}</p>
        <div class="ls-options">
          ${q.opts.map((o,i) => `
            <button class="ls-opt" data-idx="${i}">
              <span class="ls-opt-icon">${o.icon}</span>
              <span class="ls-opt-text">${o.text}</span>
            </button>`).join('')}
        </div>`;

      content.querySelectorAll('.ls-opt').forEach(btn => {
        btn.addEventListener('click', () => {
          content.querySelectorAll('.ls-opt').forEach(b => b.classList.remove('chosen'));
          btn.classList.add('chosen');
          Object.assign(tags, q.opts[parseInt(btn.dataset.idx)].tags);
          setTimeout(() => {
            current++;
            current < LS_QUESTIONS.length ? render() : showResult();
          }, 340);
        });
      });
    }

    function showResult() {
      const ranked = scoreLifestyle(tags);
      const best   = ranked[0];
      const alts   = ranked.slice(1, 3);
      qNumEl.textContent    = '✓';
      progLabel.textContent = 'Complete!';

      content.innerHTML = `
        <div class="ls-progress"><div class="ls-progress-bar" style="width:100%"></div></div>
        <div class="ls-result">
          <p class="ls-result-eyebrow">✦ Your Ideal Breed</p>
          <div class="ls-result-name">${best.name}</div>
          <div class="ls-result-tagline">${best.tagline}</div>
          <p class="ls-result-desc">${best.desc}</p>
          <div class="ls-result-why"><strong>Why you?</strong> ${best.why}</div>
          <div class="ls-result-traits">${best.traits.map(t=>`<span class="trait">${t}</span>`).join('')}</div>
          <p class="br-alt-label" style="margin-bottom:.6rem">You might also love</p>
          <div class="br-alt-list" style="margin-bottom:1.8rem">${alts.map(b=>`<span class="br-alt-chip">${b.name}</span>`).join('')}</div>
          <div class="ls-result-actions">
            <a href="breeds.html" class="btn-primary" style="display:inline-flex">Browse All Breeds →</a>
            <button class="ls-restart" id="lsRestart">Take Quiz Again</button>
          </div>
        </div>`;

      document.getElementById('lsRestart').addEventListener('click', run);
    }

    render();
  }
})();


(function initGameTabs() {
  const tabs = document.querySelectorAll('.game-tab');
  if (!tabs.length) return;
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.game-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.game-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('game-' + tab.dataset.game).classList.add('active');
    });
  });
})();


const BREED_VARIATIONS = {
  "Abyssinian":          [ {name:"Ruddy",      desc:"The original warm tawny-brown with black ticking — the classic Aby look."}, {name:"Sorrel",    desc:"Warm cinnamon-red with chocolate ticking, sometimes called Cinnamon."}, {name:"Blue",       desc:"Warm beige with blue-grey ticking, a softer, misty version."}, {name:"Fawn",       desc:"Pale cream with warm pinkish-cocoa ticking — the rarest natural colour."} ],
  "Egyptian Mau":        [ {name:"Silver",     desc:"Pale silver ground with charcoal spots — the most recognised Mau colour."}, {name:"Bronze",    desc:"Warm bronze-brown with dark brown spotting."}, {name:"Smoke",      desc:"Black-tipped silver with charcoal spots that seem to float."}, {name:"Black",      desc:"Jet solid black, not shown but occasionally produced."} ],
  "Turkish Angora":      [ {name:"White",      desc:"The iconic pure white — sometimes with odd eyes (one blue, one amber)."}, {name:"Tabby",     desc:"Classic or mackerel tabby patterns in various ground colours."}, {name:"Bicolour",   desc:"White with patches of colour — bold and graphic."}, {name:"Solid",      desc:"Any solid colour including black, blue, red, and cream."} ],
  "Turkish Van":         [ {name:"Van Pattern",desc:"White body with coloured head patches and coloured tail — the defining look."}, {name:"Bicolour",  desc:"More extensive colouring on the body while retaining the van pattern."}, {name:"Solid",      desc:"Rarely, some vans carry genes producing solid coats."}, {name:"Tabby",      desc:"Tabby markings within the coloured areas of the van pattern."} ],
  "Siamese":             [ {name:"Seal Point", desc:"Darkest points — deep brown-black on cream/fawn body. The original Siamese."}, {name:"Blue Point", desc:"Cool blue-grey points on a glacial white body."}, {name:"Chocolate",  desc:"Warm milk-chocolate points on ivory, a lighter, warmer look."}, {name:"Lilac Point", desc:"Pinkish-grey frosted points on a magnolia body — rarest traditional point."} ],
  "Korat":               [ {name:"Blue",       desc:"The only accepted colour — uniform silver-blue from root to tip with a silver sheen."} ],
  "Burmese":             [ {name:"Sable",      desc:"Rich, warm dark brown — the original Burmese colour."}, {name:"Champagne", desc:"Warm honey-beige shading to pale gold."}, {name:"Blue",       desc:"Soft medium grey with warm fawn undertones."}, {name:"Platinum",   desc:"Pale silvery-grey with warm pinkish tones, the palest Burmese."} ],
  "Japanese Bobtail":    [ {name:"Mi-ke",      desc:"Tricolour — red, black, and white — the traditional lucky pattern."}, {name:"Bicolour",  desc:"White with one other colour — very common and striking."}, {name:"Solid",      desc:"Any single colour including black, red, white, or blue."}, {name:"Tabby",      desc:"Tabby markings in red, brown, or blue on white."} ],
  "Chartreux":           [ {name:"Blue",       desc:"Any shade of blue-grey from ash to slate is accepted — the only colour."} ],
  "Sokoke":              [ {name:"Classic Tabby", desc:"Modified blotched tabby with tree-bark wood-grain pattern — the only pattern."} ],
  "Siberian":            [ {name:"All colours", desc:"The Siberian accepts virtually every colour and pattern including colourpoint (Neva Masquerade)."}, {name:"Neva Masquerade", desc:"The colourpoint Siberian — blue-eyed with Siamese-style points on a flowing coat."} ],
  "Aegean":              [ {name:"Bicolour",  desc:"White combined with one or more colours — the defining Aegean pattern."}, {name:"Tricolour", desc:"White with two other colours, often tortoiseshell and white."} ],
  "Khao Manee":          [ {name:"White + Blue eyes", desc:"Pure white, both eyes blue — considered the most valuable."}, {name:"White + Gold eyes", desc:"Pure white with amber/gold eyes."}, {name:"White + Odd eyes", desc:"One blue, one gold — the rarest and most prized variant."} ],
  "Maine Coon":          [ {name:"Brown Tabby",desc:"Classic warm brown mackerel tabby — the most iconic Maine Coon look."}, {name:"Silver Tabby", desc:"Striking silver ground with dark tabby markings."}, {name:"Tortoiseshell", desc:"Red and black patchwork, females only."}, {name:"Bicolour",  desc:"Any colour with white — clean, bold patches."}, {name:"Solid White", desc:"Pure white with gold or odd eyes."} ],
  "Norwegian Forest Cat":[ {name:"Brown Tabby",desc:"The classic forest cat — warm brown with bold tabby markings."}, {name:"Bicolour",  desc:"White with any colour, often dramatic chest and paw markings."}, {name:"Solid Black",desc:"Jet black with no markings — sleek and dramatic."}, {name:"Silver",    desc:"Shimmering silver ground with dark tabby markings."} ],
  "British Shorthair":   [ {name:"Blue",       desc:"The most iconic BS — uniform medium blue-grey, the British Blue."}, {name:"Golden",    desc:"Warm rich gold with green eyes — one of the most sought-after varieties."}, {name:"Silver Tabby", desc:"Silver ground with bold tabby markings."}, {name:"Colourpoint",desc:"Siamese-style points in various colours."}, {name:"Bicolour",  desc:"Any colour with white — crisp and clean."} ],
  "Scottish Fold":       [ {name:"All colours",desc:"Accepted in virtually all colours and patterns — the ears are the constant."}, {name:"Folded",    desc:"Tightly folded ears lying flat — the classic look."}, {name:"Single Fold",desc:"Ears folded once — a softer, less extreme version."} ],
  "Russian Blue":        [ {name:"Blue",       desc:"The only accepted colour — uniform blue-grey with brilliant green eyes."} ],
  "Manx":                [ {name:"Rumpy",      desc:"Completely tailless — the show-standard Manx with only a dimple."}, {name:"Rumpy Riser",desc:"A tiny stub of 1-3 vertebrae, barely visible."}, {name:"Stumpy",    desc:"A short partial tail."}, {name:"Longy",     desc:"A near-normal length tail — technically a Manx but not shown."} ],
  "Persian":             [ {name:"Traditional", desc:"'Doll face' Persian with a less extreme flat face — classic old-style look."}, {name:"Peke-face", desc:"The most extreme flat face — ultra-compressed nose and very round head."}, {name:"Golden",    desc:"Warm golden undercoat with dark tipping — stunning in sunlight."}, {name:"Silver Shaded", desc:"Pale silver with dark tipping creating a sparkling look."}, {name:"Colourpoint",desc:"Himalayan: Siamese-style colour points on a Persian body."} ],
  "Birman":              [ {name:"Seal Point", desc:"Dark brown points on golden-cream body, always with white gloves."}, {name:"Blue Point", desc:"Cool grey-blue points on pale grey body."}, {name:"Chocolate",  desc:"Warm milk-chocolate points on ivory."}, {name:"Lilac Point", desc:"Pale pinkish-grey points on near-white."}, {name:"Red/Cream",  desc:"Warm red or pale cream points."} ],
  "Cymric":              [ {name:"All colours",desc:"Cymric appears in any colour the Manx does — tabby, solid, bicolour, tortie."} ],
  "Exotic Shorthair":    [ {name:"All Persian colours",desc:"Same colour range as the Persian: golden, silver, colourpoint, bicolour, and solid."}, {name:"Silver Tabby", desc:"Silver ground with dark tabby — popular show variety."} ],
  "British Longhair":    [ {name:"Blue",       desc:"The most popular — a fluffy version of the British Blue."}, {name:"Golden",    desc:"Rich golden long coat with green eyes."}, {name:"Silver",    desc:"Shimmering silver with tabby markings."} ],
  "Himalayan":           [ {name:"Seal Point", desc:"Dark seal-brown points on pale fawn body."}, {name:"Blue Point", desc:"Blue-grey points on white."}, {name:"Flame Point", desc:"Orange-red points on cream."}, {name:"Tortie Point",desc:"Mottled red and brown points."}, {name:"Lynx Point", desc:"Tabby patterning within the points."} ],
  "Nebelung":            [ {name:"Blue",       desc:"The only colour — long silver-blue coat with a misty sheen."} ],
  "Balinese":            [ {name:"Seal Point", desc:"Classic dark-brown pointed Balinese with flowing coat."}, {name:"Blue Point", desc:"Cool grey-blue points, silky and graceful."}, {name:"Chocolate",  desc:"Warm milk-chocolate points."}, {name:"Lilac Point", desc:"Pale lilac-grey points — the most ethereal."} ],
  "Tonkinese":           [ {name:"Natural Mink",desc:"The original mink — warm medium brown (Burmese) shaded with darker Siamese points."}, {name:"Blue Mink",  desc:"Soft grey body with slate-blue points."}, {name:"Champagne Mink",desc:"Warm honey-beige body with medium brown points."}, {name:"Platinum Mink",desc:"Pale silver-grey with pewter points — the palest variety."} ],
  "Singapura":           [ {name:"Sepia Agouti",desc:"The only accepted colour — warm ivory with dark brown ticked agouti coat."} ],
  "Burmilla":            [ {name:"Silver Shaded",desc:"White undercoat tipped with any colour — creates the characteristic shimmering glow."}, {name:"Silver Tipped", desc:"Less tipping than shaded — very pale, sparkly look."}, {name:"Golden",    desc:"Warm gold undercoat with tipping."} ],
  "Oriental Shorthair":  [ {name:"Ebony (Black)", desc:"Solid dense black — one of over 300 combinations."}, {name:"Chestnut",  desc:"Warm chocolate brown — formerly called Havana."}, {name:"Cinnamon",  desc:"Warm reddish-brown, lighter than chestnut."}, {name:"Blue",      desc:"Medium blue-grey — cool and elegant."}, {name:"Tabby",     desc:"Any tabby pattern in any colour — enormous variety."}, {name:"Bicolour",  desc:"White with any colour — the most graphic variety."} ],
  "Colorpoint Shorthair":[ {name:"Red Point",  desc:"Orange-red points on cream body."}, {name:"Cream Point",desc:"Pale cream points on near-white body."}, {name:"Lynx Point", desc:"Tabby rings within the points — striped legs and tail."}, {name:"Tortie Point",desc:"Mottled red and base colour within the points."} ],
  "Ragdoll":             [ {name:"Bicolour",   desc:"White inverted 'V' on face, white legs and belly — the most popular pattern."}, {name:"Colourpoint",desc:"Classic Siamese-style points with no white."}, {name:"Mitted",    desc:"Points plus white paws and chin."}, {name:"Lynx",      desc:"Tabby striping within all patterns."}, {name:"Tortie",    desc:"Mottled red/cream within the points."} ],
  "Ragamuffin":          [ {name:"All colours",desc:"Ragamuffin is accepted in every colour and pattern — broadest variety of any breed."} ],
  "Selkirk Rex":         [ {name:"All colours",desc:"Accepted in all colours and patterns — the curls are the constant."}, {name:"Longhair",  desc:"Long, curly coat — fuller and more dramatic."}, {name:"Shorthair", desc:"Short, curly coat — tighter ringlets, plusher."} ],
  "Havana Brown":        [ {name:"Havana Brown",desc:"Warm, even chocolate brown — the only accepted colour."}, {name:"Lilac",     desc:"A pale pinkish-grey variant accepted in some associations."} ],
  "Bombay":              [ {name:"Black",      desc:"Jet-black satin coat — the only accepted colour."} ],
  "Snowshoe":            [ {name:"Seal Point + White", desc:"Classic dark seal points with white snowshoe feet."}, {name:"Blue Point + White",desc:"Cool blue-grey points with white paws."} ],
  "Somali":              [ {name:"Ruddy",      desc:"Warm tawny with black ticking and a bushy ruddy-orange tail."}, {name:"Sorrel",    desc:"Warm red-cinnamon with chocolate ticking."}, {name:"Blue",      desc:"Warm grey with blue-grey ticking."}, {name:"Fawn",      desc:"Pale warm cream with pink-cocoa ticking."} ],
  "Pixiebob":            [ {name:"Brown Spotted Tabby", desc:"The only accepted pattern — wild bobcat-like spotting on a warm brown ground."} ],
  "Australian Mist":     [ {name:"Brown",     desc:"Warm brown spotted or marbled with the misty grey veil over the pattern."}, {name:"Blue",      desc:"Cool grey-blue version of the misty pattern."}, {name:"Chocolate", desc:"Rich chocolate brown with the characteristic misted look."}, {name:"Lilac",     desc:"Pale lilac-grey mist."}, {name:"Gold",      desc:"Warm gold-toned ground with misty overlay."} ],
  "American Shorthair":  [ {name:"Silver Tabby", desc:"The most iconic AS colour — silver ground with dense black tabby markings."}, {name:"Cameo Tabby",desc:"Cream ground with red tabby markings."}, {name:"Bicolour",  desc:"Any colour with white."}, {name:"Tortoiseshell",desc:"Red and black patchwork."} ],
  "American Curl":       [ {name:"All colours",desc:"Accepted in all colours and patterns in both longhair and shorthair."}, {name:"Longhair",  desc:"Silky semi-long coat with plumed tail."}, {name:"Shorthair", desc:"Short, springy coat — less common but equally valid."} ],
  "Sphynx":              [ {name:"Solid",      desc:"Any solid colour on bare skin — the colour shows in the pigment."}, {name:"Tabby",     desc:"Tabby pattern visible on the skin and sparse fuzz."}, {name:"Colourpoint",desc:"Siamese-style point colouring."}, {name:"Bicolour",  desc:"Two-colour patching on skin."}, {name:"Tortie",    desc:"Mottled red and dark patching on bare skin."} ],
  "Devon Rex":           [ {name:"All colours",desc:"Accepted in virtually every colour and pattern — the elfin face is the constant."} ],
  "Cornish Rex":         [ {name:"All colours",desc:"Every colour and pattern accepted — curls are the constant feature."} ],
  "LaPerm":              [ {name:"All colours",desc:"LaPerm appears in any colour — tabby, tortie, solid, bicolour, and colourpoint."} ],
  "Bengal":              [ {name:"Brown Spotted Tabby",desc:"The classic — warm brown with bold black/dark-brown rosettes."}, {name:"Silver Spotted",desc:"Cool silver ground with dark charcoal rosettes."}, {name:"Snow Spotted",desc:"Pale cream to white with lynx, mink, or sepia colouration."}, {name:"Blue Spotted",desc:"Newer colour — warm blue-grey with darker blue rosettes."}, {name:"Marble",    desc:"Swirling horizontal pattern instead of spots — equally wild-looking."} ],
  "Savannah":            [ {name:"Brown Spotted",desc:"Classic — warm tawny brown with bold solid black spots."}, {name:"Silver Spotted",desc:"Cool silver with bold black spots."}, {name:"Black",     desc:"Solid black — spots visible only in sunlight."}, {name:"Smoke",     desc:"Black-tipped silver with ghost spots."} ],
  "Chausie":             [ {name:"Brown Ticked Tabby",desc:"Warm brown with ticking like a jungle cat — the most wild-looking."}, {name:"Black Grizzled Tabby",desc:"Black with frosted silver tipping on a tabby ground."}, {name:"Solid Black",desc:"Deep black — striking and dramatic."} ],
  "Serengeti":           [ {name:"Brown Spotted",desc:"Bold round or oval spots on warm brown — the primary pattern."}, {name:"Silver Spotted",desc:"Cooler silver ground with bold dark spots."}, {name:"Black",     desc:"Solid black — spots visible only in bright light."} ],
  "Munchkin":            [ {name:"All colours",desc:"Munchkin appears in every colour, pattern, and coat length — the legs are the constant."}, {name:"Longhair",  desc:"Semi-long silky coat."}, {name:"Shorthair", desc:"Short dense plush coat."} ],
  "Lykoi":               [ {name:"Roan (Black)",desc:"The only accepted pattern — black hairs intermixed with white, creating the wolf appearance."} ],
  "Aphrodite Giant":     [ {name:"Semi-longhair",desc:"Full semi-long coat with a generous mane — the most dramatic."}, {name:"Shorthair", desc:"Short dense coat — rarer but equally powerful."} ],
};

const BREED_FUNFACTS = {
  "Abyssinian":    "The Aby's ticked coat means each hair has bands of colour — up to 4–8 alternating light/dark bands per strand.",
  "Egyptian Mau":  "The Mau is the fastest domestic cat, capable of <strong>30 mph</strong> — thanks to a skin fold on the belly that extends stride length.",
  "Turkish Van":   "Turkish Vans genuinely love water and have been documented swimming in Lake Van in Turkey.",
  "Siamese":       "The Siamese temperature-sensitive gene causes points to darken in cold — kittens are born all-white.",
  "Maine Coon":    "Maine Coons have <strong>extra-large paws</strong> adapted for walking on snow — some are polydactyl.",
  "Bengal":        "Bengals are one of the only domestic cats with a <strong>water-resistant coat</strong> — many enjoy playing in water.",
  "Persian":       "The Persian's flat face is a result of selective breeding for a mutation called <strong>brachycephaly</strong>.",
  "Sphynx":        "Sphynx cats are <strong>not truly hairless</strong> — they're covered in fine peach fuzz that feels like warm suede.",
  "Ragdoll":       "Ragdolls are named for their tendency to go limp like a rag doll when picked up — a trait called <strong>floppiness</strong>.",
  "Russian Blue":  "Russian Blues are one of the few breeds known to produce <strong>lower levels of the Fel d1 allergen</strong>.",
  "Norwegian Forest Cat": "Norwegian Forest Cats can descend trees <strong>head-first</strong> — most cats must back down.",
  "Siberian":      "The Siberian produces <strong>significantly less Fel d1 allergen</strong> than most breeds — often tolerated by allergy sufferers.",
  "Scottish Fold": "All Scottish Folds are born with straight ears — the fold develops at <strong>3–4 weeks</strong> of age.",
  "Devon Rex":     "Devon Rex cats have <strong>three types of hair</strong> but all are fragile, fine, and wavy.",
  "Cornish Rex":   "The Cornish Rex has only a <strong>down layer</strong> — no guard hairs or awn hairs like other breeds.",
  "Savannah":      "The Savannah is the <strong>tallest domestic cat</strong> — some F1 Savannahs stand 17+ inches at the shoulder.",
  "Manx":          "The Manx taillessness gene is <strong>lethal when homozygous</strong> — two copies of the gene cause fatal spinal defects.",
  "Munchkin":      "Despite short legs, Munchkins can run surprisingly fast — they <strong>corner like go-karts</strong>.",
  "Lykoi":         "Lykoi cats moult their coat <strong>seasonally</strong> — they can go nearly completely bald before growing it back.",
  "Burmese":       "All Burmese descend from a single cat — a female called <strong>Wong Mau</strong>, brought to the USA in 1930.",
  "Chartreux":     "The Chartreux's <strong>'smile'</strong> is due to the tapered muzzle structure — they appear permanently content.",
  "Korat":         "In Thailand, Korats are given to brides as gifts for good luck — they're one of only <strong>two acceptable gifts</strong>.",
  "Tonkinese":     "Tonkinese eyes come in a unique <strong>aquamarine colour</strong> — neither the Siamese blue nor the Burmese gold.",
  "Balinese":      "The Balinese is essentially a <strong>long-haired Siamese</strong> — the gene appeared spontaneously in Siamese litters.",
  "Singapura":     "The Singapura is the world's <strong>smallest cat breed</strong> — adults weigh just 4–8 lbs.",
  "Turkish Angora":"Turkey protects the Turkish Angora as a <strong>national treasure</strong> — breeding programs exist at Ankara Zoo.",
  "Birman":        "Legend holds that Birmans got their white gloves when a sacred cat touched the <strong>golden throne of the gods</strong>.",
  "Aphrodite Giant":"Evidence suggests cats lived on Cyprus as early as <strong>7500 BC</strong> — the Aphrodite Giant may carry that ancient lineage.",
};

document.addEventListener('DOMContentLoaded', function() {
(function initBreedModal() {
  if (!document.querySelector('.breed-card')) return;

  
  const overlay = document.createElement('div');
  overlay.className = 'breed-modal-overlay';
  overlay.innerHTML = `
    <div class="breed-modal" id="breedModal" role="dialog" aria-modal="true">
      <div class="bm-close">
        <button class="bm-close-btn" id="bmCloseBtn">✕ Close</button>
      </div>
      <div class="bm-inner" id="bmInner"></div>
    </div>`;
  document.body.appendChild(overlay);

  const modal   = overlay.querySelector('#breedModal');
  const inner   = overlay.querySelector('#bmInner');
  const closeBtn= overlay.querySelector('#bmCloseBtn');

  function openModal(card) {
    const name    = card.dataset.name    || '';
    const origin  = card.dataset.origin  || '';
    const category= card.dataset.category|| '';
    const imgSrc  = card.querySelector('img')?.src || '';
    const imgAlt  = card.querySelector('img')?.alt || name;
    const descText= card.querySelector('.breed-desc')?.textContent || '';
    const metaEls = card.querySelectorAll('.breed-meta span');
    const traitEls= card.querySelectorAll('.breed-traits .trait');
    const variations = BREED_VARIATIONS[name] || [];
    const funfact    = BREED_FUNFACTS[name] || '';

    const metaHTML  = Array.from(metaEls).map(el => `<span class="${el.className}">${el.innerHTML}</span>`).join('');
    const traitsHTML= Array.from(traitEls).map(el => `<span class="trait">${el.textContent}</span>`).join('');
    const varsHTML  = variations.length
      ? `<div class="bm-variations-block">
           <p class="bm-desc-label">Coat &amp; Colour Variations</p>
           <div class="bm-variations">
             ${variations.map(v => `<div class="bm-var"><div class="bm-var-name">${v.name}</div><div class="bm-var-desc">${v.desc}</div></div>`).join('')}
           </div>
         </div>`
      : '';
    const factHTML  = funfact
      ? `<div class="bm-funfact">🐾 &nbsp;<strong>Did you know?</strong> &nbsp;${funfact}</div>`
      : '';

    inner.innerHTML = `
      <div class="bm-photo">
        <img src="${imgSrc}" alt="${imgAlt}" loading="lazy" onerror="this.style.opacity='.3'">
        <span class="bm-badge">${category.charAt(0).toUpperCase()+category.slice(1)}</span>
      </div>
      <div class="bm-content">
        <div>
          <h2 class="bm-name">${name}</h2>
          <div class="bm-meta">${metaHTML}</div>
        </div>
        <div class="bm-desc-block">
          <p class="bm-desc-label">About</p>
          <p class="bm-desc">${descText}</p>
        </div>
        <div class="bm-traits-block">
          <p class="bm-desc-label">Key Traits</p>
          <div class="bm-traits">${traitsHTML}</div>
        </div>
        ${varsHTML}
        ${factHTML}
      </div>`;

    overlay.classList.add('open');
    modal.scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  
  document.querySelectorAll('.breed-card').forEach(card => {
    card.style.cursor = 'none';
    card.addEventListener('click', () => openModal(card));
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
})();
});
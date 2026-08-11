const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .13 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---------- LANGUAGE ----------
const copy = {
  en: {
    navJourney:'journey',navMemories:'memories',navLetters:'letters',navUs:'us',ourSong:'our song',
    ourPhoto:'our photo',littleMemory:'little memory',uploadPhoto:'upload photo',changePhoto:'change photo',favoriteDay:'one of my favorite days',favoritePerson:'still my favorite person',
    heroEyebrow:'A LITTLE ARCHIVE OF US',stillWritten:'still being written.',heroNote:'I don’t know exactly where this story will take us. I’m just grateful that somehow, our paths crossed.',enterStory:'enter our story',scroll:'scroll',
    howStarted:'HOW IT STARTED',openingTitle:'some stories<br/>don’t begin loudly.',openingBody:'It started with one message on April 16, 2026. Back then, I didn’t know where a simple act of kindness would lead. I only knew I wanted you to know that, even from a stranger’s perspective, you mattered more than you thought. Somehow, that little message became the first page of this story.',theBeginning:'the beginning',
    timelineEyebrow:'OUR TIMELINE',timelineTitle:'the pages that brought us here.',timelineFirstLabel:'THE FIRST DM',timelineFirstTitle:'one message.',timelineFirstBody:'A message sent without knowing it would become the first line of something I’d eventually treasure.',thenSheReplied:'THEN SHE REPLIED',replyNote:'I sent kindness to a stranger. Somehow, kindness came right back.',oneSentenceKeep:'ONE SENTENCE I KEEP',smallSentences:'Some sentences are small. Some stay.',todayWord:'TODAY',notEnding:'NOT AN ENDING',stillDiscovering:'still discovering you.',favoritePart:'There is still so much I don’t know about you. Maybe that’s my favorite part.',
    littleThings:'LITTLE THINGS',rentFree:'things about you that somehow live in my head rent-free.',chocolateTitle:'chocolate 🍫',chocolateBody:'apparently one of the easiest ways to make your day a little better.',gelatoTitle:'gelato & sweet things 🍨',gelatoBody:'if it’s cold, sweet, creamy, or dessert-shaped, chances are you’re interested.',sayangBody:'yes, the number of g’s matters.',coldWaterTitle:'ice-cold water',coldWaterBody:'normal water apparently did something personally offensive to you.',softHeartTitle:'your soft heart',softHeartBody:'one of the things I notice most — even when you try to hide how much you care.',faithTitle:'your faith',faithBody:'the way you keep returning to God makes me want to keep growing too.',
    chatMuseum:'CHAT MUSEUM',chatTitle:'tiny sentences,<br/>big place in my heart.',neverForget:'one sentence I never want to forget.',internally:'me internally: ???????????',noRushing:'no rushing. no disappearing. just growing.',
    godStory:'GOD IN OUR STORY',beforeUs:'Before there was an “us”,<br/>there was God.',prayer1:'Thank You for letting our paths cross.',prayer2:'Teach us to love without controlling.',prayer3:'Teach us to grow without losing ourselves.',prayer4:'Teach us to choose You before choosing each other.',prayer5:'And if this story is from You, teach us to take care of it well.',
    placesMemories:'PLACES & MEMORIES',placesTitle:'places we’ve been,<br/>places waiting for us.',someday:'Someday',tapPlace:'tap a place',memoryMap:'our little memory map',knewSince:'we knew each other since 16 April 2026',thingsKnow:'things I still want to know about you',oneTeam:'team — you & me',
    lettersFor:'LETTERS FOR ABIGAIL',openWhen:'open when...',lettersIntro:'for the moments when I can’t find the perfect words fast enough.',openMe:'open me',envMiss:'you miss me',envTired:'you’re tired',envOverthink:'you’re overthinking',envBadDay:'you had a bad day',envCry:'you feel like crying',envAlone:'you feel alone',envReassure:'you need reassurance',envDoubt:'you doubt yourself',envNotOkay:'we’re not okay',envSleep:'you can’t sleep',envHappy:'you’re really happy',envRemember:'you need to remember us',
    favoriteTogether:'your favorite photo together',littleTodays:'today, and all the little todays after this.',todayLine1:'There is still so much about you I haven’t discovered yet.',todayLine2:'And maybe that’s my favorite part.',continueStory:'continue this story with me?',yes:'yes ♡',no:'no',madeWithLove:'made with too much love by Yehezkiel.',psst:'psst, Abigail…',forAbigail:'FOR ABIGAIL',loveSign:'love,'
  },
  id: {
    navJourney:'journey',navMemories:'memories',navLetters:'letters',navUs:'kita',ourSong:'lagu kita',
    ourPhoto:'foto kita',littleMemory:'memori kecil',uploadPhoto:'upload foto',changePhoto:'ganti foto',favoriteDay:'salah satu hari favoritku',favoritePerson:'tetep jadi orang favoritku',
    heroEyebrow:'ARSIP KECIL TENTANG KITA',stillWritten:'masih terus ditulis.',heroNote:'Aku nggak tahu persis cerita ini bakal bawa kita ke mana. Aku cuma bersyukur karena entah gimana, jalan kita bisa ketemu.',enterStory:'masuk ke cerita kita',scroll:'scroll',
    howStarted:'GIMANA SEMUANYA MULAI',openingTitle:'nggak semua cerita<br/>mulainya dengan heboh.',openingBody:'Semuanya mulai dari satu DM tanggal 16 April 2026. Waktu itu aku nggak tahu satu pesan kecil bakal bawa kita sampai sejauh ini. Aku cuma pengen kamu tahu kalau bahkan dari sudut pandang orang asing, kamu tetap berarti lebih dari yang kamu kira. Entah gimana, pesan kecil itu akhirnya jadi halaman pertama dari cerita ini.',theBeginning:'awal ceritanya',
    timelineEyebrow:'TIMELINE KITA',timelineTitle:'halaman-halaman yang akhirnya bawa kita sampai sini.',timelineFirstLabel:'DM PERTAMA',timelineFirstTitle:'satu pesan.',timelineFirstBody:'Pesan yang dikirim tanpa tahu kalau nantinya bakal jadi baris pertama dari sesuatu yang aku simpen baik-baik.',thenSheReplied:'TERUS DIA BALES',replyNote:'Aku ngirim sedikit kebaikan ke orang asing. Lucunya, kebaikan itu balik lagi ke aku.',oneSentenceKeep:'SATU KALIMAT YANG AKU SIMPEN',smallSentences:'Ada kalimat yang kecil. Tapi tinggal lama.',todayWord:'HARI INI',notEnding:'BUKAN ENDING',stillDiscovering:'masih terus kenal kamu.',favoritePart:'Masih banyak banget hal tentang kamu yang belum aku tahu. Dan mungkin itu justru bagian favoritku.',
    littleThings:'HAL-HAL KECIL',rentFree:'hal-hal tentang kamu yang entah kenapa tinggal gratis di kepalaku.',chocolateTitle:'coklat 🍫',chocolateBody:'kayaknya salah satu cara paling gampang buat bikin harimu sedikit lebih enak.',gelatoTitle:'gelato & makanan manis 🍨',gelatoBody:'kalau dingin, manis, creamy, atau bentuknya dessert, kemungkinan besar kamu tertarik.',sayangBody:'iya, jumlah huruf g-nya itu penting.',coldWaterTitle:'air dingin banget',coldWaterBody:'air suhu normal kayaknya pernah punya masalah pribadi sama kamu.',softHeartTitle:'hati kamu yang lembut',softHeartBody:'salah satu hal yang paling aku notice — bahkan pas kamu berusaha nutupin seberapa pedulinya kamu.',faithTitle:'iman kamu',faithBody:'cara kamu terus balik lagi ke Tuhan bikin aku juga pengen terus bertumbuh.',
    chatMuseum:'MUSEUM CHAT',chatTitle:'kalimat-kalimat kecil,<br/>tempatnya gede di hatiku.',neverForget:'satu kalimat yang nggak pengen aku lupain.',internally:'aku di dalam hati: ???????????',noRushing:'nggak buru-buru. nggak ngilang. cuma terus bertumbuh.',
    godStory:'TUHAN DI DALAM CERITA KITA',beforeUs:'Sebelum ada “kita”,<br/>ada Tuhan.',prayer1:'Terima kasih karena Tuhan izinin jalan kami ketemu.',prayer2:'Ajar kami buat mengasihi tanpa mengontrol.',prayer3:'Ajar kami bertumbuh tanpa kehilangan diri sendiri.',prayer4:'Ajar kami memilih Engkau sebelum memilih satu sama lain.',prayer5:'Dan kalau cerita ini memang dari-Mu, ajar kami buat menjaganya dengan baik.',
    placesMemories:'TEMPAT & KENANGAN',placesTitle:'tempat yang udah kita datengin,<br/>dan tempat yang masih nunggu kita.',someday:'Suatu hari',tapPlace:'tap salah satu tempat',memoryMap:'peta kecil kenangan kita',knewSince:'kita saling kenal sejak 16 April 2026',thingsKnow:'hal yang masih pengen aku tahu tentang kamu',oneTeam:'tim — kamu & aku',
    lettersFor:'SURAT BUAT ABIGAIL',openWhen:'buka kalau...',lettersIntro:'buat momen-momen ketika aku nggak bisa nemuin kata yang pas secepat itu.',openMe:'buka aku',envMiss:'kamu lagi kangen aku',envTired:'kamu lagi capek',envOverthink:'kamu lagi overthinking',envBadDay:'harimu lagi jelek',envCry:'kamu pengen nangis',envAlone:'kamu ngerasa sendirian',envReassure:'kamu butuh diyakinin',envDoubt:'kamu lagi ragu sama diri sendiri',envNotOkay:'kita lagi nggak baik-baik aja',envSleep:'kamu nggak bisa tidur',envHappy:'kamu lagi seneng banget',envRemember:'kamu perlu inget kita',
    favoriteTogether:'foto favorit kita',littleTodays:'hari ini, dan hari-hari kecil setelah ini.',todayLine1:'Masih banyak banget hal tentang kamu yang belum aku temuin.',todayLine2:'Dan mungkin itu justru bagian favoritku.',continueStory:'lanjutin cerita ini sama aku?',yes:'iya ♡',no:'nggak',madeWithLove:'dibikin dengan kebanyakan sayang oleh Yehezkiel.',psst:'psst, Abigail…',forAbigail:'BUAT ABIGAIL',loveSign:'sayang,'
  }
};

let currentLang = 'en';
try { currentLang = localStorage.getItem('ya-lang') || 'en'; } catch(e) {}
if (!copy[currentLang]) currentLang = 'en';

function applyLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (copy[lang][key] !== undefined) el.textContent = copy[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (copy[lang][key] !== undefined) el.innerHTML = copy[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
  try { localStorage.setItem('ya-lang', lang); } catch(e) {}
  refreshMapCaption();
  if (modal.classList.contains('open') && activeLetterKey) renderLetter(activeLetterKey);
}
document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));

// ---------- PHOTO UPLOADS ----------
function compressImage(file, maxSide = 1400, quality = .82){
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let {width, height} = img;
        const scale = Math.min(1, maxSide / Math.max(width, height));
        width = Math.round(width * scale); height = Math.round(height * scale);
        const canvas = document.createElement('canvas');
        canvas.width = width; canvas.height = height;
        canvas.getContext('2d').drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function setFrameImage(frame, src){
  const stage = frame.querySelector('.photo-stage');
  let target = frame.querySelector('.uploaded-image');
  if (!target) target = frame.querySelector('.photo-stage > img');
  if (!target) return;
  target.src = src;
  stage.classList.add('has-upload');
}

document.querySelectorAll('.photo-frame').forEach(frame => {
  const key = frame.dataset.photoKey;
  try {
    const saved = localStorage.getItem(`ya-photo-${key}`);
    if (saved) setFrameImage(frame, saved);
  } catch(e) {}
  const input = frame.querySelector('input[type="file"]');
  if (!input) return;
  input.addEventListener('change', async () => {
    const file = input.files?.[0];
    if (!file || !file.type.startsWith('image/')) return;
    try {
      const data = await compressImage(file);
      setFrameImage(frame, data);
      try { localStorage.setItem(`ya-photo-${key}`, data); } catch(e) {}
    } catch(e) {
      const url = URL.createObjectURL(file);
      setFrameImage(frame, url);
    }
  });
});

// ---------- MEMORY MAP ----------
let activePin = null;
function refreshMapCaption(){
  if (!activePin) return;
  const caption = document.getElementById('mapCaption');
  const suffix = currentLang === 'id' ? 'id' : 'en';
  caption.innerHTML = `<strong>${activePin.dataset[`place${suffix[0].toUpperCase()+suffix.slice(1)}`]}</strong><span>${activePin.dataset[`note${suffix[0].toUpperCase()+suffix.slice(1)}`]}</span>`;
}
document.querySelectorAll('.map-pin').forEach(pin => {
  pin.addEventListener('click', () => { activePin = pin; refreshMapCaption(); });
});

// ---------- LOVE LETTERS ----------
const letters = {
  miss: {
    en:{title:'Open when you miss me',body:`<p>Sayang, if you’re missing me, treat this page like a tiny hug from me.</p><p>I know there will be moments when we can’t be in the same place, can’t talk as long as we want, or our day just gets too crowded. But none of that makes me care about you any less. I still want to hear the random parts of your day, the boring parts, the funny parts, all of it.</p><p>So don’t make missing me complicated. Just come to me and say it. “I miss you.” That’s enough. I’ll probably answer with an even more annoying amount of “sayanggggg”.</p>`},
    id:{title:'Buka kalau kamu lagi kangen aku',body:`<p>Sayang, kalau lagi kangen aku, anggep halaman ini pelukan kecil dariku.</p><p>Aku tahu bakal ada waktu kita nggak bisa ada di tempat yang sama, nggak bisa ngobrol selama yang kita mau, atau harinya lagi rame banget. Tapi itu nggak bikin aku jadi kurang peduli sama kamu. Aku tetep pengen denger bagian random dari harimu, yang receh, yang membosankan, yang bikin kesel, semuanya.</p><p>Jadi kalau kangen nggak usah dibikin ribet atau dipendem sendirian. Dateng aja ke aku terus bilang, “aku kangen.” Udah. Itu cukup. Nanti paling aku bales dengan “sayanggggg” yang huruf g-nya kelewatan banyak.</p>`}
  },
  tired:{
    en:{title:'Open when you’re tired',body:`<p>You don’t have to be strong all the time, Abi. Seriously.</p><p>You’re allowed to be tired. You’re allowed to have a day where you don’t want to explain anything, where your energy is gone, where all you can do is lie down and exist for a while. I don’t only care about the version of you that gets everything done.</p><p>Drink something cold, eat something sweet, rest your head, and let today be enough. Tomorrow can wait. God is still working even while you rest.</p>`},
    id:{title:'Buka kalau kamu lagi capek',body:`<p>Kamu nggak harus kuat terus, Bi. Serius.</p><p>Kamu boleh capek. Boleh punya hari di mana kamu males jelasin apa-apa, energi habis, pengennya rebahan dan diem aja. Aku nggak cuma sayang sama versi kamu yang produktif, yang ceria, atau yang bisa hadepin semuanya.</p><p>Minum yang dingin, makan yang manis, taruh kepala dulu, istirahat. Hari ini segini aja juga cukup. Besok urusan besok. Tuhan tetep kerja bahkan pas kamu lagi istirahat.</p>`}
  },
  overthink:{
    en:{title:'Open when you’re overthinking',body:`<p>Hey, come back here for a second. Not every thought in your head deserves to become a fact.</p><p>If your brain is making ten different stories about what could go wrong, you don’t have to solve all ten tonight. Ask me what you need to ask. Tell me what feels weird. I’d rather hear the messy version than have you quietly fight an imaginary version of me in your head.</p><p>We can take one thing at a time. No guessing games. No reading minds. Just you, me, honesty, and a little bit of “okay, ternyata nggak seburuk itu.”</p>`},
    id:{title:'Buka kalau kamu lagi overthinking',body:`<p>Hei, balik sini dulu. Nggak semua pikiran yang lewat di kepala harus kamu anggep fakta.</p><p>Kalau otakmu lagi bikin sepuluh skenario tentang apa aja yang bisa salah, kamu nggak harus nyelesaiin semuanya malam ini. Tanya aku kalau ada yang pengen ditanya. Bilang kalau ada yang kerasa aneh. Aku lebih milih denger versi ceritamu yang berantakan daripada kamu diem-diem perang sama versi aku yang cuma ada di kepalamu.</p><p>Kita hadepin satu-satu aja. Nggak usah tebak-tebakan. Nggak usah baca pikiran. Kamu, aku, jujur, terus nanti ujungnya paling, “oh... ternyata nggak seburuk itu.”</p>`}
  },
  badDay:{
    en:{title:'Open when you had a bad day',body:`<p>I’m sorry today was heavy.</p><p>You don’t have to turn it into a lesson immediately. Some days are just annoying, unfair, exhausting, or simply not it. You’re allowed to dislike the day without disliking yourself.</p><p>Tell me what happened, even if the story is long and all over the place. Or don’t talk yet. I can sit with the quiet too. One bad day doesn’t get to decide what tomorrow will look like.</p>`},
    id:{title:'Buka kalau harimu lagi jelek',body:`<p>Maaf ya kalau hari ini berat banget.</p><p>Kamu nggak harus langsung nyari hikmah dari semuanya. Kadang ada hari yang emang ngeselin, nggak adil, capek, atau pokoknya nggak banget. Kamu boleh kesel sama harinya tanpa ikut kesel sama dirimu sendiri.</p><p>Cerita aja ke aku walaupun ceritanya panjang, muter-muter, atau nggak runtut. Kalau belum pengen cerita juga gapapa, aku bisa nemenin diem. Satu hari yang jelek nggak punya hak buat nentuin besok bakal kayak gimana.</p>`}
  },
  cry:{
    en:{title:'Open when you feel like crying',body:`<p>Cry if you need to. You don’t have to make it look pretty.</p><p>You don’t need a “good enough” reason to cry either. If it hurts, it hurts. If you’re overwhelmed, then you’re overwhelmed. Let it out first. We can make sense of it later.</p><p>And when you’re done, wipe your face, breathe, drink some water — yes, preferably your dramatic ice-cold water — and remember that I’m still here.</p>`},
    id:{title:'Buka kalau kamu pengen nangis',body:`<p>Nangis aja kalau emang pengen nangis. Nggak perlu dibuat keliatan kuat atau rapi.</p><p>Kamu juga nggak butuh alasan yang “cukup masuk akal” buat nangis. Kalau sakit ya sakit. Kalau sesek ya sesek. Keluarin dulu. Nanti kalau udah agak reda baru kita ngerti bareng-bareng sebenarnya yang bikin kamu berat itu apa.</p><p>Habis itu lap muka, tarik napas, minum air — iya, air super dingin kesayanganmu itu — terus inget satu hal: aku masih di sini.</p>`}
  },
  alone:{
    en:{title:'Open when you feel alone',body:`<p>If today feels lonely, please don’t confuse “I’m physically by myself right now” with “I have nobody.” Those are not the same thing.</p><p>You have me. Maybe not always right beside you, maybe not always instantly available, but you have me in a way that means you can come back and tell me what’s going on.</p><p>And more than that, you have God. Even in the weird quiet moments when His presence doesn’t feel loud. You are still held.</p>`},
    id:{title:'Buka kalau kamu ngerasa sendirian',body:`<p>Kalau hari ini rasanya sepi, jangan samain “aku lagi sendirian secara fisik” sama “aku nggak punya siapa-siapa.” Itu dua hal yang beda.</p><p>Kamu punya aku. Mungkin aku nggak selalu bisa duduk persis di sebelahmu, mungkin juga nggak selalu bisa bales detik itu juga, tapi kamu punya aku dalam arti kamu bisa balik, cerita, dan aku bakal dengerin.</p><p>Dan lebih dari itu, kamu punya Tuhan. Bahkan di momen sepi yang bikin kehadiran-Nya nggak kerasa rame sekalipun, kamu tetep dipegang.</p>`}
  },
  reassure:{
    en:{title:'Open when you need reassurance',body:`<p>You don’t have to perform perfectly to make me stay interested in knowing you.</p><p>I’m here because I want to know the real you — happy you, tired you, playful you, scared you, stubborn you, all the versions that make you Abigail. I don’t need every day to feel romantic for this to mean something.</p><p>We don’t have to rush. We just need to keep being honest, keep showing up, and keep letting God shape whatever this is becoming.</p>`},
    id:{title:'Buka kalau kamu butuh diyakinin',body:`<p>Kamu nggak perlu jadi versi paling sempurna dari dirimu supaya aku tetep pengen kenal kamu.</p><p>Aku di sini karena aku pengen kenal Abigail yang beneran — yang seneng, capek, centil, jahil, takut, keras kepala, semua versinya. Aku juga nggak butuh tiap hari kerasa romantis supaya hubungan ini tetep berarti.</p><p>Kita nggak perlu buru-buru. Kita cuma perlu tetep jujur, tetep hadir, dan tetep kasih Tuhan ruang buat ngebentuk cerita ini jadi apa pun yang memang seharusnya.</p>`}
  },
  doubt:{
    en:{title:'Open when you doubt yourself',body:`<p>I know there are days when you look at yourself and only notice what you think is lacking.</p><p>On those days, borrow my eyes for a minute. I see someone who cares deeply, tries again even after being tired, and still has softness in her even after life gives her plenty of reasons to become hard.</p><p>You don’t need to become somebody else to be worthy of good things. Keep growing, yes. But don’t bully yourself while doing it.</p>`},
    id:{title:'Buka kalau kamu lagi ragu sama diri sendiri',body:`<p>Aku tahu ada hari di mana kamu ngeliat diri sendiri terus yang kelihatan cuma bagian yang menurutmu kurang.</p><p>Kalau lagi begitu, pinjem mataku sebentar. Aku lihat orang yang pedulinya dalam, yang masih mau coba lagi walaupun capek, dan yang hatinya tetep lembut walaupun hidup udah kasih banyak alasan buat jadi keras.</p><p>Kamu nggak harus berubah jadi orang lain supaya pantas dapet hal-hal baik. Bertumbuh iya, tapi jangan sambil ngebully diri sendiri.</p>`}
  },
  notokay:{
    en:{title:'Open when we’re not okay',body:`<p>If we’re not okay, I hope we never let one bad conversation erase everything good we’ve been building.</p><p>I can be wrong. You can be wrong. We can both get emotional and say things badly. But I want us to come back to the same table instead of turning the problem into you versus me.</p><p>I’m not trying to win against you. I want us to win against the thing that got between us. Same team, remember?</p>`},
    id:{title:'Buka kalau kita lagi nggak baik-baik aja',body:`<p>Kalau kita lagi nggak baik-baik aja, aku harap satu obrolan yang jelek nggak bikin kita lupa sama semua hal baik yang udah kita bangun.</p><p>Aku bisa salah. Kamu juga bisa salah. Kita bisa sama-sama emosi, salah ngomong, salah nangkep. Tapi aku pengen ujungnya kita tetep balik ke meja yang sama, bukan malah bikin masalahnya berubah jadi aku lawan kamu.</p><p>Aku nggak pengen menang dari kamu. Aku pengen kita yang menang dari masalahnya. Kita satu tim, inget?</p>`}
  },
  cantSleep:{
    en:{title:'Open when you can’t sleep',body:`<p>If it’s late and your brain suddenly decides to review your entire life, hi. Welcome to the unnecessary midnight meeting.</p><p>You do not need to solve your future at 2 a.m. Put the phone down for a bit. Breathe slower. Pray something simple if that’s all you can do: “Jesus, stay close tonight.” That’s enough.</p><p>Tomorrow, if the problem is still real, we’ll deal with it in daylight. For now, your only assignment is sleep, sayang.</p>`},
    id:{title:'Buka kalau kamu nggak bisa tidur',body:`<p>Kalau udah malem terus otakmu tiba-tiba mutusin buat review seluruh hidup, halo. Selamat datang di rapat tengah malam yang sebenernya nggak diminta siapa-siapa.</p><p>Kamu nggak harus nyelesaiin masa depan jam dua pagi. Taruh HP bentar. Napas pelan. Kalau cuma sanggup doa singkat, bilang aja, “Tuhan Yesus, temenin aku malam ini.” Udah, itu juga cukup.</p><p>Besok kalau masalahnya masih nyata, kita hadepin pas udah terang. Sekarang tugasmu cuma satu: tidur, sayang.</p>`}
  },
  happy:{
    en:{title:'Open when you’re really happy',body:`<p>I hope you opened this with the biggest smile.</p><p>Tell me everything. I want the overly detailed version. What happened, what you felt, what made you laugh, what made you proud. I don’t only want to be the person you come to when things hurt. I want to celebrate your good days too.</p><p>And please remember this feeling. Life moves fast. Let yourself enjoy a good thing without immediately worrying about when it will end.</p>`},
    id:{title:'Buka kalau kamu lagi seneng banget',body:`<p>Semoga kamu buka ini sambil senyum gede banget.</p><p>Cerita semuanya ke aku. Aku mau versi yang detail sekalian. Ada apa, rasanya gimana, apa yang bikin kamu ketawa, apa yang bikin kamu bangga. Aku nggak cuma pengen jadi orang yang kamu datengin pas lagi sakit; aku juga pengen ikut ngerayain hari-hari baikmu.</p><p>Terus tolong nikmatin dulu rasa senengnya. Hidup udah lari cepet banget. Jangan baru dapet hal baik terus langsung takut kapan hal itu bakal selesai.</p>`}
  },
  rememberUs:{
    en:{title:'Open when you need to remember us',body:`<p>We started with a message on April 16. No big plan. No dramatic setup. Just one person trying to leave a little kindness in another person’s day.</p><p>And now there are words, prayers, jokes, “sayanggggg”, conversations that went too late, things we’re still learning, and a story that somehow has an “us” in it.</p><p>I don’t know every chapter yet. I don’t want to pretend I do. I just know I’m grateful for the pages we already have — and I still want to see what God writes next.</p>`},
    id:{title:'Buka kalau kamu perlu inget kita',body:`<p>Kita mulai dari satu DM tanggal 16 April. Nggak ada rencana gede. Nggak ada skenario dramatis. Cuma satu orang yang waktu itu pengen ninggalin sedikit kebaikan di harinya orang lain.</p><p>Terus sekarang ada doa, becandaan, “sayanggggg”, obrolan sampai malem, hal-hal yang masih kita pelajarin, dan entah gimana sekarang ceritanya punya kata “kita” di dalamnya.</p><p>Aku belum tahu semua bab setelah ini bakal kayak gimana. Aku juga nggak mau sok tahu. Aku cuma tahu aku bersyukur sama halaman yang udah ada — dan aku masih pengen lihat Tuhan nulis apa setelah ini.</p>`}
  }
};

const modal = document.getElementById('letterModal');
const letterTitle = document.getElementById('letterTitle');
const letterBody = document.getElementById('letterBody');
let activeLetterKey = null;
function renderLetter(key){
  const letter = letters[key]?.[currentLang] || letters[key]?.en;
  if (!letter) return;
  activeLetterKey = key;
  letterTitle.textContent = letter.title;
  letterBody.innerHTML = letter.body;
}
function closeLetter(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; activeLetterKey = null; }
document.querySelectorAll('.envelope').forEach(btn => btn.addEventListener('click', () => {
  renderLetter(btn.dataset.letter);
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}));
document.getElementById('closeLetter').addEventListener('click', closeLetter);
modal.addEventListener('click', e => { if (e.target === modal) closeLetter(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLetter(); });

// ---------- ENDING ----------
const noBtn = document.getElementById('noBtn');
const answerButtons = document.getElementById('answerButtons');
function moveNoButton(){
  const x = Math.round(Math.random() * 130 - 40);
  const y = Math.round(Math.random() * 46 - 23);
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
['mouseenter','touchstart','focus'].forEach(eventName => noBtn.addEventListener(eventName, moveNoButton, {passive:true}));
document.getElementById('yesBtn').addEventListener('click', () => {
  const msg = document.getElementById('answerMessage');
  msg.textContent = currentLang === 'id'
    ? 'pilihan bagus, Abigail. ♡ masih kita, masih bertumbuh, masih terus ditulis.'
    : 'good choice, Abigail. ♡ still us, still growing, still being written.';
  answerButtons.style.opacity = '.45';
});

// ---------- OPTIONAL AUDIO ----------
const musicBtn = document.getElementById('musicBtn');
const ourSong = document.getElementById('ourSong');
musicBtn.addEventListener('click', async () => {
  try {
    if (ourSong.paused) {
      await ourSong.play();
      musicBtn.classList.add('playing');
      musicBtn.setAttribute('aria-label','Pause our song');
    } else {
      ourSong.pause();
      musicBtn.classList.remove('playing');
      musicBtn.setAttribute('aria-label','Play our song');
    }
  } catch (err) {
    const label = musicBtn.querySelector('span');
    const old = label.textContent;
    label.textContent = currentLang === 'id' ? 'tambah our-song.mp3' : 'add our-song.mp3';
    setTimeout(() => { label.textContent = old; }, 2600);
  }
});

applyLanguage(currentLang);

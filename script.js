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

// Day counter: first message / start of the story.
const START_DATE = new Date('2026-07-09T00:00:00+07:00');
const today = new Date();
const diffDays = Math.max(1, Math.floor((today - START_DATE) / 86400000) + 1);
document.getElementById('daysCounter').textContent = diffDays;

// Interactive memory map.
document.querySelectorAll('.map-pin').forEach(pin => {
  pin.addEventListener('click', () => {
    const caption = document.getElementById('mapCaption');
    caption.innerHTML = `<strong>${pin.dataset.place}</strong><span>${pin.dataset.note}</span>`;
  });
});

// Love letters.
const letters = {
  miss: {
    title: 'Open when you miss me',
    body: `<p>Sayang, kalau kamu lagi kangen, anggap halaman ini sebagai pelukan kecil dariku.</p><p>Aku mungkin nggak selalu bisa ada di tempat yang sama setiap saat, tapi aku mau kamu ingat satu hal: jarak tidak membuat aku berhenti peduli. Aku tetap ingin tahu harimu, tetap ingin dengar ceritamu, tetap ingin jadi tempat yang terasa aman buatmu.</p><p>Kalau kangen, jangan dipendam sendirian. Datang ke aku. Cerita. Atau cukup bilang, “aku kangen.” Itu sudah lebih dari cukup.</p>`
  },
  tired: {
    title: 'Open when you’re tired',
    body: `<p>Abigail, kamu nggak harus kuat setiap waktu.</p><p>Ada hari ketika kamu boleh capek, diam sebentar, tidur lebih lama, atau nggak punya jawaban untuk semuanya. Aku tidak mencintai versi kamu yang selalu produktif atau selalu baik-baik saja. Aku belajar menyayangi kamu sebagai manusia yang juga bisa lelah.</p><p>Istirahatlah tanpa merasa bersalah. Tuhan tetap bekerja bahkan ketika kamu sedang berhenti sejenak.</p>`
  },
  notokay: {
    title: 'Open when we’re not okay',
    body: `<p>Kalau kita sedang tidak baik-baik saja, aku harap kita tidak menjadikan satu masalah sebagai alasan untuk melupakan semua hal baik yang sudah kita bangun.</p><p>Aku mungkin bisa salah. Kamu juga bisa salah. Tapi aku ingin kita tetap memilih komunikasi daripada menghilang, memahami daripada menyerang, dan memberi ruang tanpa membuat satu sama lain merasa ditinggalkan.</p><p>Aku tidak ingin menang melawan kamu. Aku ingin kita menang melawan masalahnya — karena kita tetap satu tim.</p>`
  },
  reassure: {
    title: 'Open when you need reassurance',
    body: `<p>Aku di sini bukan karena kamu harus menjadi sempurna untuk dipilih.</p><p>Aku ingin mengenal kamu pelan-pelan: ketika kamu senang, ketika kamu capek, ketika kamu jahil, ketika kamu takut, ketika realita kita tidak serapi yang kita bayangkan.</p><p>Kita tidak perlu memaksa cerita ini bergerak lebih cepat dari yang seharusnya. Yang penting kita tetap jujur, tetap bertumbuh, dan tetap mengizinkan Tuhan menata langkah kita.</p>`
  }
};
const modal = document.getElementById('letterModal');
const letterTitle = document.getElementById('letterTitle');
const letterBody = document.getElementById('letterBody');
function closeLetter(){ modal.classList.remove('open'); modal.setAttribute('aria-hidden','true'); document.body.style.overflow=''; }
document.querySelectorAll('.envelope').forEach(btn => btn.addEventListener('click', () => {
  const letter = letters[btn.dataset.letter];
  letterTitle.textContent = letter.title;
  letterBody.innerHTML = letter.body;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}));
document.getElementById('closeLetter').addEventListener('click', closeLetter);
modal.addEventListener('click', (e) => { if (e.target === modal) closeLetter(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLetter(); });

// The intentionally impossible "no" button.
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
  msg.textContent = 'good choice, Abigail. ♡ still us, still growing, still being written.';
  answerButtons.style.opacity = '.45';
});

// Optional local audio file: assets/our-song.mp3
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
    musicBtn.innerHTML = '♫ <span>add our-song.mp3</span>';
    setTimeout(() => { musicBtn.innerHTML = '♫ <span>our song</span>'; }, 2600);
  }
});

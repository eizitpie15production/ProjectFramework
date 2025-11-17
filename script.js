// --- Kode untuk memutar musik saat diklik ---

// 1. Temukan elemen audio di halaman
const musikLatar = document.querySelector('audio');

// 2. Buat fungsi untuk memulai musik (HANYA SEKALI)
function mulaiMusik() {
  if (musikLatar) {
    musikLatar.play()
      .then(() => {
        console.log("Musik berhasil diputar.");
      })
      .catch(error => {
        console.error("Error saat memutar musik:", error);
      });
    document.body.removeEventListener('click', mulaiMusik);
  }
}

// 4. Tambahkan 'event listener' ke seluruh halaman
document.body.addEventListener('click', mulaiMusik);


// --- Kode untuk Modal (Pop-up) ---

// 1. Definisikan semua elemen yang kita butuhkan
//    (Modal Utama)
const modalLaravel = document.getElementById('laravelModal');
const modalCodeIgniter = document.getElementById('codeigniterModal');
const modalVideo = document.getElementById('videoModal');
const modalVideoCodeIgniter = document.getElementById('videoModalCodeIgniter');

//    (Modal Dokumentasi BARU)
const modalDocLaravel = document.getElementById('modalDocLaravel'); // <-- BARU
const modalDocCodeIgniter = document.getElementById('modalDocCodeIgniter'); // <-- BARU

//    (Tombol Pembuka Utama)
const btnLaravel = document.getElementById('btn-laravel');
const btnCodeIgniter = document.getElementById('btn-codeigniter');
const btnVideoLaravel = document.getElementById('btn-video-laravel');
const btnVideoCI = document.getElementById('btn-video-ci');

//    (Tombol Pembuka Dokumentasi BARU)
const btnDocLaravel = document.getElementById('btn-doc-laravel'); // <-- BARU
const btnDocCi = document.getElementById('btn-doc-ci'); // <-- BARU





//    (Semua Tombol Penutup 'x')
const closeButtons = document.querySelectorAll('.close-button');

// 2. Fungsi untuk membuka modal (bisa dipakai ulang)
function openModal(modal) {
  if (modal) {
    modal.classList.add('modal-show');
  }
}

// 3. Fungsi untuk menutup modal (bisa dipakai ulang)
function closeModal(modal) {
  if (modal) {
    modal.classList.remove('modal-show');
  }
}

// 4. Tambahkan Event Listener ke semua tombol pembuka

// Tombol "Selengkapnya" di Kartu
btnLaravel.addEventListener('click', () => {
  openModal(modalLaravel);
});
btnCodeIgniter.addEventListener('click', () => {
  openModal(modalCodeIgniter);
});

// Tombol "Video" di dalam modal "Selengkapnya"
btnVideoLaravel.addEventListener('click', () => {
  openModal(modalVideo);
});
btnVideoCI.addEventListener('click', () => {
  openModal(modalVideoCodeIgniter);
});

// --- KODE BARU UNTUK MODAL DOKUMENTASI ---
// Tombol "Dokumentasi" di Kartu
btnDocLaravel.addEventListener('click', () => {
  openModal(modalDocLaravel);
});

btnDocCi.addEventListener('click', () => {
  openModal(modalDocCodeIgniter);
});


// 5. Tambahkan Event Listener ke SEMUA tombol close (X)
// (Kode ini sudah benar dan tidak perlu diubah)
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

// 6. Tutup modal jika mengklik di luar area konten
window.addEventListener('click', (event) => {
  if (event.target == modalLaravel) closeModal(modalLaravel);
  if (event.target == modalCodeIgniter) closeModal(modalCodeIgniter);
  if (event.target == modalVideo) closeModal(modalVideo);
  if (event.target == modalVideoCodeIgniter) closeModal(modalVideoCodeIgniter);

  // INI ADALAH PERBAIKANNYA (Bagian 1):
  if (event.target == modalDocLaravel) closeModal(modalDocLaravel); // <-- BARU
  if (event.target == modalDocCodeIgniter) closeModal(modalDocCodeIgniter); // <-- BARU
});

// 7. Tutup modal jika menekan tombol "Escape"
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeModal(modalLaravel);
    closeModal(modalCodeIgniter);
    closeModal(modalVideo);
    closeModal(modalVideoCodeIgniter);

    // INI ADALAH PERBAIKANNYA (Bagian 2):
    closeModal(modalDocLaravel); // <-- BARU
    closeModal(modalDocCodeIgniter); // <-- BARU
  }
});
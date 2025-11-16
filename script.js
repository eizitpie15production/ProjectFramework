// --- Kode untuk memutar musik saat diklik ---

// 1. Temukan elemen audio di halaman
const musikLatar = document.querySelector('audio');

// 2. Buat fungsi untuk memulai musik (HANYA SEKALI)
function mulaiMusik() {
  if (musikLatar) {
    // Coba putar musik
    musikLatar.play()
      .then(() => {
        // Berhasil!
        console.log("Musik berhasil diputar.");
      })
      .catch(error => {
        // Gagal (mungkin browser tetap memblokir)
        console.error("Error saat memutar musik:", error);
      });

    // 3. Hapus listener ini agar tidak berjalan setiap kali diklik
    document.body.removeEventListener('click', mulaiMusik);
  }
}

// 4. Tambahkan 'event listener' ke seluruh halaman
//    Saat pengguna mengklik di mana saja, jalankan fungsi 'mulaiMusik'
document.body.addEventListener('click', mulaiMusik);


// --- Kode untuk Modal (Pop-up) ---

// 1. Definisikan semua elemen yang kita butuhkan
//    (Modal)
const modalLaravel = document.getElementById('laravelModal');
const modalCodeIgniter = document.getElementById('codeigniterModal');
const modalVideo = document.getElementById('videoModal');
const modalVideoCodeIgniter = document.getElementById('videoModalCodeIgniter');

//    (Tombol Pembuka)
const btnLaravel = document.getElementById('btn-laravel');
const btnCodeIgniter = document.getElementById('btn-codeigniter');
const btnVideoLaravel = document.getElementById('btn-video-laravel');
const btnVideoCI = document.getElementById('btn-video-ci');

//    (Tombol Penutup)
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
btnLaravel.addEventListener('click', () => {
  openModal(modalLaravel);
});

btnCodeIgniter.addEventListener('click', () => {
  openModal(modalCodeIgniter);
});

btnVideoLaravel.addEventListener('click', () => {
  openModal(modalVideo);
});

btnVideoCI.addEventListener('click', () => {
  openModal(modalVideoCodeIgniter);
});

// 5. Tambahkan Event Listener ke SEMUA tombol close (X)
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Temukan modal terdekat yang menaungi tombol ini
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

// 6. Tutup modal jika mengklik di luar area konten
window.addEventListener('click', (event) => {
  if (event.target == modalLaravel) {
    closeModal(modalLaravel);
  }
  if (event.target == modalCodeIgniter) {
    closeModal(modalCodeIgniter);
  }
  if (event.target == modalVideo) {
    closeModal(modalVideo);
  }
  if (event.target == modalVideoCodeIgniter) {
    closeModal(modalVideoCodeIgniter);
  }
});

// 7. Tutup modal jika menekan tombol "Escape"
document.addEventListener('keydown', (event) => {
  // Periksa apakah tombol yang ditekan adalah 'Escape'
  if (event.key === 'Escape') {
    // Jika ya, jalankan fungsi closeModal pada setiap modal.
    // Tidak masalah jika modalnya sudah tertutup,
    // .remove() tidak akan error jika kelasnya tidak ada.
    closeModal(modalLaravel);
    closeModal(modalCodeIgniter);
    closeModal(modalVideo);
    closeModal(modalVideoCodeIgniter);
  }
});
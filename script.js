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
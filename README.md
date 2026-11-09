# Password Generator

Pembuat kata sandi, frasa sandi, dan nama pengguna versi web. Dibangun dengan React, Vite, dan Tailwind CSS. Tampilan mobile-first: di handphone satu kolom, di laptop menyesuaikan lebih lega.

Buka langsung tanpa install: https://agusdwijayanto.github.io/password-generator/

## Fitur

- **Kata Sandi** — panjang 5 sampai 128, pilihan A–Z, a–z, 0–9, simbol, hindari karakter ambigu, angka minimum, dan karakter khusus minimum.
- **Frasa Sandi** — jumlah kata, pemisah kata, huruf kapital, dan sertakan nomor.
- **Nama Pengguna** — alamat email plus (sub-alamat) dari email kamu.

Semua proses berjalan di browser. Tidak ada sandi yang dikirim atau disimpan di server. Keacakan memakai Web Crypto API.

## Struktur File

```text
index.html                  halaman utama
src/
  App.jsx                   kerangka aplikasi dan tab
  main.jsx                  titik masuk React
  index.css                 Tailwind dan gaya dasar
  components/
    PasswordTab.jsx         tab kata sandi
    PassphraseTab.jsx       tab frasa sandi
    UsernameTab.jsx         tab nama pengguna
    ResultBox.jsx           kotak hasil, salin, buat ulang
    Toggle.jsx              saklar pilihan
    Stepper.jsx             tombol tambah kurang angka
  lib/
    random.js               acak aman dari Web Crypto
    password.js             logika kata sandi
    passphrase.js           logika frasa sandi
    words.js                daftar kata frasa sandi
    username.js             logika alamat email plus
test/
  generator.test.mjs        tes logika generator
tailwind.config.js
vite.config.js
```

## Jalan di Lokal

```bash
npm install
npm run dev
```

Tes dan build:

```bash
npm test
npm run build
```

Versi live di GitHub Pages di-deploy dari branch `gh-pages`, isinya hasil `npm run build` dari branch `main`.

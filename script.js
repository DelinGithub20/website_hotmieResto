// ambil elemen form dan input
const form = document.getElementById("contactForm");
const namaInput = document.getElementById("namaInput");
const emailInput = document.getElementById("emailInput");
const noHPInput = document.getElementById("noHpInput");
const pesan = document.getElementById("pesan");

// menggunakan array untuk menyimpan form data
const kontakData = [];

// fungsi untuk menambahkan data kontak baru
function tambahKontak() {
  const nama = namaInput.value;
  const email = emailInput.value;
  const noHP = noHPInput.value;
  const inputPesan = pesan.value;

  //buat objek kontak
  const kontak = {
    nama,
    email,
    noHP,
    inputPesan,
  };

  //tambahkan objek kontak ke dalam array kontak data
  kontakData.push(kontak);

  //reset nilai input
  namaInput.value = "";
  emailInput.value = "";
  noHPInput.value = "";
  pesan.value = "";

  // alert untuk pesan sukses
  alert("Data Berhasil Disimpan!");
}

// untuk aksi btn submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); //mencegah form tersubmit secara default
  tambahKontak();
});

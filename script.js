// Data mahasiswa
const mahasiswa = {
    nama: "Aditya Abdu lrahman nggobe",
    npm: "25120027",
    programStudi: "Teknik Informatika"
};


// Object Destructuring
const { nama, npm, programStudi } = mahasiswa;


// Menampilkan identitas mahasiswa
document.getElementById("nama").textContent = nama;
document.getElementById("npm").textContent = npm;
document.getElementById("program-studi").textContent = programStudi;


// Data mata kuliah
const daftarMataKuliah = [
    {
        matkul: "Pemrograman Web",
        nilai: 85
    },
    {
        matkul: "Sistem Operasi",
        nilai: 70
    },
    {
        matkul: "Basis Data",
        nilai: 80
    },
    {
        matkul: "Jaringan Komputer",
        nilai: 75
    },
    {
        matkul: "Algoritma dan Pemrograman",
        nilai: 90
    },
    {
        matkul: "Rekayasa Perangkat Lunak",
        nilai: 65
    }
];


// Menangkap tombol dan daftar nilai
const tombolNilai = document.getElementById("tombol-nilai");
const daftarNilai = document.getElementById("daftar-nilai");


// Event Listener tombol
tombolNilai.addEventListener("click", function () {

    // Menyaring nilai di atas 75
    const mataKuliahLulus = daftarMataKuliah.filter(
        ({ nilai }) => nilai > 75
    );


    // Mengubah data menjadi HTML
    const hasilHTML = mataKuliahLulus.map(
        ({ matkul, nilai }) => `<li>${matkul}: ${nilai}</li>`
    );


    // Menampilkan hasil ke halaman
    daftarNilai.innerHTML = hasilHTML.join("");
});
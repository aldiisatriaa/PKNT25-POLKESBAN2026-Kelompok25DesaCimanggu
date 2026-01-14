function hitungIMT() {
    const tinggi = document.getElementById("tinggi").value;
    const berat = document.getElementById("berat").value;
    const usia = document.getElementById("usia").value;
    const hasil = document.getElementById("hasil");

    if (tinggi === "" || berat === "" || usia === "") {
        hasil.innerHTML = "Mohon lengkapi semua data.";
        return;
    }

    const tinggiMeter = tinggi / 100;
    const imt = berat / (tinggiMeter * tinggiMeter);
    let kategori = "";

    if (imt < 18.5) {
        kategori = "Kurus";
    } else if (imt < 25) {
        kategori = "Normal";
    } else if (imt < 30) {
        kategori = "Kelebihan Berat Badan";
    } else {
        kategori = "Obesitas";
    }

    hasil.innerHTML = `
        Nilai IMT Anda: ${imt.toFixed(2)} <br>
        Kategori: ${kategori}
    `;
}

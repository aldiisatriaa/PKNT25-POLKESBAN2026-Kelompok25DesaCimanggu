function hitungBMI() {
  const tinggi = document.getElementById("height").value;
  const berat = document.getElementById("weight").value;
  const usia = document.getElementById("age").value;

  if (tinggi === "" || berat === "" || usia === "") {
    alert("Mohon lengkapi semua data!");
    return;
  }

  const tinggiMeter = tinggi / 100;
  const bmi = berat / (tinggiMeter * tinggiMeter);
  const bmiFix = bmi.toFixed(1);

  let kategori = "";

  if (bmi < 18.5) {
    kategori = "Kurus";
  } else if (bmi < 25) {
    kategori = "Normal";
  } else if (bmi < 30) {
    kategori = "Overweight";
  } else if (bmi < 35) {
    kategori = "Obesitas Kelas I";
  } else if (bmi < 40) {
    kategori = "Obesitas Kelas II";
  } else {
    kategori = "Obesitas Kelas III";
  }

  document.getElementById("bmiValue").innerText = bmiFix;
  document.getElementById("category").innerText = kategori;
  document.getElementById("result").style.display = "block";
}

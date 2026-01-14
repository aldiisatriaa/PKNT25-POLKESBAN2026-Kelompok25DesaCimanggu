document.getElementById("bmiForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const height = document.getElementById("height").value / 100;
    const weight = document.getElementById("weight").value;
    const age = document.getElementById("age").value;

    const bmi = (weight / (height * height)).toFixed(2);

    let category = "";
    let color = "";

    if (bmi < 18.5) {
        category = "Kurus";
        color = "#3498db";
    } else if (bmi < 25) {
        category = "Normal";
        color = "#2ecc71";
    } else if (bmi < 30) {
        category = "Kelebihan Berat Badan";
        color = "#f1c40f";
    } else {
        category = "Obesitas";
        color = "#e74c3c";
    }

    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.style.background = color;
    resultDiv.style.color = "white";

    resultDiv.innerHTML = `
        <strong>Hasil Perhitungan</strong><br><br>
        Usia: ${age} tahun<br>
        BMI: ${bmi}<br>
        Kategori: <strong>${category}</strong>
    `;
});

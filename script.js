function kirimData(event) {
    event.preventDefault();

    const tinggi = document.getElementById("tinggi").value;
    const berat = document.getElementById("berat").value;
    const usia = document.getElementById("usia").value;

    const tinggiMeter = tinggi / 100;
    const imt = berat / (tinggiMeter * tinggiMeter);

    localStorage.setItem("dataIMT", JSON.stringify({
        tinggi,
        berat,
        usia,
        imt
    }));

    window.location.href = "hasil.html";
}

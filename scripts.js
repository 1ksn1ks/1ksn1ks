// scripts.js
const connectButton = document.getElementById("connectButton")
connectButton.onclick = connect
document.addEventListener("DOMContentLoaded", function() {
    // Initialize the map
    var map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add markers to the map
    var markers = [
        [51.505, -0.09, "<b>Project in your local area</b>..."],
        [45, 15, "<b>8 000 000 000!</b>..."],
        [40, 15, "<b>BASIC users</b>..."],
        [35, 15, "<b>KYC users</b>..."],
        [30, 15, "<b>MORE TIERS OF APPROVAL</b>..."],
        [25, 15, "SPAWN POINT = ANTARCTICA..."],
        [20, 15, "<b>HELLO FUTURE</b>"],
        [45.899438, 15.947938, "<b>USER ID</b><br>0.0.981180/1ksn1ks"]
    ];

    markers.forEach(function(marker) {
        L.marker([marker[0], marker[1]]).addTo(map).bindPopup(marker[2]).openPopup();
    });
});

async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum.request({ method: "eth_requestAccounts" })
      } catch (error) {
        console.log(error)
      }
      connectButton.innerHTML = "Connected"
      const accounts = await ethereum.request({ method: "eth_accounts" })
      console.log(accounts)
    } else {
      connectButton.innerHTML = "Please install MetaMask"
    }
};

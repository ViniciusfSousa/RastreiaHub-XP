const trackingCodeInput = document.getElementById("tracking-code-input");

trackingCodeInput.addEventListener("beforeinput", (event) => {
    if (event.data && /[^a-zA-Z0-9]/.test(event.data)) {
        event.preventDefault();
    }
});

const searchScreen = document.getElementById("search-screen");
const trackingScreen = document.getElementById("tracking-screen");

const searchButton = document.getElementById("btn-search");
const backButton = document.getElementById("btn-back");

const trackingData = {
    code: "AB123456789BR",
    status: "Em trânsito",
    origin: "Curitiba - PR",
    destination: "São Paulo - SP",
    lastUpdate: "14/06/2026 - 15:30"
};

searchButton.addEventListener("click", async () => {
    
    document.getElementById("tracking-code").textContent = data.code;
    document.getElementById("tracking-status").textContent = data.status;
    document.getElementById("tracking-origin").textContent = data.origin;
    document.getElementById("tracking-destination").textContent = data.destination;
    document.getElementById("last-update").textContent = data.lastUpdate;

    searchScreen.style.display = "none";
    trackingScreen.style.display = "block";

});

backButton.addEventListener("click", () => {

    trackingCodeInput.value = "";

    trackingScreen.style.display = "none";
    searchScreen.style.display = "block";

});
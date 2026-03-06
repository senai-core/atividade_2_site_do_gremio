const leaderboardData = {
    GT3: [
        { piloto: "L. Wagner", carro: "Porsche 911 GT3 R", volta: "7:01.9", ano: "2025" },
        { piloto: "M. Keller", carro: "Mercedes-AMG GT3", volta: "7:03.4", ano: "2025" },
        { piloto: "E. Schmitt", carro: "BMW M4 GT3", volta: "7:05.2", ano: "2024" }
    ],
    GT4: [
        { piloto: "A. Costa", carro: "Porsche 718 Cayman GT4", volta: "7:36.8", ano: "2025" },
        { piloto: "T. Müller", carro: "Aston Martin Vantage GT4", volta: "7:39.1", ano: "2024" },
        { piloto: "R. Dias", carro: "Mercedes-AMG GT4", volta: "7:41.0", ano: "2025" }
    ],
    TCR: [
        { piloto: "N. Hoffman", carro: "Audi RS3 LMS", volta: "8:08.7", ano: "2025" },
        { piloto: "C. Pereira", carro: "Honda Civic Type R TCR", volta: "8:11.3", ano: "2024" },
        { piloto: "F. Klein", carro: "Hyundai Elantra N TCR", volta: "8:12.9", ano: "2025" }
    ],
    Hypercar: [
        { piloto: "J. Hartmann", carro: "Porsche 963", volta: "6:48.5", ano: "2025" },
        { piloto: "D. Vogt", carro: "Ferrari 499P", volta: "6:50.1", ano: "2025" },
        { piloto: "S. Brandt", carro: "Toyota GR010", volta: "6:52.4", ano: "2024" }
    ]
};

const tabs = document.querySelectorAll(".tab");
const leaderboardBody = document.getElementById("leaderboard_body");

function renderTable(classe) {
    const rows = leaderboardData[classe] || [];

    leaderboardBody.innerHTML = rows
        .map(
            (item) => `
                <tr>
                    <td>${item.piloto}</td>
                    <td>${item.carro}</td>
                    <td>${item.volta}</td>
                    <td>${item.ano}</td>
                </tr>
            `
        )
        .join("");
}

function activateTab(tab) {
    tabs.forEach((btn) => {
        const isActive = btn === tab;
        btn.classList.toggle("active", isActive);
        btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    renderTable(tab.dataset.classe);
}

tabs.forEach((tab) => {
    tab.addEventListener("click", () => activateTab(tab));
});

renderTable("GT3");

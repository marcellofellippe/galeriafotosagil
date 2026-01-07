document.addEventListener("DOMContentLoaded", () => {

    const photos = [
        { title: "Leão", img: "img/leao.jpg" },
        { title: "Tigre", img: "img/tigre.jpg" },
        { title: "Elefante", img: "img/elefante.jpg" },
        { title: "Panda", img: "img/panda.jpg" },
        { title: "Lobo", img: "img/lobo.jpg" },
        { title: "Girafa", img: "img/girafa.jpg" },
        { title: "Gato", img: "img/gato.jpg" },
        { title: "Cachorro", img: "img/cachorro.png" },
        { title: "Águia", img: "img/aguia.jpg" },
        { title: "Cavalo", img: "img/cavalo.jpg" }
    ];

    const photoGrid = document.getElementById("photoGrid");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const noResults = document.getElementById("noResults");

    function normalizar(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }

    function render(filter = "") {
        photoGrid.innerHTML = "";
        noResults.classList.add("hidden");

        const filtered = photos.filter(photo =>
            normalizar(photo.title).includes(normalizar(filter))
        );

        if (filtered.length === 0) {
            noResults.classList.remove("hidden");
            return;
        }

        filtered.forEach(photo => {
            const card = document.createElement("div");
            card.className = "photo-card";

            card.innerHTML = `
                <img src="${photo.img}" alt="${photo.title}">
                <p>${photo.title}</p>
            `;

            photoGrid.appendChild(card);
        });
    }

    searchInput.addEventListener("input", e => render(e.target.value));
    searchButton.addEventListener("click", () => render(searchInput.value));

    render();
});
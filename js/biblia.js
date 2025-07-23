function carregarSalmo(numero) {
    fetch(`salmos/salmo${numero}.html`)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            const divSalmo = doc.querySelector('#conteudoParaBiblia');
            const divLateral = doc.querySelector('#lateralD');

            if (divSalmo) {
                const mainBiblia = document.getElementById('conteudo');
                mainBiblia.innerHTML = divSalmo.innerHTML;
            }

            if (divLateral) {
                const mainLateral = document.getElementById('lateralD');
                mainLateral.innerHTML = divLateral.innerHTML;
            }
        })
        .catch(error => {
            console.error("Erro ao carregar salmo:", error);
            document.getElementById('conteudo').innerHTML = "<p>Erro ao carregar o salmo.</p>";
        });
}

document.addEventListener("DOMContentLoaded", () => {
    carregarSalmo(1);
});
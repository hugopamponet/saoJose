document.addEventListener("DOMContentLoaded", () => {
    fetch('salmos/salmo1.html')
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const divSalmo = doc.querySelector('#conteudoParaBiblia'); // apenas a div específica
            const divLateral = doc.querySelector('#lateralD')

            if (divSalmo) {
                const mainBiblia = document.getElementById('conteudo');
                mainBiblia.innerHTML = divSalmo.innerHTML; // insere só o conteúdo interno da div
                const mainLateral = document.getElementById('teste')
                mainLateral.innerHTML = divLateral.innerHTML;
            } else {
                console.error("A div #conteudoSalmo não foi encontrada em salmo.html");
            }
        })
        .catch(error => {
            console.error("Erro ao carregar salmo.html:", error);
        });

    });
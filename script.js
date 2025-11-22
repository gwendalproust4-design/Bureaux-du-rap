// --- LOGIQUE DU SITE (script.js) ---

const grid = document.getElementById('rapperGrid');
const searchInput = document.getElementById('searchInput');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// Configuration
const CARDS_PER_LOAD = 12;
let currentList = [];
let currentIndex = 0;

// Fonction pour mélanger un tableau (Algorithme de Fisher-Yates)
function melangerTableau(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Fonction pour créer une carte HTML
function creerCarte(rappeur) {
    const classeSpeciale = rappeur.statut ? rappeur.statut : '';
    const lien = rappeur.id ? `artiste.html?id=${rappeur.id}` : '#';

    let certificationsHTML = '';
    if (rappeur.certifications) {
        if (rappeur.certifications.or) certificationsHTML += '<span title="Disque d\'Or" style="margin-right:5px; font-size:1.2rem;">📀</span>';
        if (rappeur.certifications.platine) certificationsHTML += '<span title="Disque de Platine" style="margin-right:5px; font-size:1.2rem;">💿</span>';
        if (rappeur.certifications.diamant) certificationsHTML += '<span title="Disque de Diamant" style="font-size:1.2rem;">💎</span>';
    }
    if (certificationsHTML === '') {
        certificationsHTML = '<span style="opacity:0.5; font-size:0.8rem; font-weight:700; letter-spacing:1px;">🎤 ARTISTE</span>';
    }

    // Image avec le nouveau wrapper pour le zoom
    const imgHTML = `
        <div class="card-image-wrapper">
            <img src="${rappeur.image}" alt="${rappeur.nom}" class="card-image" loading="lazy" onerror="this.src='https://placehold.co/400x400/1a1a1a/8A2BE2?text=${rappeur.nom.replace(' ','+')}'">
        </div>
    `;

    return `
        <a href="${lien}" style="text-decoration:none; color:inherit; display:block;">
            <article class="card ${classeSpeciale}">
                ${imgHTML}
                <div class="card-content">
                    <div class="card-header">
                        <div>
                            <h2 class="card-name">${rappeur.nom}</h2>
                            <span style="font-size:0.8rem; color:#8A2BE2; font-weight:600; text-transform:uppercase; letter-spacing:1px;">${rappeur.style || 'Rap'}</span>
                        </div>
                        <div class="card-certifs">
                            ${certificationsHTML}
                        </div>
                    </div>
                    <p class="card-bio">${rappeur.bio}</p>
                </div>
            </article>
        </a>
    `;
}

// --- SYSTÈME D'AFFICHAGE PROGRESSIF ---

function initialiserAffichage(liste) {
    if (!grid) return; // SÉCURITÉ : Si on n'est pas sur l'accueil, on arrête tout.
    
    currentList = liste;
    currentIndex = 0;
    grid.innerHTML = '';
    afficherLotSuivant();
}

function afficherLotSuivant() {
    const nextRappeurs = currentList.slice(currentIndex, currentIndex + CARDS_PER_LOAD);
    nextRappeurs.forEach(rappeur => {
        grid.innerHTML += creerCarte(rappeur);
    });
    currentIndex += nextRappeurs.length;
    
    if (loadMoreBtn) {
        if (currentIndex >= currentList.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', afficherLotSuivant);
}

// --- DÉMARRAGE DU SITE ---
if (typeof dataRappeurs !== 'undefined' && grid) {
    let listeDemarrage = melangerTableau([...dataRappeurs]);
    initialiserAffichage(listeDemarrage);
}

// --- SYSTÈME DE RECHERCHE ---
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const recherche = e.target.value.toLowerCase();
        const resultats = dataRappeurs.filter(rappeur => {
            return rappeur.nom.toLowerCase().includes(recherche) || 
                   (rappeur.bio && rappeur.bio.toLowerCase().includes(recherche));
        });
        initialiserAffichage(resultats);
    });
}

// --- SYSTÈME DE FILTRES ---
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.id !== 'loadMoreBtn') {
            document.querySelectorAll('.filter-btn:not(#loadMoreBtn)').forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const category = button.getAttribute('data-filter');
            let resultatsFiltres;

            if (category === 'all') {
                resultatsFiltres = melangerTableau([...dataRappeurs]);
            } else if (category === 'classique') {
                resultatsFiltres = dataRappeurs.filter(rappeur => !rappeur.statut);
                resultatsFiltres = melangerTableau(resultatsFiltres);
            } else {
                resultatsFiltres = dataRappeurs.filter(rappeur => rappeur.statut === category);
                resultatsFiltres = melangerTableau(resultatsFiltres);
            }
            
            initialiserAffichage(resultatsFiltres);
        }
    });
});
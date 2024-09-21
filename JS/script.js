// Fonction pour afficher la section sélectionnée et masquer les autres
function afficherSection(sectionId) {
    const sections = document.querySelectorAll('.demo-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Par défaut, afficher la première section (DOM Methods)
window.onload = function () {
    afficherSection('domMethods');
};

// *************** DOM Methods Demo ***************
// Exemple de modification de contenu dans la section DOM Methods
function changerTexteDemo() {
    let paragraphe = document.getElementById("demo-paragraph");
    paragraphe.textContent = "Le texte a été changé en utilisant les méthodes DOM!";
}

// Fonction pour ajouter un élément à une liste dans la section DOM Methods
function ajouterElementListe() {
    let nouvelleLigne = document.createElement("li");
    let texte = document.createTextNode("Nouvel élément ajouté");
    nouvelleLigne.appendChild(texte);
    document.getElementById("maListe").appendChild(nouvelleLigne);
}

// *************** DOM Document Demo ***************
// Afficher des informations sur le document
function afficherInfosDocument() {
    let infos = `
        <ul>
            <li><strong>Titre du document :</strong> ${document.title}</li>
            <li><strong>URL du document :</strong> ${document.URL}</li>
            <li><strong>Dernière modification :</strong> ${document.lastModified}</li>
        </ul>
    `;
    document.getElementById('document-info').innerHTML = infos;
}

// *************** DOM Elements Demo ***************
// Modifier le texte d'un élément
function modifierParagraphe() {
    let nouveauTexte = document.getElementById("texteElement").value;
    document.getElementById("paragraphe-element").textContent = nouveauTexte;
}

// Changer la couleur du texte
function changerCouleur() {
    document.getElementById("paragraphe-element").style.color = "blue";
}

// Cacher l'élément
function cacherElement() {
    document.getElementById("paragraphe-element").style.display = "none";
}

// Afficher l'élément
function afficherElement() {
    document.getElementById("paragraphe-element").style.display = "block";
}

// *************** DOM HTML Demo ***************
// Fonction pour changer l'image dans la section Propriétés HTML
function changerImage() {
    let image = document.getElementById("image-demo");
    if (image.src.includes("image_actuelle.jpg")) {
        image.src = "nouvelle_image.jpg"; // Remplace par l'URL de la nouvelle image
    } else {
        image.src = "image_actuelle.jpg"; // Remettre l'image d'origine si elle est déjà changée
    }
}

// *************** DOM Forms (Validation) Demo ***************
// Validation simple d'un formulaire
function validerFormulaire() {
    let nom = document.getElementById("nomFormulaire").value;
    if (nom === "") {
        alert("Le nom ne peut pas être vide");
        return false;
    } else {
        alert("Formulaire soumis avec succès !");
        return true;
    }
}

// *************** DOM CSS Demo ***************
// Fonction pour appliquer une classe CSS spéciale au paragraphe
// Variable pour compter le nombre de clics
let clicCompteur = 0;

// Fonction pour appliquer une classe CSS spéciale au paragraphe
function appliquerClasseCSS() {
    let element = document.getElementById("paragraphe-css");
    
    // Incrémenter le compteur à chaque clic
    clicCompteur++;

    // Premier clic : appliquer italique et gras
    if (clicCompteur === 1) {
        element.style.fontStyle = "italic";
        element.style.fontWeight = "bold";
        element.style.opacity = "1"; // Remettre l'opacité au cas où
    }
    // Deuxième clic : appliquer un style filigrane
    else if (clicCompteur === 2) {
        element.style.fontStyle = "normal";
        element.style.fontWeight = "normal";
        element.style.opacity = "0.3"; // Texte en filigrane (transparence)
        element.style.textAlign = "center"; // Centrer le texte si désiré
        element.style.color = "#999"; // Couleur plus claire pour l'effet filigrane
    }
    // Troisième clic : réinitialiser le style
    else if (clicCompteur === 3) {
        element.style.fontStyle = "normal";
        element.style.fontWeight = "normal";
        element.style.opacity = "1"; // Réinitialiser l'opacité
        element.style.color = "black"; // Réinitialiser la couleur
        clicCompteur = 0; // Réinitialiser le compteur pour recommencer
    }
}

// *************** DOM Animations Demo ***************
// Exemple d'animation simple : faire bouger un élément
function demarrerAnimation() {
    let element = document.getElementById("element-animation");
    let position = 0;
    let id = setInterval(frame, 10);

    function frame() {
        if (position === 350) {
            clearInterval(id);
        } else {
            position++;
            element.style.left = position + "px";
        }
    }
}

// *************** DOM Events Demo ***************
// Gérer un événement clic
function gererClic() {
    alert("Vous avez cliqué sur le bouton !");
}

// *************** DOM Event Listener Demo ***************
// Ajouter un écouteur d'événement
function ajouterEcouteur() {
    let bouton = document.getElementById("bouton-event");
    bouton.addEventListener("click", function() {
        alert("Événement écouté !");
    });
}

// *************** DOM Nodes Demo ***************
// Ajouter un nouveau nœud à la liste
function ajouterNoeud() {
    let nouvelleListe = document.createElement("li");
    let texte = document.createTextNode("Nouveau nœud ajouté");
    nouvelleListe.appendChild(texte);
    document.getElementById("liste-noeuds").appendChild(nouvelleListe);
}

// *************** DOM Collections Demo ***************
// Parcourir une collection d'éléments et changer leur style
function changerStyleCollection() {
    let elements = document.getElementsByClassName("collection-item");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "green";
    }
}

// *************** DOM Node List Demo ***************
// Parcourir une NodeList et afficher le contenu
function afficherNodeList() {
    let nodeList = document.querySelectorAll(".nodelist-item");
    nodeList.forEach(function (item) {
        console.log(item.textContent);
    });
}

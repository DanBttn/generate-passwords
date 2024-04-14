//recuperation des elements
const minuscules = document.getElementById("minuscules");
const majuscules = document.getElementById("majuscules");
const nombres = document.getElementById("nombres");
const symboles = document.getElementById("symboles");
const Taille = document.getElementById("Taille");
const passwordInput = document.getElementById("passwordInput");
const copyBtn = document.querySelector(".copy-btn");

//definition des strategies mot de passe
const charTypes = {
    minuscules: "abcdefghijklmnopqrstuvwxyz",
    majuscules: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    nombres: "0123456789",
    symboles: "!@#$%^&()-_=+[]{}|;:,.<>?",
};


//génération du mot de passe
function generate() {
    let charSet = "";
    let compteur = 0;

    //Etape des activations des stratégies
    if (minuscules.checked) {
        charSet += charTypes.minuscules;
        compteur++;
    }
    if (majuscules.checked) {
        charSet += charTypes.majuscules;
        compteur++;
    }
    if (nombres.checked) {
        charSet += charTypes.nombres;
        compteur++;
    }
    if (symboles.checked) {
        charSet += charTypes.symboles;
        compteur++;
    }
//gestion des erreurs
    if (compteur < 2) {
        alert("veuillez cocher deux cases");
        return;
    }

//generation du mot de passe en fonction de sa longueur et son aléatoire
    let passwordText = "";
    if (charSet != "") {
        for (let i = 0; i < Taille.value; i++) {
            passwordText += charSet[Math.floor(Math.random() * charSet.length)];
        }
    }


    passwordInput.value = passwordText;
    document.getElementById("passwordInput").style.color = "white"
    document.getElementById("TailleValeur").innerText = Taille.value;
}

Taille.addEventListener("input", function () {
    document.getElementById("TailleValeur").innerText = this.value;
});

//Copy/paste le mot de passe

copyBtn.addEventListener("click", copyPassword);

let locked = false;

function copyPassword() {
    passwordInput.select();
    passwordInput.setSelectionRange(0, 20); // Sélectionne tout le texte dans le champ de mot de passe
    document.execCommand("copy");

    if (!locked) {
        copyBtn.classList.add("active");
        locked = true;

        //Mise a jour du mot de passe en fonction de sa longueur
        setTimeout(() => {
            copyBtn.classList.remove("active");
            locked = false;
        }, 600);
    }
}
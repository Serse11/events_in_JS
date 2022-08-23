/**
 * --------------------------------------------
 * 1 - Au click sur le bouton "Cacher" : 
 * 
 * → Cacher le paragraphe
 * → Changer le texte du bouton "Cacher" en "Afficher"
 * 
 * Si le bouton est cliqué de nouveau : 
 * 
 * → Le paragraphe s'affiche de nouveau
 * → Changer le texte du bouton "Afficher" en "Cacher"
 * --------------------------------------------
 */

let btn = document.querySelector('#butn');
let searchP = document.querySelector('#text-descritpon');
function display() {
    if(getComputedStyle(searchP).visibility != "hidden"){
        searchP.style.visibility = "hidden";
        btn.innerText = 'Afficher';
      } else {
        searchP.style.visibility = "visible";
        btn.innerText = 'Cacher';
      };
};

/**
 * --------------------------------------------
 * 2 - Création d'une calculatrice simple : 
 * 
 * → Créer 3 champs inputs :
 *   - Le premier et le troisième sont de type number et permettent de saisir un nombre (1 et 2 par exemple)
 *   - Le second est de type texte et permet de saisir un opérateur (+, -, *, /)
 * 
 * → Créer un bouton qui déclenche le calcul des 2 inputs par l'opérateur
 * 
 * →  Afficher le résultat dans le HTML. Tant qu'il n'y a pas de résultat, afficher un petit texte en attente.
 * --------------------------------------------
 */

let firstInput = document.querySelector('#number-1');
let secondInput = document.querySelector('#string');
let thirdInput = document.querySelector('#number-2');
let fourthInput = document.querySelector('#result');


function calculate() {
    let number1 = parseFloat(firstInput.value);
    let number2 = parseFloat(thirdInput.value);
    let operator = secondInput.value;
    let result = 0;

    switch (operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/": 
            result = number1 / number2;
            break;     
        default:
            break;
    }

    fourthInput.innerText = `${result}`;
};

document.querySelector('#btn-cunter').addEventListener('click', calculate);

/**
 * --------------------------------------------
 * 3 - Créer une classe User qui possède :
 *  → 7 propriétés : firstname, lastname, picture, email, isLoggedIn, productsSelected, productsMouseOver
 *  → 3 méthodes : logIn(), displayProductsMouseOver(), logOut(). Chaque méthode doit avoir un corps (c'est-à-dire effectuer des actions concrètes)
 *  → Instancier 1 objet depuis cette classe
 * --------------------------------------------
 */

class User {
    firstname;
    lastname;
    picture;
    email; 
    isLoggedIn = false;
    productsSelected = [];
    productsMouseOver = [];

    constructor(firstname, lastname, picture, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.picture = picture;
        this.email = email;
    }

    logIn() {
        this.isLoggedIn = true;
    }

    logOut() {
        this.isLoggedIn = false;
    }

    displayProductsMouseOver() {

    }
    
};


let userOne = new User('Michel', 'De Montaigne', "https://images.schoolmouv.fr/michel-de-montaigne.jpg", "michelLeSangDeLaVeine@gmail.com");
const userSection = document.querySelector("#user");
 userSection.innerHTML = 
 `
 <h2></h2>
 <h3>${userOne.firstname}</h3>
 <p>${userOne.lastname}</p>
 <img src="${userOne.picture}" id="michel">
 `;

//console.log(userOne);
/**
 * --------------------------------------------
 * 4 - Créer un container avec 3 div (sans passer par JS, en HTML/CSS classique). Chaque div propose un produit à acheter avec une image, un titre, un petit paragraphe et un bouton "Acheter 🤓"
 * 
 * → Attacher un écouteur d'événément de type "click" sur chaque bouton "Acheter 🤓". 
 * → Si une div est cliquée, l'utilisateur voit le produit ajouté dans la propriété "selectedProducts" de son objet.
 * 
 * Le pôle Marketing vous demande d'ajouter un bout de code afin de relever l'intérêt des utilisateurs vis-à-vis des produits proposés sur la e-boutique
 * De votre côté, vous imaginez le procédé suivant : "j'écoute le nombre de fois où l'utilisateur passe sa souris sur la div de l'un des produits"
 * 
 * → Attacher un écouteur d'événément de type "mouseover" sur chaque div. 
 * → Compter le nombre de fois où la souris de l'utilisateur passe sur chaque div. Dès lors que la souris survole une div, mettre à jour le "nombre de fois où la div X a été survolée" dans l'objet utilisateur
 * --------------------------------------------
 */
 const newDivList = document.querySelectorAll("#product-container div");

const ctaBtnList = document.querySelectorAll('.buy-object')
ctaBtnList.forEach(btn => {
    btn.addEventListener('click', function addToselectedProduct() {
        userOne.productsSelected.push(btn.id);
        let div1Clicked = userOne.productsSelected.filter(element => element === "buy-object");
        let div2Clicked = userOne.productsSelected.filter(element => element === "product-2");
        let div3Clicked = userOne.productsSelected.filter(element => element === "product-3");
        console.log(div1Clicked.length);
        console.log(div2Clicked.length);
        console.log(div3Clicked);
    })
});

  for(let i = 0; i < newDivList.length; i++) {
      newDivList[i].classList.add("countHover");
      newDivList[i].id = `card-${i+1}`;
  }
 
  let counterCard1 = 0;
  let counterCard2 = 0;
  let counterCard3 = 0;
  let counterTotal = 0;
 
  const totalElement = document.querySelector("#hover-total");
 
  document.querySelectorAll(".countHover").forEach(element => {
      element.addEventListener("mouseenter", () => {
         switch (element.id) {
             case "card-1":
                 counterCard1++;
                 counterTotal++;
                 document.querySelector("#counter-1").innerHTML = `${counterCard1}`;
                 break;
             case "card-2":
                 counterCard2++;
                 counterTotal++;
                 document.querySelector("#counter-2").innerHTML = `${counterCard2}`;
                 break;
             case "card-3":
                 counterCard3++;
                 counterTotal++;
                 document.querySelector("#counter-3").innerHTML = `${counterCard3}`;
                 break;
             default:
                 break;
         }
 
         if(counterTotal > 0) {
             totalElement.innerHTML =`${counterTotal}`;
         }
 
         if(
             counterCard1 > 0 && counterCard1 < 2
             && counterCard2 > 0 && counterCard2 < 2
             && counterCard3 > 0 && counterCard3 < 2
         ) {
            userOne.productsMouseOver.push(counterCard1, counterCard2, counterCard3);
         }
      });
  });

console.log(userOne);
/**
 * --------------------------------------------
 * 5 - Ajouter un header avec 3 boutons : 
 *
 * → Le bouton n°1 "Se connecter" déclenche la méthode logIn() de l'utilisateur instancié
 * → Le bouton n°2 "Se déconnecter" déclenche la méthode logOut() de l'utilisateur instancié
 * → Le bouton n°3 "Afficher les produits survolés" déclenche la méthode displayProductsMouseOver() de l'utilisateur instancié. Cette méthode permet d'afficher dans le HTML, dans chaque div, le nombre de fois où l'utilisateur l'a survolée. 
 * --------------------------------------------
 */

let btnUserLogIn = document.querySelector('#log-in');
let btnUserLogOut = document.querySelector('#log-out');
let btnProductOver = document.querySelector('#product-mouse-over');

btnUserLogIn.addEventListener('click', userOne.logIn);
btnUserLogOut.addEventListener('click', userOne.logOut);

const textOfConnection = document.querySelector('#text-connected');
const welcome = document.querySelector('#user h2');

function connected() {
    userOne.isLoggedIn === true;
    textOfConnection.innerText = `Vous ete connecté`;
    textOfConnection.style.backgroundColor = 'green';
    welcome.innerText = 'Bienvenue';
    welcome.style.color = 'green';
    userSection.style.display = 'block';
};

function disconnected() {
    userOne.isLoggedIn === false;
    textOfConnection.innerText = `Voulez-vous vous connectez ?`;
    textOfConnection.style.backgroundColor = 'red';
    userSection.style.display = "none";
}




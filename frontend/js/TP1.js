var date; // Déclaration sans affectation
var compteur = 0; //Déclaration avec affectation
toto = "coucou"; // Déclaration implicite par affectation
var prem, second; // variables séparées par des virgules
monNombre = new Number(); // Déclaration typée sans affectation
e = new Number(2.71828); // Déclaration typée avec affectation
var maChaine = new String(); //Déclaration de chaîne
var b = new Boolean(true); //Déclaration de booléen

function showVariables() {
  console.log("ok");
  alert(
    "date:" +
      date +
      ", compteur=" +
      compteur +
      ", toto=" +
      toto +
      ", e=" +
      e +
      ",b=" +
      b
  );
}

temp = new Array(30);

function GenereRandVals() {
  for (i = 1; i <= 30; i++) {
    temp[i - 1] = Math.floor(100 * Math.random());
    //Math.floor(x) renvoie le plus grand entier qui
    //est inférieur ou égal à un nombre x
  }
}

function CalMoyenne() {
  som = 0;
  for (i = 1; i <= 30; i++) {
    som += temp[i - 1];
  }
  return Math.round(som / 30);
  // La fonction Math.round()
  //retourne la valeur d'un nombre arrondi à l'entier le
  //plus proche.
}

GenereRandVals();

function afficheMoyen() {
  alert("la moyenne du tableau est =" + CalMoyenne());
}

function lireAnnee() {
  annee = prompt("En quelle année sommes-nous ? ", 2023);
  alert("Vous avez répondu : " + annee);
}

var text =
  "<p>Browser CodeName: " +
  navigator.appCodeName +
  "</p>" +
  "<p>Browser Name: " +
  navigator.appName +
  "</p>" +
  "<p>Browser Version: " +
  navigator.appVersion +
  "</p>" +
  "<p>Cookies Enabled: " +
  navigator.cookieEnabled +
  "</p>" +
  "<p>Browser Language: " +
  navigator.language +
  "</p>" +
  "<p>Browser Online: " +
  navigator.onLine +
  "</p>" +
  "<p>Platform: " +
  navigator.platform +
  "</p>" +
  "<p>User-agent header: " +
  navigator.userAgent +
  "</p>";
document.getElementById("demo").innerHTML = text;

var infrawin;

function nouvellefenetre() {
  infrawin = window.open(
    "window0.html", // Same page
    `_blank${i}`, // Unique window name
    "width=300, height=200, scrollbars"
  );
}

function closefenetre() {
  infrawin.close();
}

function CheckOpen() {
  if (infrawin.closed == true) alert("La fenêtre a été fermée");
  else alert("La fenêtre est encore ouverte");
}

function open2s() {
    const myWindow = window.open(
        "window0.html",
        "secondefenetre",
        "width=200, height=100"
      );
      setTimeout(function () {
        myWindow.close();
      }, 2000);
}

function changerTitre() {
    document.title = "New Titre";
}

function getUrl() {
    alert(document.URL)
}

function ModifChamp() {
    if (document.forms["form1"].checkbox.checked) {
    document.forms["form1"].champ_text.value='Bouton coché'
    }
    else { document.forms["form1"].champ_text.value='bouton non coché' }
    }


function confirmation() { window.confirm("Ce formulaire est envoyé à " + document.formulaire_test.action); }
   
function FormLength() {
    alert(document.forms.length + "formulaires");
}

function Methode() { if(document.formulaire_test.action.indexOf("@") > 0)
    document.formulaire_test.method = "post";
    else document.formulaire_test.method = "get";
    return true;
    }
    
document.formulaire_test.saisie.value = document.formulaire_test.name;



    
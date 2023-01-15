let titre = document.getElementById ('titre');
console.log(titre);//titre = h1 = "bienvenue " On le nomme titre car c'est son Id + on utilise le getElById.
console.log(titre.style);//On montre le titre et le titre avec une modification de style avec le css, on le voit grâce au . entre titre et style
titre.style.color = "white";
titre.style.backgroundColor = prompt("ecris la couleur que tu veux en anglais ");//+ modif de la couleur du fond du h1.
//On utilise prompt pour ouvrir une fenêtre qui permet à l'utilisateur d'écrire. L'odre est dans le paramêtre.
console.log(titre.style);

//On appel les diff fonctions bouttons, il y'en a 4 chacun seront utilisés lors de l'écoute de event et de la réaction de l'event .
//on fait un querySector car on va mettre une image dans chaque bouttons. (l'image que l'on sélectionne).
let img = document.querySelector('img');
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")

//quand on clique sur le bouton on doit pouvoir voir l'image que l'on a séléctionner , donc addeventL dans le paramètre on indique "click" .
btn1.addEventListener('click', () => {
    img.src = "image/fermier2 .jpg";
    //on lie cela à l'image /element séléctionné .
    console.log("btn1");
})
btn2.addEventListener('click', () => {
    img.src = "image/fermiervert .jpg";
    console.log("btn2");
})
btn3.addEventListener('click', () => {
    img.src = "image/fermierviolet .jpg";
    console.log("btn3");
})
btn4.addEventListener('click', () => {
    img.src = "image/fermiernjaune .jpg";
    console.log("btn4");
});

let d1 = document.getElementById('premier');
premier.insertAdjacentHTML('afterend','<div id="deuxieme">Pion en 3d fait avec blender pour le jeu de plateau </div>');
//pour ajouter une valeur //



const avis = [
    {
      question:
        ' Combien font : 1+1 ?\n1. 40\n2. 2',
      reponse: 2
    },
    {
      question: "Es-tu un pro du js ?\n1. ça fait meme pas une semaine\n2. bien évidemment ",
      reponse: 1
    },
    {
      question:
        'Quel axe vas-tu choisir ?\n1. marketing (qui aime ça?)\n2. 3d (la reponse sur le site)',
      reponse: 2
    }
  ];
let reponsesBonne = 0;
//pour une boucle, car on va répétez la même action (posez une question)
for (let i =0; i< avis.length; i += 1) {  
    let rep = prompt(avis[i].question);  // rappel la fonction, prompt pour que utilisateur puisse écrire la réponse , avis = function= le questionnaire, .question = fait apparaitre les question de la function .
    if (rep == avis[i].reponse) {   // condition selon la reponse(comme précédent mais cette fois-ci pour réponse .)
        alert('Bonne réponse');
        reponsesBonne += 1; // addition des bonnes rep augmente la valeur(number) de la function.
    } else{
        alert('Mauvaise reponse');
    }
}
alert(` Tu as ${reponsesBonne} bonne reponses sur ${avis.length}`); // mettre les valeurs accumulées ( on rappel les fonctions reponseBonne et avis.lenght )



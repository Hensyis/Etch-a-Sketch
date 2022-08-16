const container = document.querySelector("#container");

function creationCube(){
    let utilisateurNombre = getValue();
    let tailleCube = parseInt(800/utilisateurNombre);
    let nombreLigne = parseInt(800/tailleCube);

    for(let i = 0; i < nombreLigne; i++){
        for(let j = 0; j < utilisateurNombre ; j++){
            const div = document.createElement('div');
            div.style.width = tailleCube+"px";
            div.style.height = tailleCube+"px"; 
            div.style.border = "1px solid pink";
            div.style.boxSizing = "border-box";
            container.appendChild(div);
        }
     }
    const elements = document.querySelectorAll('#container > div');
    elements.forEach(element => element.addEventListener('mouseover', ajouterCouleur));
}

const button = document.querySelector('button');
button.addEventListener('click', creationCube);

//const elements = document.querySelectorAll('#container > div');
//elements.forEach(element => element.addEventListener('mouseover', ajouterCouleur));

function ajouterCouleur(e){
    this.classList.add('colorier')
}

const input = document.getElementById('nombreCarre');

function getValue(){
    let utilisateurNombre = document.getElementById('nombreCarre').value;
    return utilisateurNombre;
}





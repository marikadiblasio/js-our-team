/**
 * Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

 */

//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
const members = [
    {
        name: 'Wayne',
        surname: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela',
        surname: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter',
        surname: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela',
        surname: 'Loper',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott',
        surname: 'Estrada',
        role: 'Develper',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara',
        surname: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    },
];
//console.log(members[0].name)
//console.log(members);
//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// for (let i = 0; i < members.length; i++){
//     for (key in members[i]){
//         console.log(key +": "+ members[i][key])
//     }
// }
//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe
// for (let i = 0; i < members.length; i++){
//     const divCard = document.createElement('div');
//     const container = document.querySelector('.container');
//     container.appendChild(divCard);
//     let text;
//     for (key in members[i]){
//         text=`${key}: ${members[i][key]}`;
//         const divText = document.createElement('div');
//         divText.innerText = text;
//         divCard.appendChild(divText);
//         console.log(key +": "+ members[i][key])
//     }
// }
//BONUS 1:
//Trasformare la stringa foto in una immagine effettiva
//BONUS 2:
//Organizzare i singoli membri in card/schede
for (let i = 0; i < members.length; i++){
    const divCard = document.createElement('div');
    divCard.classList.add('card', 'col-4');
    const container = document.querySelector('.row');
    container.appendChild(divCard);
    const nameText = document.createElement('h5');
    nameText.classList.add('text-center');
    nameText.innerText =`${members[i].name} ${members[i].surname}`;
    const roleText =document.createElement('h6');
    roleText.classList.add('text-center');
    roleText.textContent=`${members[i].role}`;
        const divText = document.createElement('div');
        divText.appendChild(nameText);
        divText.appendChild(roleText);
        divCard.classList.add('card-body');
        let image = `<img class="img-top-card mb-3" src="./img/${members[i].image}" alt="${members[i].image}">`;
        divCard.innerHTML += image;
        divCard.appendChild(divText);   
     for (key in members[i]){
        console.log(key +": "+ members[i][key])
    }
}
/*
    Viene fornito un layout di base in cui è presente **una card di esempio** inserita staticamente nell’html. Questa card serve solo come timbro del markup necessario per ottenere il risultato finale e **dovrà quindi essere rimossa dall’html**.

    Aggiungere un file js in cui definire **un array di oggetti** che rappresentano i membri del team. Ogni membro ha le informazioni necessarie per stampare la relativa card: **Nome, Ruolo e Foto**.

    Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.
*/

const members = [
    {
        firstName: "Wayne",
        lastName: "Barnett",
        role: "Founder - CEO",
        image: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Caroll",
        role: "Chief Editor",
        image: "img/angela-caroll-chief-editor.jpg",
    },
    {
        firstName: "Angela",
        lastName: "Lopez",
        role: "Social Media Manager",
        image: "img/angela-lopez-social-media-manager.jpg",
    },
    {
        firstName: "Barbara",
        lastName: "Ramos",
        role: "Graphic Designer",
        image: "img/barbara-ramos-graphic-designer.jpg",
    },
    {
        firstName: "Scott",
        lastName: "Estrada",
        role: "Developer",
        image: "img/scott-estrada-developer.jpg",
    },
    {
        firstName: "Walter",
        lastName: "Gordon",
        role: "Office Manager",
        image: "img/walter-gordon-office-manager.jpg",
    }
];



for (const index in members){
    console.log(members[index]);
    document.querySelector('.team-container').innerHTML += printMember(members[index]);
}



function printMember(aMember){
    return `
        <div class="team-card">
            <div class="card-image">
                <img
                    src="${aMember.image}"
                    alt="${aMember.firstName} ${aMember.lastName}"
                />
            </div>
            <div class="card-text">
                <h3>${aMember.firstName} ${aMember.lastName}</h3>
                <p>${aMember.role}</p>
            </div>
        </div>
    `
};
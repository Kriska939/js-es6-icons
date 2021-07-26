/*
---------------------Milestone 1:
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

---------------------Milestone 2:
Coloriamo le icone per tipo

---------------------Milestone 3:
Creiamo una select con i tipi di icone e usiamola per filtrare le icone

*/

// {
//     name: 'cat',
//     prefix: 'fa-',
//     type: 'animal',
//     family: 'fas',
//   }

// MILESTONE 1:

let cardTemplate = "";

icons.forEach((icon) => {
    cardTemplate += `
    <div class="col col-sm-4 col-md-2">
        <div class="card">
            <div class="card-body text-center">
                <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.prefix}2x"></i>
                    <p>${icon.name.toLocaleUpperCase()}</p>
            </div>
        </div>
    </div>`;
});

const displayHere = document.querySelector("#container-icons .row");

displayHere.innerHTML = cardTemplate;

//---------------------Milestone 2: 


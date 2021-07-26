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

const displayHere = document.querySelector("#container-icons .row");

const printIcons = (array, targetElement) => {
    let cardTemplate = "";

    array.forEach((icon, index) => {

        // offset da inserire solo se:

        const hasOffset = index === 0 || index % 5 === 0 ? "offset-md-1" : "";

        //contenuto delle card:
        cardTemplate += `
        <div class="col col-sm-4 col-md-2 ${hasOffset}">
            <div class="card">
                <div class="card-body text-center">
                    <i class="${icon.family} ${icon.prefix}${icon.name} ${icon.prefix}2x"></i>
                        <p>${icon.name.toLocaleUpperCase()}</p>
                </div>
            </div>
        </div>`;
    });

    targetElement.innerHTML = cardTemplate;
};

printIcons(icons, displayHere);



//---------------------Milestone 3: 

const selectedFilter = document.getElementById("filter-type");

selectedFilter.addEventListener("change", () => {
    const filterValue = selectedFilter.value;

    // se ho all, stampo tutto:
    if (filterValue === "all") {
        printIcons(icons, displayHere);
        return;
    }
});
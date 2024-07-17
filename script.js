var breadtype = {
    imageUrl: "",
    name: "",
    description: "",
    origin: "",
    mainIngredients: [],
};

var breads = [
    Object.assign(Object.create(breadtype), { imageUrl: "images/baguette.jpg", name: "Baguette", description: "A long thin bread.", origin: "France", mainIngredients: ["Flour", "Water", "Yeast", "Salt"] }),
    Object.assign(Object.create(breadtype), { name: "B", description: "Description B" }),
    Object.assign(Object.create(breadtype), { name: "C", description: "Description C" }),
    Object.assign(Object.create(breadtype), { name: "D", description: "Description D" }),
    Object.assign(Object.create(breadtype), { name: "D", description: "Description D" }),
    Object.assign(Object.create(breadtype), { name: "D", description: "Description D" }),
    Object.assign(Object.create(breadtype), { name: "D", description: "Description D" }),
];

document.addEventListener('DOMContentLoaded', function () {
    CreatePanels();

    const buttons = document.querySelectorAll('.navbar button');
    const pages = document.querySelectorAll('.page');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetPage = this.id.replace('pagebtn', 'page');

            pages.forEach(page => {
                if (page.id === targetPage) {
                    page.classList.add('active');
                    page.classList.add('animated-element');
                } else {
                    page.classList.remove('active');
                    page.classList.add('animated-element');
                }
            });
        });
    });

    // Show the first page by default
    pages[0].classList.add('active');


});

function CreatePanels() {
    var carousel = document.getElementById('carousel');

    breads.forEach(item => {

        // Generate html unordered list
        var ingredientList = "<h3>Ingredients</h3><ul>";
        item.mainIngredients.forEach(ingredient => {
            ingredientList += "<li>" + ingredient + "</li>";
        });
        ingredientList += "</ul>";

        // Create panel
        var panel = document.createElement('div');
        panel.className = 'panel';
        
        var content = document.createElement('div');
        content.innerHTML =
            `
            <h2>${item.name}</h2>
            <h3>Origin - ${item.origin}</h3>
            <p>${item.description}</p>
            ${ingredientList}
        `;
        content.style.padding = '5%';
        var gradient = document.createElement('div');
        gradient.className = 'pickgradient';

        // Set the background image
        panel.style.backgroundImage = `url(${item.imageUrl})`;
        panel.style.backgroundSize = 'cover';
        panel.style.backgroundPosition = 'center';
        panel.style.padding = '0%';

        // Add button to toggle size when clicked
        panel.addEventListener('click', function () {
            panel.classList.toggle('expanded');
        });

        // If successful add the panel into the carousel
        if (panel != null) {
            carousel.appendChild(panel);
            panel.appendChild(gradient);
            gradient.appendChild(content);
        }

    });
}
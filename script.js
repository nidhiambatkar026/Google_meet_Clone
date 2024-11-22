const names = [
    "Nidhi",
    "Siddhi",
    "Krishna",
    "Sunder",
    "Bhoomika",
    "Komal",
    "Ajay",
]
const search_container = document.getElementById('search_container');

names.forEach((name) => {
    search_container.innerHTML += `<div class='name_card'> ${name}</div>`
});

function loadsearch() {
    const inputelement = document.getElementById('input_Box');
    const searchText = inputelement.value.toLowerCase();

    search_container.innerHTML = "";

    const filterednames = names.filter((name) => {
        if (name.toLowerCase().includes(searchText)) {
            return true;
        }
    });

    filterednames.forEach((name) => {
        search_container.innerHTML += `<div class = 'name_card'>  ${name} </div>`
    })
}
let list = [];
const inputEl = document.querySelector('#input-el');
const Btn = document.querySelector('#btn-el');
const ulEl = document.querySelector('#ul-el');
const clear_bth = document.querySelector('#clear-el');

// display the info in the list after click in "Save Link" button 
Btn.addEventListener('click', () => {
    list.push(inputEl.value);
    inputEl.value = "";
    displayInfo();
    Display();
})

// clearing the list after click in "Clear" button 
clear_bth.addEventListener('click', () => {
    list = [];
    ulEl.innerHTML = "";
    Display();
})

// mechanism to display or hide the clear button
var Display = () => {
    if (list.length > 0) {
        clear_bth.style.display = "flex";
    } else {
        clear_bth.style.display = "none";
    }
}

// mechanism to display the info in unorderd list and saving the info in the list
var displayInfo = () => {
    let items = "";
    for (let i = 0; i < list.length; i++) {
        items += `
            <li>
                <a href='${list[i]}' target='_blank'>
                    ${list[i]} 
                </a>
            </li>
        ` 
    }

    // Displaying the info in unorderd list
    ulEl.innerHTML = items;  
}
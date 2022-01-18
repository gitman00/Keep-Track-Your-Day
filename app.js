let list = [];
const inputEl = document.querySelector('#input-el');
const Btn = document.querySelector('#btn-el');
const ulEl = document.querySelector('#ul-el');
const clear_bth = document.querySelector('#clear-el');


let dataLocalStorage = JSON.parse(localStorage.getItem("Links"))
console.log(dataLocalStorage)

if (dataLocalStorage) {
    list = dataLocalStorage;
    displayInfo()
}

// display the info in the list after click in "Save Link" button 
Btn.addEventListener('click', () => {
    list.push(inputEl.value);
    inputEl.value = "";

    // storingb the list into local storage
    localStorage.setItem("Links", JSON.stringify(list))

    displayInfo();
    // Display();

})

// clearing the list after click in "Clear" button 
clear_bth.addEventListener('click', () => {
    list = [];
    ulEl.innerHTML = "";
    localStorage.clear()
    // Display();
})

// mechanism to display or hide the clear button
// var Display = () => {
//     if (list.length > 0) {
//         clear_bth.style.display = "flex";
//     } else {
//         clear_bth.style.display = "none";
//     }
// }

// mechanism to display the info in unorderd list and saving the info in the list
function displayInfo () {
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
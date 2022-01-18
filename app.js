let list = [];
const inputEl = document.querySelector('#input-el');
const Btn = document.querySelector('#btn-el');
const ulEl = document.querySelector('#ul-el');
const clear_bth = document.querySelector('#clear-el');
const tab_btn = document.querySelector('#tab-el');

const dataLocalStorage = JSON.parse(localStorage.getItem("Links"))

if (dataLocalStorage) {
    list = dataLocalStorage;
    displayInfo(list)
}

tab_btn.addEventListener('click', () => {
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        list.push(tabs[0].url);
    
        // storingb the list into local storage
        localStorage.setItem("Links", JSON.stringify(list))
        displayInfo(list);
    });
})

// mechanism to display the info in unorderd list and saving the info in the list
function displayInfo (value) {
    let items = "";
    for (let i = 0; i < value.length; i++) {
        items += `
            <li>
                <a href='${value[i]}' target='_blank'>
                    ${value[i]} 
                </a>
            </li>
        ` 
    }

    // Displaying the info in unorderd list
    ulEl.innerHTML = items;  
}

// display the info in the list after click in "Save Link" button 
Btn.addEventListener('click', () => {
    list.push(inputEl.value);
    inputEl.value = "";

    // storingb the list into local storage
    localStorage.setItem("Links", JSON.stringify(list))
    displayInfo(list);

})

// clearing the list after click in "Clear" button 
clear_bth.addEventListener('dblclick', () => {
    list = [];
    // ulEl.innerHTML = "";
    localStorage.clear()
    displayInfo(list);
})
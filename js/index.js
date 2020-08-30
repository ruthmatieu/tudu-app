
//date function
// function currentDate(){

// }

//components
const appContainer = document.querySelector('.container');

function header(){
    //elements
    const headingDiv = document.createElement('div');
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const h1Span = document.createElement('span');

    //content
    h1.textContent = 'Todo';
    h1Span.textContent = 'App';

    //structure
    h1.appendChild(h1Span);
    header.appendChild(h1);
    headingDiv.appendChild(header);

    return headingDiv;
}

function navbar() {
    //elments
    const dateContainer = document.createElement('div');
    const dateDiv = document.createElement('div');
    const today = document.createElement('p');
    const date = document.createElement('p');

    const itemNumDiv = document.createElement('div');
    const items = document.createElement('p');

    //classes
    dateContainer.classList.add('navbar');
    dateDiv.classList.add('date');
    itemNumDiv.classList.add('item-num');

    //content
    today.textContent = 'Today';
    date.textContent = '{current date}';
    items.textContent = '{#} items incomplete';

    //structure
    itemNumDiv.appendChild(items);
    dateDiv.appendChild(today);
    dateDiv.appendChild(date);
    dateContainer.appendChild(dateDiv);
    dateContainer.appendChild(itemNumDiv)


    return dateContainer;
}

{/*     <div class="input-data">
            <div class="text-area">
                <input 
                    type="text"
                    placeholder="enter new to-do"
                />
            </div>
            <button class="add-btn">+</button>
        </div> */}

// function inputContainer() {
//     //elements
//     const inputDiv = document.createElement('div');
//     const textDiv = document.createElement('div');
//     const textArea = document.createElement('input');


// }

// //functionality
// const addBtn = document.querySelector('.add-btn');

{/* <div class="todos-container">
            <div class="item">
                <input 
                type="text"
                class="item-input"
                disabled
                />
                <button class="edit-btn">edit</button>
                <button class="remove-btn">remove</button>
            </div>
        </div> */}

// function todosContainer() {

// }        
// appContainer.appendChild(header());
// appContainer.appendChild(navbar());


const currentDate = document.querySelector('p');

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return document.write(today);

currentDate.appendChild(date());
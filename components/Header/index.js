// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //create the different elements of the header
    const headerDiv = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const headerTemp = document.createElement('span')

    //nest the newly created elements 
    headerDiv.appendChild(headerDate)
    headerDiv.appendChild(headerTitle)
    headerDiv.appendChild(headerTemp)

    //assign the appropriate styles to the newly nested elements
    headerDiv.classList.add('header')
    headerDate.classList.add('date')
    headerTitle.classList.add('h1')
    headerTemp.classList.add('temp')

    //Fill the content of the new elements
    headerDate.textContent = 'SMARCH 28, 2019';
    headerTitle.textContent = 'Lambda Times';
    headerTemp.textContent = '98°'

    return headerDiv
}

const headerData = document.querySelector('.header-container')
headerData.appendChild(Header())

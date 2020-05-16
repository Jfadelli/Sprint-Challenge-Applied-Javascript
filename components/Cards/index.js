// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <class="headline">{Headline of article}</div>
//   <div class="author">
//      <div class="img-container">
//          <img src={url of authors image} />
//      </div>
//      <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const articleObj = response.data.articles
        console.log(articleObj)
        const js = articleObj.javascript;
        const bs = articleObj.bootstrap;
        const tech = articleObj.technology
        const jq = articleObj.jquery
        const node = articleObj.node

        js.forEach(item => newCardMaker(item))
        bs.forEach(item => newCardMaker(item))
        tech.forEach(item => newCardMaker(item))
        jq.forEach(item => newCardMaker(item))
        node.forEach(item => newCardMaker(item))
    });

const newCardMaker = (dataItem) => {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorName = document.createElement('span')

    document.querySelector('.cards-container').appendChild(card)
    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorName)

    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    img.src = dataItem.authorPhoto
    headline.textContent = dataItem.headline
    authorName.textContent = dataItem.authorName

    return card
}

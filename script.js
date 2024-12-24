//--------------  EMINEM  ------------------//

let eminemAPI = 'https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem'
let eminemSection = document.getElementById('eminemSection')

fetch(eminemAPI)
.then(eminemAPIRaw => eminemAPIRaw.json())
.then(eminemAPIRefined => {console.log(eminemAPIRefined)

    console.log(eminemAPIRefined.data [0]['artist']['name'])
    console.log(eminemAPIRefined.data [0]['album']['cover_medium'])
    
    let eminemAlbum= eminemAPIRefined.data
   


    for (i=0; i<eminemAlbum.length; i++){

        console.log(eminemAlbum[i])
        console.log(eminemAlbum[i]['album']['cover_medium'])
        let coverAlbum = eminemAlbum[i]['album']['cover_medium']

        let card = document.createElement('div')
    card.className = "card"
    eminemSection.appendChild(card)

    let cover = document.createElement('div')
    cover.className = "cover"
    cover.innerHTML = '<img class="img-fluid imgC" src= ' + coverAlbum + '>'
    card.appendChild(cover)

    let title = document.createElement('h5')
    title.className = 'title'
    title.innerText ='Title'
    card.appendChild(title)

        

    }

    let card = document.createElement('div')
    card.className = "card"
    eminemSection.appendChild(card)

    let cover = document.createElement('div')
    cover.className = "cover"
    card.appendChild(cover)

    let title = document.createElement('h5')
    title.className = 'title'
    title.innerText ='Title'
    card.appendChild(title)

})
.catch(error => console.log('Something wen wrong = ' + error))
 
let test 
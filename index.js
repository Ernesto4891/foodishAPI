const btnPizza=document.querySelector('#btnPizza')

const btnBurger=document.querySelector("#btnBurger")

const btnPasta=document.querySelector("#btnPasta")

const btnBiryani=document.querySelector("#btnBiryani")

const btnButterchicken=document.querySelector("#btnButterchicken")

const btnDessert=document.querySelector("#btnDessert")

const btnIdly=document.querySelector("#btnIdly")

const btnRice=document.querySelector("#btnRice")

const btnSamosa=document.querySelector("#btnSamosa")

const btnDosa=document.querySelector("#btnDosa")

const container=document.querySelector('.container')

const containerBtn=document.querySelector('.containerBtn')

const bodyContent=document.querySelector('.bodyContent')


 
 
 const imgPlatos = async(a,b)=>{
    
    const response = await fetch (`https://foodish-api.herokuapp.com/images/${a}${b}.jpg`)
    
    // console.log(response.url)
     

    cards=document.createElement('div')

    container.classList.add('cards')
    
    container.innerHTML= `

    <div class= "cards">
    
    <img src=${response.url} alt=${response.img}>

   <p> <b>Comparte este enlace :</b> <a href=""> ${response.url}</a></p>
    </div>`

    cards.append(cards)
}

const pizzaRamdom=()=>{
  
  const pizza= 'pizza/pizza'
  
  let numPizza=( Math.floor(Math.random()*94+1))
  
  return imgPlatos (pizza,numPizza)
  
}

btnPizza.addEventListener('click',pizzaRamdom)

const pastaRamdom =()=> {

  const pasta='pasta/pasta'

  let numPasta=( Math.floor(Math.random()*33+1))
  
  return imgPlatos (pasta,numPasta)

 }

 btnPasta.addEventListener('click',pastaRamdom)


 const burgerRamdom =()=> {

  const burger='burger/burger'

  let numBurger=( Math.floor(Math.random()*86+1))
  
  return imgPlatos (burger,numBurger)

 }

 burgerRamdom()
 btnBurger.addEventListener('click',burgerRamdom)

 const biryaniRamdom =()=> {

  const biryani='biryani/biryani'

  let numBiryani=( Math.floor(Math.random()*80+1))
  
  return imgPlatos (biryani,numBiryani)

 }

 btnBiryani.addEventListener('click',biryaniRamdom)


 const ramdomButterchicken =()=> {

  const butter='butter-chicken/butter-chicken'

  let numButter=( Math.floor(Math.random()*21+1))
  
  return imgPlatos (butter,numButter)

 }

 btnButterchicken.addEventListener('click',ramdomButterchicken)

 const ramdomDessert =()=> {

  const dessert ='dessert/dessert'

  let numDessert=( Math.floor(Math.random()*35+1))
  
  return imgPlatos (dessert,numDessert)

 }

 btnDessert.addEventListener('click',ramdomDessert)


 const ramdomIdly =()=> {

  const idly='idly/idly'

  let numIdly=( Math.floor(Math.random()*76+1))
  
  return imgPlatos (idly,numIdly)

 }

 btnIdly.addEventListener('click',ramdomIdly)


 const ramdomRice =()=> {

  const rice='rice/rice'

  let numRice=( Math.floor(Math.random()*34+1))
  
  return imgPlatos (rice,numRice)

 }

 btnRice.addEventListener('click',ramdomRice)


 const ramdomSamosa =()=> {

  const samosa='samosa/samosa'

  let numSamosa=( Math.floor(Math.random()*21+1))
  
  return imgPlatos (samosa,numSamosa)

 }

 btnSamosa.addEventListener('click',ramdomSamosa)


 const ramdomDosa =()=> {

  const dosa='dosa/dosa'

  let numDosa=( Math.floor(Math.random()*82+1))
  
  return imgPlatos (dosa,numDosa)

 }

 btnDosa.addEventListener('click',ramdomDosa)
 
 


 
 
import './style.css';
import { loadContent } from './loadContent.js'
import { loadMenu } from './menu.js'
import { loadContact } from './contact.js'
import homePhoto from './home.jpg';
import menuPhoto from './menu.jpg';
import contactPhoto from './contact.jpg';


const contentDiv = document.getElementById('content')


let nav
let homeBtn
let menuBtn
let contactBtn


loadNav()
loadHome(homePhoto)
updateNavSelection(homeBtn)


function loadHome(photo) {
  loadContent('content', 'h1', `Welcome to The World's Best Restaurant!`)
  loadContent('content', 'p', `This is The World's Best Restaurant! Come and try it for yourself.`)  
  loadContent('content', 'img', photo)
}


function loadNav() {
  nav = document.createElement('nav')
  homeBtn = document.createElement('button')
  menuBtn = document.createElement('button')
  contactBtn = document.createElement('button')
  homeBtn.textContent = 'Home'
  menuBtn.textContent = 'Menu'
  contactBtn.textContent = 'Contact'
  nav.appendChild(homeBtn)
  nav.appendChild(menuBtn)
  nav.appendChild(contactBtn)
  contentDiv.appendChild(nav)

  loadEventListeners()
}


function updateNavSelection(btn) {
  console.log('hello')
  btn.classList.add('selected')
}


function loadEventListeners() {
  homeBtn.addEventListener('click', (event)=>{
    contentDiv.innerHTML = ""
    loadNav()
    updateNavSelection(homeBtn)
    loadHome(homePhoto)
  })
  
  menuBtn.addEventListener('click', (event)=>{
    contentDiv.innerHTML = ""
    loadNav()
    updateNavSelection(menuBtn)
    loadMenu(menuPhoto)
  })
  
  contactBtn.addEventListener('click', (event)=>{
    contentDiv.innerHTML = ""
    loadNav()
    updateNavSelection(contactBtn)
    loadContact(contactPhoto)
  })
}
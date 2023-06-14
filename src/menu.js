import './style.css';
import { loadContent } from './loadContent.js'
// import menuPhoto from './menu.jpg';

function loadMenu(photo) {
  loadContent('content', 'h1', `Feast on the world's best food`)
  loadContent('content', 'p', `We use only the finest ingredients to offer the finest meals. Come and try it for yourself.`)
  loadContent('content', 'img', photo)
}

export { loadMenu }
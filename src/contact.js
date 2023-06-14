import './style.css';
import { loadContent } from './loadContent.js'
// import contactPhoto from './contact.jpg';

function loadContact(photo) {
  loadContent('content', 'h1', `Contact The World's Best Restaurant`)
  loadContent('content', 'p', `Contact us at The World's Best Restaurant. Book a table today!`)
  loadContent('content', 'img', photo)
}

export { loadContact }
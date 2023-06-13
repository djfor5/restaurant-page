import './style.css';
import { loadContent } from './loadContent.js'
import photo from './photo.jpg';

loadContent('content', 'h1', `World's Best Resturant!`)
loadContent('content', 'img', photo)
loadContent('content', 'p', `This is the world's best restaurant! Come and try it for yourself. We use only the finest ingredients to offer the finest meals.`)
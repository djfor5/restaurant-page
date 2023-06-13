function loadContent(divId, element, content) {
  const contentDiv = document.getElementById(divId)
  
  let newElement
  if (element === 'img') {
    newElement = new Image()
    newElement.src = content
  } else if (element === 'h1' || element === 'p') {
    newElement = document.createElement(element)
    newElement.textContent = content  
  } else return
  
  contentDiv.appendChild(newElement)
}


export { loadContent }
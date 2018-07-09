/* Enter the code to remove the main node element under this comment */
document.querySelector('main').remove();

/* Create your new element here and assign it to newHeader */
const newHeader = document.createElement('h1')
newHeader.id = "victory"
document.body.appendChild(newHeader)
newHeader.innerHTML = 'Megan is the champion!'
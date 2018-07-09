/* Enter the code to remove the main node element under this comment */
document.querySelector('main').remove();

/* Create your new element here and assign it to newHeader */
var element = document.createElement('h1')
document.body.appendChild(element)
element.innerHTML = 'Megan is the champion!'
import monkey from './image.png'

function addImage(){
    const img = document.createElement('img');
    img.alt = 'monkey';
    img.width = 300;
    img.src = monkey;

    const body = document.querySelector('body');
    body.appendChild(img)
}

export default addImage
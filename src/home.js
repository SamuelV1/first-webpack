function criarsobre(){
    //sobre
    const sobre = document.createElement('div');
    
    //titulo
    const title = document.createElement('h2');
    title.textContent = 'SOBRE';
    
    sobre.appendChild(title);

    
    const para = document.createElement('p');
    para.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae facilisis odio. Nulla facilisi. Vivamus et sem at libero cursus ultrices. Aenean tellus justo, dapibus quis nulla quis, ultrices tempus ligula. Integer sodales nunc sit amet nulla facilisis efficitur. Vivamus vel est diam. Mauris eleifend, libero et luctus semper, tortor justo accumsan arcu, condimentum blandit neque orci ac nibh. Donec in sollicitudin felis. Aliquam luctus nibh eget dolor viverra posuere. Nunc consectetur eget metus non tincidunt.`;

    sobre.appendChild(para);
    return sobre;
}


function loadHome(){
    const content = document.getElementById('conteudo');

    content.innerHTML = '';

    const aboutSec = criarsobre();


    content.appendChild(aboutSec);
}

export default loadHome;
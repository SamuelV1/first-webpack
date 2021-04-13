function createGallery(src,alt,text,price){

    //criar container
    const cont = document.createElement('div');
    cont.classList.add('container');

    //criar img 
    const img = document.createElement('img');
    img.setAttribute('src',src);
    img.setAttribute('alt',alt);

    //set description for images
    const desc = document.createElement('div');
    desc.classList.add('Descrição');

    const foodName = document.createElement('div');
    foodName.innerHTML = text;

    const cost = document.createElement('div');
    cost.innerHTML = price;

    desc.appendChild(foodName);
    desc.appendChild(cost);
    cont.appendChild(img);
    cont.appendChild(desc);

    return cont;
}



function loadMenu(){
    const content = document.getElementById('conteudo');
    content.classList.add('flex');
    content.textContent = '';
    const items = [
        createGallery(
            'https://images.pexels.com/photos/4871111/pexels-photo-4871111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            'Salad',
            'salada perfeita para ajudar sua digestão pos pizza',
            '$: 35,99'
        ),
        createGallery(
            'https://images.pexels.com/photos/6697469/pexels-photo-6697469.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
            '´pizza',
            'Pizza gourmet perfeita para seu almoço',
            '$: 65,99'
        )
    ]

    items.forEach((food)=>{
        content.append(food);
    });
}
export default loadMenu;
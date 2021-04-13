function createHeader(id,text){
    const header = document.createElement('header');
    header.setAttribute('id',id);
    const h1 = document.createElement('h1');
    h1.innerHTML = text;
    header.appendChild(h1);
    return header;
}

function createMain(id){
    const main = document.createElement('main');
    main.setAttribute('id',id);
    return main;
}


function loadPage(){
    console.log('called loadPage');

    const content = document.getElementById('conteudo');

    const tabContent = createMain('conteudo');
    content.appendChild(tabContent);

}

export default loadPage;
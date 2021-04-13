function createSection(name, data) {
    const section = document.createElement('section');
    section.classList.add('section');
  
    const title = document.createElement('h2');
    title.textContent = name;
    section.appendChild(title);
  
    data.forEach((d) => {
      const para = document.createElement('p');
      para.textContent = d;
      section.appendChild(para);
    });
  
    return section;
  }
  
function loadContact() {
    const content = document.getElementById('conteudo');
    
    content.textContent = '';
    const phoneSection = createSection('Celular', [
      '+55 84565-4657',
      '+55 912345-678'
    ]);
  
    const findus = createSection('Find us on:', ['Ifood, UberEats or Rappi ']);
  
    content.appendChild(phoneSection);
    content.appendChild(findus);
  }
  export default loadContact;
const row = document.querySelector('.row')

function render(word) {

  row.innerHTML = ""



  switch (word) {
    case 'aksiyalar':
       DOM(data.aksiyalar)
      break

    case 'barakaliSetlar':
      DOM(data.barakaliSetlar)
      break

    case 'lavashlar':
      DOM(data.lavashlar)
      break 
      
    case 'yaxnaKofe':
      DOM(data.yaxnaKofe)
     break

   case 'burgerHotDog':
     DOM(data.burgerHotDog)
     break

   case 'pitsalar':
     DOM(data.pitsalar)
     break
     
    case 'salatlar':
      DOM(data.salatlar)
     break

   case 'sendvichJojalar':
     DOM(data.sendvichJojalar)
     break

   case 'donerlar':
     DOM(data.donerlar)
     break

    case 'sneklar':
      DOM(data.sneklar)

    default:
      row.innerHTML = '<h1>Mahsulotlar qolmagan</h1>'
      break
  }
}

function DOM(evenet) {
  evenet.map(item => {

    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;
    img.className = 'card-img';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    const title = document.createElement('p');
    title.className = 'card-title';
    title.textContent = item.title;

    const price = document.createElement('span');
    price.className = 'card-price';
    price.textContent = item.price;

    cardContent.appendChild(title);
    cardContent.appendChild(price);

    card.appendChild(img);
    card.appendChild(cardContent);

    row.appendChild(card);



    // const card = document.createElement('div')
    // const img = document.createElement('img')
    // const price = document.createElement('span')
    // const title = document.createElement('p')

  })
}
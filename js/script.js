window.addEventListener('DOMContentLoaded', () => { 
  const form = document.querySelector('form');

  function req(e) {
    e.preventDefault();

    let formData = new FormData(form);
    formData.append('id', Math.random());    
    
    let obj= {};
    formData.forEach((value, key) => {
      obj[key] = value;
    });

    axios.post("http://localhost:3000/people", obj);
  }

  form.addEventListener('submit', (e) => req(e), {'once': true});

  
  // function createCards(response) {
  //   response.forEach(item => {
  //     let card = document.createElement('div');

  //     card.classList.add('card');

  //     let icon;
  //     if (item.sex === 'male') {
  //       icon = "icons/mars.png";
  //     } else {
  //       icon = "icons/female.png";
  //     }

  //     card.innerHTML = `
  //       <img src="${item.photo}" alt="photo">
  //       <div class="name">${item.name} ${item.surname}</div>
  //       <div class="sex">
  //         <img src=${icon} alt="male">
  //       </div>
  //       <div class="age">${item.age} age</div>
  //     `;
  //     document.querySelector('.app').appendChild(card);
  //   });
  // }
});
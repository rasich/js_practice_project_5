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

    getResource("http://localhost:3000/people", obj)
      // .then(data => createCards(data))
      .catch(err => console.error(err));
  }

  form.addEventListener('submit', (e) => req(e), {'once': true});

  async function getResource(url, data) {
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    
    return await res.json();
  }
  
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
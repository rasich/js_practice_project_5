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
    let json = JSON.stringify(obj);

    const request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:3000/people');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send(json);

    request.addEventListener('load', function() {
      if (request.status == 200) {
        let data = JSON.parse(request.response);
        console.log(data);
      } else {
        console.error('Что-то пошло не так');
      }
    });
  }

  form.addEventListener('submit', (e) => req(e), {'once': true});
  
});
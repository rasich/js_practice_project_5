window.addEventListener('DOMContentLoaded', () => { 
  const form = document.querySelector('form');

  function req(e) {
    e.preventDefault();

    let formData = new FormData(form);

    const request = new XMLHttpRequest();
    request.open('POST', './api.php');
    request.send(formData);

    request.addEventListener('load', function() {
      if (request.status == 200) {
        console.log(request.response);
      } else {
        console.error('Что-то пошло не так');
      }
    });
  }

  form.addEventListener('submit', (e) => req(e), {'once': true});

});
window.addEventListener('DOMContentLoaded', () => { 
  const form = document.querySelector('form');

  function req(e) {
    e.preventDefault();

    let formData = new FormData(form);
    
    axios({
      method: 'post',
      url: './api.php',
      data: formData,
      headers: {'content-type': 'multipart/form-data'}
    })
      .then(data => console.log(data.data));
    
  }

  form.addEventListener('submit', (e) => req(e), {'once': true});
});
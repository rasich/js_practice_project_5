window.addEventListener('DOMContentLoaded', () => { 
  const form = document.querySelector('form');

  function req(e) {
    e.preventDefault();

    let formData = new FormData(form);

    getResource("./api.php", formData)
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  form.addEventListener('submit', (e) => req(e), {'once': true});

  
  async function getResource(url, data) {
    const res = await fetch(`${url}`, {
      method: "POST",
      body: data
    });

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.text();
  }
});
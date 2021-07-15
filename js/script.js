const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    
    let data = {
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    //loader
    let content = document.getElementById('content');
    let pronto = `<p>E-mail cadastrado com sucesso!</p>`

    content.innerHTML = pronto;
});
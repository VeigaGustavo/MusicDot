function handleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    console.log('Form Data:', formObject);
    alert('Formulário enviado com sucesso!');

    event.target.reset();

    window.location.href = 'index.html';
}
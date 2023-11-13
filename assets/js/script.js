function sendMessage() {
    const nameField = document.querySelector('#name');
    const name = nameField.value;

    alert('Dear ' + name + ' Your message has been sent. We will contact you soon');
}
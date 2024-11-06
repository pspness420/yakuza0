// Contact
function submitForm(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    console.log(`Name: ${name}, \n Email: ${email}, \n Message: ${message} \n`);
  }
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
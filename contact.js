// Contact
function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  console.log(`Name: ${name}, \n Email: ${email}, \n Message: ${message} \n`);

  //send contact to discord channel
  fetch(
    "https://discord.com/api/webhooks/1303803143766671371/Hi9v2V-VKgQpFfbrceZpRDwjZsmmviFfHU03Tkv8_RZNTnb8EhTZ0M62Scf6e12ryEyo",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        content: `Email: ${email}, \n Message: ${message} \n`,
      }),
    }
  );
}

document.getElementById("contactForm").addEventListener("submit", submitForm);

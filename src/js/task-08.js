const form = document.querySelector(".login-form");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Будь ласка, заповніть всі поля");
  } else {
    const loginData = {
      email: emailInput.value,
      password: passwordInput.value
    };
    console.log(loginData);
    form.reset();
  }
});

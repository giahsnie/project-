document.getElementById("fName").addEventListener("input", function () {
  const fullName = this.value.trim();
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");
  document.getElementById("fName").value = firstName;
  document.getElementById("lName").value = lastName;
});
document.getElementById("email").addEventListener("input", function () {
  const email = this.value.trim();
  const username = email.split("@")[0];
  document.getElementById("username").value = username;
});

document.getElementById("password").addEventListener("input", function () {
  const password = this.value.trim();
  const errorMessage = document.getElementById("errorMessage");
  if (password.length < 8) {
    errorMessage.textContent = "Password must be at least 8 characters long.";
  } else if (!/[A-Z]/.test(password)) {
    errorMessage.textContent =
      "Password must contain at least one uppercase letter.";
  } else {
    errorMessage.textContent = "";
  }
});
document
  .getElementById("confirm_password")
  .addEventListener("input", function () {
    const password = document.getElementById("password").value.trim();
    const confirmPassword = this.value.trim();
    const errorConfirmMessage = document.getElementById("errorConfirmMessage");

    if (password !== confirmPassword) {
      errorConfirmMessage.textContent = "Passwords do not match.";
    } else {
      // FIX: Changed 'errorMessage' to 'errorConfirmMessage'
      errorConfirmMessage.textContent = "";
    }
  });

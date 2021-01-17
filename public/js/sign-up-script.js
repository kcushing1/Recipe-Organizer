$(document).ready(function () {
  // Grab elements from page
  const signUpForm = $("#signup");
  const usernameInput = $("#username");
  const passwordInput = $("#password");
  const passwordConfirmInput = $("#password-confirm");

  // Handle form submit
  signUpForm.on("submit", (e) => {
    e.preventDefault();

    // Create user object from inputs
    const userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    // Validate inputs aren't empty
    if (!userData.username || !userData.password) return;

    // Validate user password confirmation
    const passwordConfirm = passwordConfirmInput.val().trim();
    if (userData.password !== passwordConfirm) {
      alert("Passwords must match!");
      passwordInput.val("");
      passwordConfirmInput.val("");
      passwordInput.focus();
      passwordInput.select();
      return;
    }

    // POST request
    $.post("/api/signup", userData)
      .done(() => {
        window.location.replace("/home");
      })
      .fail((err) => console.log(err));

    // Clear form
    usernameInput.val("");
    passwordInput.val("");
    passwordConfirmInput.val("");
  });
});

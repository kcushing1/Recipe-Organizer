$(document).ready(() => {
  // Grab elements from page
  const loginForm = $("#login");
  const usernameInput = $("#username");
  const passwordInput = $("#password");

  // Handle form submit
  loginForm.on("submit", (e) => {
    e.preventDefault();

    // Create user object from inputs
    const userData = {
      username: usernameInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    // Validate inputs aren't empty
    if (!userData.username || !userData.password) return;

    // POST request for login
    $.post("/api/login", userData)
      .done((user) => {
        window.location.replace("/home");
      })
      .fail((err) => {
        console.log(err);
      });

    // Clear form
    usernameInput.val("");
    passwordInput.val("");
  });
});

const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "202310046" && password === "mou5858") {
    console.log("Credentials matched, redirecting...");
    window.location.href = "pages/dashboard.html";
  } else {
    alert("Incorrect Password");
  }
});

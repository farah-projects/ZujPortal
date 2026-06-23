const settings = document.getElementById("settings");
const notifications = document.getElementById("notifications");
const home = document.getElementById("home");
const signout = document.getElementById("signout");
const examsCard = document.getElementById("examsCard");

settings.addEventListener("click", () => {
  window.location.href = "/pages/settings.html";
});

notifications.addEventListener("click", () => {
  window.location.href = "/pages/notification.html";
});

home.addEventListener("click", () => {
  window.location.href = "/pages/dashboard.html";
});

signout.addEventListener("click", () => {
  window.location.href = "../index.html";
});

examsCard.addEventListener("click", () => {
  window.location.href = "/pages/examscard.html";
});

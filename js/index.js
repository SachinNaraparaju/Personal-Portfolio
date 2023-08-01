let darkMode = false;
let menuToggled = false;
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  if (!menuToggled) {
    icon.innerHTML = `<i class="fa-solid fa-xmark icon hover-icon" style="font-size: 28px;"></i>`;
    menuToggled = true;
  } else {
    icon.innerHTML = `<i class="fa-solid fa-bars icon hover-icon" style="font-size: 28px;"></i>`;
    menuToggled = false;
  }
}

function darkToggle() {
  if (!darkMode) {
    $("h1").addClass("dark");
    $("h2").addClass("dark");
    $("h3").addClass("dark");
    $("p").addClass("dark");
    $(".top-nav").addClass("dark");
    $("a").addClass("dark");
    $("div").addClass("dark");
    $("section").addClass("dark");
    $(".arrow").css({ color: "#fff" });
    $(".details-container").addClass("dark");
    $("button").addClass("dark");
    $("footer").addClass("dark");
    $(".icon-scroll").addClass("dark");
    document.getElementById(
      "ham-dark-toggle"
    ).innerHTML = `<img src="./assets/sun_icon.png" alt="icon" class="icon hover-icon" style="height: 1.75rem">`;
    document.getElementById(
      "dark-toggle"
    ).innerHTML = `<img src="./assets/sun_icon.png" alt="icon" class="icon hover-icon" style="height: 1.5rem">`;
    // $('#profile').css("background-image", "url('./assets/cool-background_dark.png')");
    // $("#profile").css(
    //   "background-image",
    //   "url('./assets/dark-wallpaper.jpg')"
    // );
    darkMode = true;
  } else {
    $("h1").removeClass("dark");
    $("h2").removeClass("dark");
    $("h3").removeClass("dark");
    $(".top-nav").removeClass("dark");
    $("a").removeClass("dark");
    $("div").removeClass("dark");
    $("p").removeClass("dark");
    $("section").removeClass("dark");
    $(".arrow").css({ color: "black" });
    $(".details-container").removeClass("dark");
    $("button").removeClass("dark");
    $("footer").removeClass("dark");
    $(".icon-scroll").removeClass("dark");
    document.getElementById(
      "ham-dark-toggle"
    ).innerHTML = `<img src="./assets/moon.png" alt="icon" class="icon hover-icon" style="height: 1.75rem">`;
    document.getElementById(
      "dark-toggle"
    ).innerHTML = `<img src="./assets/moon.png" alt="icon" class="icon hover-icon" style="height: 1.15rem">`;
    // $("#profile").css(
    //   "background-image",
    //   "url('./assets/desktop-wallpaper-dark-ultra-minimalist.jpg')"
    // );
    darkMode = false;
  }
}

function submitForm() {
  const firstNameInput = document.getElementById("first-name").value;
  const lastNameInput = document.getElementById("last-name").value;
  const phoneNumberNameInput = document.getElementById("phone-number").value;
  const emailInput = document.getElementById("email").value;
  const messageInput = document.getElementById("message");

  const allInputs = document.querySelectorAll("input");
  allInputs.forEach((singleInput) => (singleInput.value = ""));
  alert("Succesfully Sent");
  messageInput.value = "";
}

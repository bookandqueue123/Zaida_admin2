// dashboard show and hide
$("#openSidebar").click(function () {
  $(".leftbar").addClass("biger");
});
$("#closebtn").click(function () {
  $(".leftbar").removeClass("biger");
});

$(document).ready(function () {
  //jquery for toggle sub menus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });
});

// Consuming apis
let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("password");
let submit = document.getElementById("submit");

const loginUser = () => {
  submit.innerHTML = "Loading...";
  fetch("https://zaida-website.herokuapp.com/api/admin/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((response) => {
      if (response.ok) {
        submit.innerHTML = "Login";
        window.location.href = "dashboard.html";
        return response.json();
      } else {
        document.getElementById("error").innerHTML =
          "Invalid login Credentials!";
        setTimeout(() => {
          document.getElementById("error").innerHTML = "";
        }, 2000);
        submit.innerHTML = "Login";
      }
    })
    .then((data) => {
      localStorage.setItem("token", data.token);
    })
    .catch((error) => {
      console.log(error);
    });
};

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");

  document.querySelector("#forside").addEventListener("click", slideOut);
  document.querySelector("#header_projects").addEventListener("click", slideOut);
}

function slideOut() {
  document.querySelector("#ball_1").classList.add("slide_out_left");
  document.querySelector("#ball_3").classList.add("slide_out_left");
  document.querySelector("#ball_2").classList.add("slide_out_right");
  document.querySelector("#ball_4").classList.add("slide_out_right");
  document.querySelector("#forside").classList.add("fade_out");

  document.querySelector("#ball_1").addEventListener("animationend", navigate);
  document.querySelector("#ball_3").addEventListener("animationend", navigate);
  document.querySelector("#ball_2").addEventListener("animationend", navigate);
  document.querySelector("#ball_4").addEventListener("animationend", navigate);
  document.querySelector("#forside").addaddEventListener("animationend", navigate);
}

function navigate() {
  window.location.href = "projects.html";
}

// document.querySelector("#project_2").addEventListener("animationend", moveAnimation);

// function moveAnimation() {
//   document.querySelector("#project_2").classList.add("move");
// }

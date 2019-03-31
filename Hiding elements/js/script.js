let hidden = true;

function revealForm() {
  hidden = !hidden;
  document.getElementById("hidden-form").className = hidden ? "form-container-hidden" : "form-container";
  document.getElementById("main").className = hidden ? "main" : "main-no-border";
}

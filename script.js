document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("action-btn");
  if (!button) return;

  button.addEventListener("click", () => {
    alert("Mahe Guessr starter template is ready!");
  });
});

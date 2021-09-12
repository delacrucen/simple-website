window.addEventListener("DOMContentLoaded", (event) => {
  let topButton = document.getElementById("topButton");

  window.onscroll = () => {
    if (
      document.body.scrollTop > 35 ||
      document.documentElement.scrollTop > 35
    ) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  };
});

const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");

  const priceTag = document.querySelectorAll(".price");

  if (toggleBtn.classList.contains("active")) {
    priceTag[0].innerHTML = "$19.99";
    priceTag[1].innerHTML = "$24.99";
    priceTag[2].innerHTML = "$39.99";
  } else {
    priceTag[0].innerHTML = "$199.99";
    priceTag[1].innerHTML = "$249.99";
    priceTag[2].innerHTML = "$399.99";
  }
});

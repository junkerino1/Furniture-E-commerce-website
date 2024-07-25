document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const popupContainer = document.querySelector(".popup-container");
  const popup = document.querySelector(".popup");
  const closePopup = document.querySelector(".close-popup");

  products.forEach((product) => {
    product.addEventListener("click", () => {
      // Set popup content based on the clicked product
      const productName = product.querySelector("h3").textContent;
      const productImageSrc = product.querySelector("img").getAttribute("src");
      const productPrice = product.querySelector(".price").textContent;

      document.querySelector(".popup-title").textContent = productName;
      document.querySelector(".popup-image").setAttribute("src", productImageSrc);
      document.querySelector(".popup-price span").textContent = productPrice;

      // Display the popup
      popupContainer.style.display = "flex";
    });
  });

  // Close popup when the close button is clicked
  closePopup.addEventListener("click", () => {
    popupContainer.style.display = "none";
  });

  // Close popup when clicking outside of it
  popupContainer.addEventListener("click", (event) => {
    if (event.target === popupContainer) {
      popupContainer.style.display = "none";
    }
  });
});

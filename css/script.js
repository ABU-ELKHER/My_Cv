// Get the modal and close button
const modal = document.getElementById("portfolio-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Get all portfolio images
const portfolioItems = document.querySelectorAll(".portfolio-item");

// Loop through each image and add click event listener
portfolioItems.forEach(item => {
  item.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = item.src;
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close the modal when clicked outside the image
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

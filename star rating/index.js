const stars = document.querySelectorAll(".stars  i");
console.log(stars);

stars.forEach((star, index1) => {
  star.addEventListener("mouseover", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? (star.style.transform = "scale(1.2)")
        : (star.style.transform = "scale(1)");
    });
    // star.style.transform = "scale(1.5)";
  });
  star.addEventListener("mouseout", () => {
    star.style.transform = "scale(1)";
  });
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2
        ? star.classList.add("active")
        : star.classList.remove("active");
    });
  });
});

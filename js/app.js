document.getElementById("cart-info").addEventListener("click", function() {
  const cart = document.getElementById("cart");
  cart.classList.toggle("show-cart");
  console.log(cart);
});

const FilterItems = (() => {
  const filter = document.querySelectorAll(".filterBtn");

  filter.forEach(btn => {
    btn.addEventListener("click", event => {
      const value = event.target.dataset.filter;
      // console.log(value);
      const storeItem = document.querySelectorAll(".store-item");
      // console.log(store-item);
      storeItem.forEach(item => {
        if (value === "all") {
          item.style.display = "block";
        } else {
          !item.classList.contains(value)
            ? (item.style.display = "none")
            : (item.style.display = "block");
        }
      });
    });
  });
})();

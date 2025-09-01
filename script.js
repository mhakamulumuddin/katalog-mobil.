// === Toggle Menu (Hamburger) ===
const hamburger = document.querySelector(".ri-menu-3-line");
const menu = document.querySelector(".menu");

if (hamburger && menu) {
  hamburger.addEventListener("click", () => {
    menu.classList.toggle("menu-active");
    hamburger.classList.toggle("active"); // animasi hamburger
  });

  window.addEventListener("scroll", () => {
    menu.classList.remove("menu-active");
    hamburger.classList.remove("active");
  });
}

// === Filter Produk ===
const btnFilter = document.querySelectorAll(".produk-box ul li");
const imgItem = document.querySelectorAll(".produk-list .item");

btnFilter.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Hapus class active dari semua tombol
    btnFilter.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Ambil teks tombol
    const btnText = btn.textContent.trim().toLowerCase();

    // Filter produk
    imgItem.forEach((item) => {
      if (btnText === "all produk" || item.dataset.filter === btnText) {
        item.style.display = "flex";
        item.classList.add("fade-in");
      } else {
        item.style.display = "none";
        item.classList.remove("fade-in");
      }
    });
  });
});

// === Keranjang Belanja ===
let cartCount = 0;
const cartCountElement = document.getElementById("cart-count");

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    cartCount++;
    cartCountElement.textContent = cartCount;
    cartCountElement.style.display = "inline-block";

    // animasi kecil biar lebih hidup
    cartCountElement.classList.add("bump");
    setTimeout(() => cartCountElement.classList.remove("bump"), 300);
  }
});

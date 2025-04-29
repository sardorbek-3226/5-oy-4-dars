const products = [
    { id: 1, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 2, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 3, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 4, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 5, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 6, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 7, name: "Kugoo Kirin M4", price: "29 900 ₽" },
    { id: 8, name: "Kugoo Kirin M4", price: "29 900 ₽" }
  ];
  
  const selectedIds = new Set();
  const productList = document.getElementById("product-list");
  const selectedDisplay = document.getElementById("selects-id");
  
  products.map((product) => {
    const div = document.createElement("div");
    div.className = "m-4 p-4 border rounded w-[250px]";
    div.innerHTML = `
      <img src="./src/images/moto.png" alt="moto">
      <h3 class="text-lg font-bold mt-2">${product.name}</h3>
      <div class="flex gap-3 text-sm mt-1">
        <p><img src="./src/images/Group.svg" alt=""> 2000 mAh</p>
        <p><i class="fa-solid fa-bolt"></i> 1,2 л.с.</p>
      </div>
      <div class="flex gap-3 text-sm">
        <p><i class="fa-solid fa-gauge-high"></i> 60 км/ч</p>
        <p><i class="fa-solid fa-stopwatch-20"></i> 5 часов</p>
      </div>
      <p class="mt-2 text-gray-500 line-through">39 900 ₽</p>
      <h4 class="text-xl font-semibold">${product.price}</h4>
      <div class="flex items-center justify-between mt-3">
        <i class="fa-solid fa-heart" style="color: #b30000;"></i>
        <i class="fa-solid fa-basket-shopping cursor-pointer" style="color: #6F73EE;" data-id="${product.id}"></i>
      </div>
    `;
    productList.appendChild(div);
  });
  
  productList.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-basket-shopping")) {
      const id = e.target.getAttribute("data-id");
      if (id) {
        selectedIds.add(id);
        selectedDisplay.innerText = `Buyurtma qilmoqchi bo'lgan mahsulotlaringiz ID lari: ${[...selectedIds].join(", ")}`;
      }
    }
  });

  
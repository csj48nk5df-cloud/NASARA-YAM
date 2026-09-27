const qty = document.getElementById("qty");
const method = document.getElementById("method");
const total = document.getElementById("total");
const form = document.getElementById("orderForm");

function updateTotal(){
  const quantity = Math.max(1, Number(qty.value) || 1);
  const delivery = method.value === "Delivery" ? 10 : 0;
  total.textContent = `GHS ${quantity * 25 + delivery}`;
}
qty.addEventListener("input", updateTotal);
method.addEventListener("change", updateTotal);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const quantity = Math.max(1, Number(qty.value) || 1);
  const fulfilment = method.value;
  const location = document.getElementById("location").value.trim() || "Not specified";
  const deliveryFee = fulfilment === "Delivery" ? 10 : 0;
  const grandTotal = quantity * 25 + deliveryFee;

  const message =
`Hello Nasara Yam Hub! 👋

I'd like to place an order.

Name: ${name}
Phone: ${phone}
Product: Fresh Yam
Quantity: ${quantity} tuber(s)
Fulfilment: ${fulfilment}
Location/Note: ${location}

Yam subtotal: GHS ${quantity * 25}
Delivery: GHS ${deliveryFee}
Total: GHS ${grandTotal}

Thank you!`;

  window.open(`https://wa.me/233595193594?text=${encodeURIComponent(message)}`, "_blank");
});

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".nav nav").classList.toggle("open");
});
document.querySelectorAll(".nav nav a").forEach(a => a.addEventListener("click", () => {
  document.querySelector(".nav nav").classList.remove("open");
}));
document.getElementById("year").textContent = new Date().getFullYear();
updateTotal();

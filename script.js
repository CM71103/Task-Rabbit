const allImages = [
  { src: "images/CaretakingServices.jpg", link: "services/caretaking.html", name: "Caretaking Services" },
  { src: "images/CleaningServices.jpg", link: "services/cleaning.html", name: "Cleaning Services" },
  { src: "images/ElectricianServices.jpg", link: "services/electrician.html", name: "Electrician Services" },
  { src: "images/ManicureServices.jpg", link: "services/manicureservices.html", name: "Manicure Services" },
  { src: "images/paintingService.webp", link: "services/paintingfile.html", name: "Painting Services" },
  { src: "images/plumbingServices.jpg", link: "services/plumbingservice.html", name: "Plumbing Services" },
  { src: "images/SaloonServices.jpg", link: "services/saloonServices.html", name: "Saloon Services" },
  { src: "images/SecurityServices.jpg", link: "services/Securityservices.html", name: "Security Services" },
  { src: "images/SpaServices.jpg", link: "services/spa.html", name: "Spa Services" }
];

const electricalImages = [
  { src: "images/FridgeRepairServices.jpg", link: "services/fridge.html", name: "Fridge Services" },
  { src: "images/Electronic items services/TvService.jpg", link: "services/tv.html", name: "TV Services" },
  { src: "images/Electronic items services/Washingmachineservices.jpg", link: "services/washingmachine.html", name: "Washing Machine Services" },
  { src: "images/Electronic items services/waterpurifierservices.jpg", link: "services/waterpurifier.html", name: "Water Purifier Services" }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderGallery(images) {
  const gallery = document.getElementById('serviceGallery');
  if (!gallery) return;
  gallery.innerHTML = '';

  images.forEach(img => {
    const container = document.createElement('div');
    const a = document.createElement('a');
    a.href = img.link;
    a.target = "_blank";
    const image = document.createElement('img');
    image.src = img.src;
    image.alt = img.name;
    a.appendChild(image);
    container.appendChild(a);

    const badge = document.createElement('div');
    badge.textContent = img.name.split(" ")[0];
    badge.style.cssText = `
      background: linear-gradient(135deg, #86C232, #a0da57);
      color: #1B1521;
      padding: 4px 8px;
      font-size: 12px;
      font-weight: bold;
      border-radius: 8px;
      margin-top: 4px;
      text-transform: uppercase;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    `;
    container.appendChild(badge);

    const addButton = document.createElement('button');
    addButton.textContent = "Add to Cart";
    addButton.onclick = () => addToCart(img);
    container.appendChild(addButton);

    gallery.appendChild(container);
  });
}

function addToCart(item) {
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) cartCount.textContent = cart.length;
}

function filterElectrical() {
  renderGallery(electricalImages);
}

function showAll() {
  renderGallery(allImages);
}

window.onload = () => {
  showAll();
  updateCart();
};

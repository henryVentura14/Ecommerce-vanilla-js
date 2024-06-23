export default class Carousel {
  constructor(products) {
    this.products = products;
    this.container = document.querySelector(".products-carousel");
    this.currentIndex = 0;
    this.totalProducts = this.products.length;
    this.nextButton = document.querySelector(".next");
    this.prevButton = document.querySelector(".prev");
    
    this.initializeCarousel();
  }

  initializeCarousel() {
    this.container.innerHTML = "";
    
    this.products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.className = "product";
      productElement.innerHTML = `
        <div class="content-img">
          <img src="${product.featuredImage.url}" alt="${product.title}">
        </div>
        <div class="content-btn">
          <button class="btn card">Add to cart</button>
        </div>
        <h3>${product.title} x${product.totalInventory}</h3>
        <div class="content-rating">
          <p class="stars">${this.renderStars(product.tags)} <span class="tags">(${product.tags.filter(tag => !isNaN(tag)).join(', ')})</span></p>
          <p>  ${this.getCurrencySymbol(product.prices.min.currencyCode)} ${this.formatPrice(product.prices.min.amount)}</p>
        </div>
      `;
      this.container.appendChild(productElement);
    });

    this.nextButton.addEventListener("click", () => this.scrollNext());
    this.prevButton.addEventListener("click", () => this.scrollPrev());
  }

  formatPrice(amount) {
    // Aquí puedes aplicar cualquier lógica adicional de formateo que necesites
    // Por ejemplo, redondear, añadir decimales, etc.
    return parseFloat(amount).toFixed(2); // Redondeamos a dos decimales
  }

  getCurrencySymbol(currencyCode) {
    // Función para obtener el símbolo de la moneda según el código
    switch (currencyCode) {
      case "EUR":
        return "€";
      // Puedes añadir más casos para otras monedas si es necesario
      default:
        return currencyCode; // En caso de no encontrar una coincidencia, devolver el código de moneda original
    }
  }

  renderStars(tags) {
    const numericTags = tags.filter(tag => !isNaN(tag)).map(Number);
    if (numericTags.length === 0) return 'No ratings';
  
    const average = numericTags.reduce((acc, tag) => acc + tag, 0) / numericTags.length;
    const starsCount = Math.min(Math.max(Math.floor(average / 100), 1), 5);
  
    let starsHTML = '';
    for (let i = 0; i < starsCount; i++) {
      starsHTML += `<img class="star-icon" src="https://svgshare.com/i/17Wx.svg" alt="star">`; // Estrella llena
    }
    for (let i = starsCount; i < 5; i++) {
      starsHTML += `<img  src="https://svgshare.com/i/17Wn.svg" alt="star">`; // Estrella vacía
    }
    return starsHTML;
  }

  scrollNext() {
    this.container.scrollBy({
      left: this.container.offsetWidth,
      behavior: "smooth"
    });
  }

  scrollPrev() {
    this.container.scrollBy({
      left: -this.container.offsetWidth,
      behavior: "smooth"
    });
  }
}

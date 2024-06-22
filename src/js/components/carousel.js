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
        <h2>${product.title}</h2>
        <img src="${product.featuredImage.url}" alt="${product.title}">
        <p>Price: ${product.prices.min.amount} ${product.prices.min.currencyCode}</p>
        <p>Inventory: ${product.totalInventory}</p>
      `;
      this.container.appendChild(productElement);
    });

    this.showProduct(this.currentIndex);
    this.nextButton.addEventListener("click", () => this.nextProduct());
    this.prevButton.addEventListener("click", () => this.prevProduct());
  }

  showProduct(index) {
    const products = this.container.querySelectorAll(".product");
    products.forEach((product, i) => {
      product.style.display = i === index ? "block" : "none";
    });
  }

  nextProduct() {
    this.currentIndex = (this.currentIndex + 1) % this.totalProducts;
    this.showProduct(this.currentIndex);
  }

  prevProduct() {
    this.currentIndex = (this.currentIndex - 1 + this.totalProducts) % this.totalProducts;
    this.showProduct(this.currentIndex);
  }
}

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
        <p>Price: ${product.prices.min.amount} ${product.prices.min.currencyCode}</p>
      `;
      this.container.appendChild(productElement);
    });

    this.nextButton.addEventListener("click", () => this.scrollNext());
    this.prevButton.addEventListener("click", () => this.scrollPrev());
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
